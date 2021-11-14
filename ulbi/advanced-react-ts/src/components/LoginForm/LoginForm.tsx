import React, {FC} from 'react';
import {Button, Form, Input, Typography} from "antd";
import s from './LoginForm.module.scss';
import { rules } from '../../utils/rules';
import { IUser } from '../../models/IUser';
import { useSelector } from '../../redux';
import {useActions} from '../../utils/hooks/useActions';

export const LoginForm: FC = props => {
    const {login} = useActions();
    const {error, isLoading} = useSelector(state => state.authReducer);

    const onFinish = ({username, password}: IUser) => {
        login(username, password);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            style={{position: 'relative'}}
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            autoComplete="off"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                className={s.Label}
                label="Имя пользователя"
                name="username"
                rules={[rules.required('Пожалуйста, введите имя пользователя!')]}
            >
                <Input className={s.Input}/>
            </Form.Item>
            <Form.Item
                className={s.Label}
                label="Пароль"
                name="password"
                rules={[rules.required('Пожалуйста, введите пароль!')]}
            >
                <Input.Password className={s.Input}/>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Войти
                </Button>
            </Form.Item>
            {error.length > 0 && <Typography.Text style={{position: 'absolute', bottom: '-20px', color: 'red'}}>{error}</Typography.Text>}
        </Form>
    )
};