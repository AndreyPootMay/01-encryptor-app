import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import SideNav from "../components/layouts/SideNav";
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import Dashboard from '../components/pages/Dashboard';
import History from '../components/pages/History';

const { Header, Sider, Content } = Layout;

const ApplicationRoutes = () => {
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    window.innerWidth <= 760 ? setCollapse(true) : setCollapse(false);
  }, []);

  const handleToggle = (event) => {
    event.preventDefault();
    collapse ? setCollapse(false) : setCollapse(true);
  };

  return (
    <Router>
      <Layout className='layout'>
        <Sider trigger={null} collapsible collapsed={collapse}>
          <SideNav />
        </Sider>
        <Layout>
          <Header className="siteLayoutBackground" style={{ padding: 0, background: "#001529" }}>
            {React.createElement(collapse ? MenuFoldOutlined : MenuUnfoldOutlined, {
              className: 'trigger',
              onClick: handleToggle,
              style: { color: "#fff" }
            })}
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, minHeight: "calc(100vh - 114px)", background: "#fff" }}>
            <Routes>
              <Route path="/" element={<Dashboard />}>
                <Route index element={<Dashboard />} />
                <Route path="dashboard" element={<Dashboard />}>
                  <Route path="history" element={<History />} />
                </Route>
              </Route>
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default ApplicationRoutes;
