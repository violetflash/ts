import React from 'react';
import {Button, DatePicker, Form, Input, Row, Select} from "antd";
import s from "../LoginForm/LoginForm.module.scss";
import {rules} from "../../utils/rules";

const {Option} = Select;


export const EventForm = () => {
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
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                        Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
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
