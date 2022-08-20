import React from 'react';
import { Menu } from 'antd';
import {
    SecurityScanOutlined,
    HistoryOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const SideNav = () => {
    const navigate = useNavigate();

    const handleDashboardClick = () => {
        navigate('/dashboard');
    }

    const handleHistoryClick = () => {
        navigate('/history');
    }

    return (
        <>
            <div>
                <div style={{ height: "32px", background: "rgba(255, 255, 255, 0.2)", margin: "16px" }}></div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" onClick={handleDashboardClick}>
                        <SecurityScanOutlined />
                        <span> Dashboard</span>
                    </Menu.Item>
                    <Menu.Item key="2" onClick={handleHistoryClick}>
                        <HistoryOutlined />
                        <span> Historial</span>
                    </Menu.Item>
                </Menu>
            </div>
        </>
    );
}

export default SideNav;
