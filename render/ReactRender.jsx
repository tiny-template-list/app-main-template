import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, useHistory } from 'react-router-dom';
import { Menu, Search, Nav, Shell, Radio } from '@alifd/next';


const { SubNav, Item, Group, Divider } = Nav;
/**
 * 渲染子应用
 */
function Render(props) {

  const history = useHistory();
  const { loading } = props;

  const [ selectedKeys, setSelectedKeys ] = useState(['0-0']);

  // return (
  //   <>
  //     {loading && <h4 className="subapp-loading">Loading...</h4>}
  //     <div id="subapp-viewport" />
  //   </>
  // );

  const handleSelect = (value, item) => {
    setSelectedKeys(value)
    if (item.props.path) {
      history.push(item.props.path)
    }
  }

  return (
    <Shell
          className={"iframe-hack"}
          device={"desktop"}
          style={{ border: "1px solid #eee" }}
        >
          <Shell.Branding>
            <div className="rectangular"></div>
            <span style={{ marginLeft: 10 }}>App Name</span>
          </Shell.Branding>
          <Shell.Navigation direction="hoz">
            <Search
              key="2"
              shape="simple"
              type="dark"
              palceholder="Search"
              style={{ width: "200px" }}
            />
          </Shell.Navigation>
          <Shell.Action>
            <img
              src="https://img.alicdn.com/tfs/TB1.ZBecq67gK0jSZFHXXa9jVXa-904-826.png"
              className="avatar"
              alt="用户头像"
            />
            <span style={{ marginLeft: 10 }}>MyName</span>
          </Shell.Action>

          <Shell.Navigation>
            <Nav embeddable aria-label="global navigation" onSelect={handleSelect} selectedKeys={selectedKeys}>
              <Nav.Item icon="account" path="/react16">sub-react16</Nav.Item>
              <Nav.Item icon="calendar" path="/vue3">sub-vue3</Nav.Item>
              <Nav.Item icon="atm" path="/angular9">sub-angular9</Nav.Item>
              <Nav.Item icon="account" path="/purehtml" >sub-purehtml</Nav.Item>
              <Nav.Item icon="account">Nav Item 5</Nav.Item>
              <Nav.Item icon="account">Nav Item 6</Nav.Item>
              <Nav.Item icon="account">Nav Item 7</Nav.Item>
            </Nav>
          </Shell.Navigation>

          <Shell.Content>
           {loading && <h4 className="subapp-loading">Loading...</h4>}
            <div id="subapp-viewport" style={{ minHeight: 1200, background: "#fff" }}></div>
          </Shell.Content>
        </Shell>
  )

}

export default function render({ loading }) {
  const container = document.getElementById('subapp-container');
  ReactDOM.render(<BrowserRouter><Render loading={loading} /></BrowserRouter>, container);
}
