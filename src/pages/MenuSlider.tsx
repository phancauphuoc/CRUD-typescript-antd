import React from 'react'
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { HomeOutlined, UserOutlined, DashboardOutlined, ContainerOutlined, LogoutOutlined, UserAddOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import type { MenuProps, MenuTheme } from 'antd';
const MenuSlider = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Menu
                style={{ height: '100%' }}
                mode='inline'
                onClick={(value) => {
                    if (value.key === 'logout') {
                        alert('Logout');
                    } else {
                        navigate(value.key);
                    }
                    console.log('aaa', value);
                }}
                items={[
                    { label: "Home", key: '/', icon: <HomeOutlined /> },
                    {
                        label: "Member", key: 'member', icon: <UserOutlined />, children: [
                            { label: 'List Member', key: 'member/listMember', icon: <UsergroupAddOutlined /> },
                            { label: 'Create Member', key: 'member/createMember', icon: <UserAddOutlined /> }
                        ]
                    },
                    { label: "Voucher Content", key: 'voucher-content', icon: <DashboardOutlined /> },
                    { label: "Contact", key: 'contact', icon: <ContainerOutlined /> },
                    { label: "Logout", key: 'logout', danger: true, icon: <LogoutOutlined /> }
                ]}
            >
            </Menu>
        </div>
    )
}

export default MenuSlider