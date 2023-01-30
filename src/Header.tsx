import { Dropdown, Col, Row } from 'antd'
import React from 'react'
import type { MenuProps } from 'antd';

const Header = () => {

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/phancauphuoc/">
                    Phan Phuoc
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/phancauphuoc?tab=repositories">
                    Info
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="">
                    Logout
                </a>
            ),
        },
    ];


    return (
        <div style={{ height: '80px', width: '100%', backgroundColor: '#f4f7fa' }}>
            <Row>
                <Col span={12}>
                    <div>
                        <h3><span style={{ color: '#6e6969' }}>Hello,</span> Admin !</h3>
                    </div>
                </Col>
                <Col span={3} offset={9}>
                    <div style={{ textAlign: 'right', marginRight: '10px' }}>
                        <Dropdown menu={{ items }}>
                            <img src='https://res.cloudinary.com/phancauphuoc/image/upload/v1673837039/samples/Phuoc_d0lxl6.jpg' height={70} width={70} style={{ borderRadius: '50px', marginTop: '5px' }} />
                        </Dropdown>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Header