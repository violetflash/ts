import React, {FC} from 'react';
import {Menu} from "antd";
import {useLocation, useNavigate} from "react-router-dom";
import {publicRoutes} from "../../router";
import {useSelector} from "../../redux";


export const NavBar: FC = () => {
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const {isAuth} = useSelector(state => state.authReducer);



    const menuItems = publicRoutes.map((route) => {

        if (isAuth && route.path === '/login') {
            return undefined;
        }

        return (
            <Menu.Item
                key={route.path}
                onClick={() => navigate(route.path)}
                style={{background: pathname === route.path ? "#1890FF" : "transparent"}}
            >
                {route.title}
            </Menu.Item>
        );
    });

    return (
        <Menu selectable={false} mode="horizontal" theme="dark" disabledOverflow={true}>
            {menuItems}
        </Menu>

    )
};