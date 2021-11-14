import React, {FC} from 'react';
import {Layout, Row} from 'antd';
import {Outlet} from 'react-router-dom';
import {NavBar} from "../NavBar/NavBar";
import {User} from "../User/User";
import { useSelector } from '../../redux';

const {Header, Content, Footer} = Layout;

export const PageLayout: FC = () => {
    const {isAuth} = useSelector(state => state.authReducer);

    return (
        <Layout className="layout">
            <Header>
                <Row justify="end">
                    <NavBar/>
                    {isAuth && <User/>}
                </Row>
            </Header>
            <Content style={{ padding: '0 50px' }} >
                <div className="site-layout-content">
                    <Outlet/>
                </div>
            </Content>
            {/*<Footer style={{ textAlign: 'center', background: "lightcyan" }}>Ant Design ©2018 Created by Ant UED</Footer>*/}
        </Layout>
    )
};