import React, { useState } from 'react';
import moment from 'moment';
import {Button, DatePicker, Form, Input, Row, Select} from "antd";
import locale from 'antd/es/date-picker/locale/ru_RU';
import s from "../LoginForm/LoginForm.module.scss";
import {rules} from "../../utils/rules";
import {IUser} from "../../models/IUser";
import {IEvent} from "../../models/IEvent";
import { useActions } from '../../utils/hooks/useActions';
import { useSelector } from '../../redux';
import {getFormattedDate} from "../../utils/functions";

const {Option} = Select;

interface IEventFormProps {
    guests: IUser[];
    closeModal: () => void;
}

export const EventForm = ({guests, closeModal}:IEventFormProps) => {
    const [form] = Form.useForm();
    const {createEvent} = useActions();
    const {user} = useSelector(state => state.authReducer);

    const onFinish = ({date, description, guest}: IEvent) => {
        const event: IEvent = {
            author: user.username,
            date: getFormattedDate(date),
            guest,
            description
        };

        createEvent(event);
        closeModal();
        form.resetFields();
    };

    const isLoading = false;

    return (
        <Form
            form={form}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            autoComplete="off"
            onFinish={onFinish}
        >
            <Form.Item
                className={s.Label}
                label="Описание события"
                name="description"
                rules={[rules.required()]}
            >
                <Input className={s.Input}/>
            </Form.Item>
            <Form.Item
                label="Выберите дату"
                name="date"
                rules={[rules.required()]}
            >
                <DatePicker
                    locale={locale}
                    style={{width: '100%'}}

                />
            </Form.Item>
            <Form.Item
                label="Выберите гостя"
                name="guest"
                rules={[rules.required()]}
            >
                <Select>
                    {guests.map((guest) => (
                        <Option key={guest.username} value={guest.username}>{guest.username}</Option>
                    ))}
                </Select>
            </Form.Item>
            <Row justify="center">
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Создать
                </Button>
            </Row>

        </Form>
    )
};
