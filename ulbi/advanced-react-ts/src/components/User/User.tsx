import React, {FC} from 'react';
import s from "./User.module.scss";
import {Avatar, Button, Typography} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {useSelector} from "../../redux";
import { useActions } from '../../utils/hooks/useActions';

export const User: FC = () => {
    const {logout} = useActions();

    const {user} = useSelector(state => state.authReducer);

    const logoutHandle = () => {
        logout();
    };

    return (
        <div className={s.User}>
            <Avatar size={50} icon={<UserOutlined />} />
            <Typography.Text className={s.Name}>{user.username}</Typography.Text>
            <Button className={s.Logout} onClick={logoutHandle} type="primary">Выйти</Button>
        </div>
    )
};