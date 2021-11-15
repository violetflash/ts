import React from 'react';
import {Button, DatePicker, Form, Input, Row, Select} from "antd";
import s from "../LoginForm/LoginForm.module.scss";
import {rules} from "../../utils/rules";
import { useSelector } from '../../redux';
import {IUser} from "../../models/IUser";

const {Option} = Select;

interface IEventFormProps {
    guests: IUser[];
}

export const EventForm = ({guests}:IEventFormProps) => {

    console.log(guests);
    const onFinish = () => {

    };

    // const onChange = (date, dateString) => {
    //     console.log(date, dateString);
    // }

    const handleSelectChange = (value: string) => {
        console.log(`selected ${value}`);
    }

    const isLoading = false;

    return (
        <Form
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
                <DatePicker style={{width: '100%'}}/>
            </Form.Item>
            <Form.Item
                label="Выберите гостя"
                name="guest"
                rules={[rules.required()]}
            >
                <Select  onChange={handleSelectChange}>
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
