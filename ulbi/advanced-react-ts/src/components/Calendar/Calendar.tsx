import React, {FC, useState} from 'react';
import {Button, Calendar as AntdCalendar, Modal, Row} from 'antd';
import {IEvent} from "../../models/IEvent";
import {EventForm} from "../EventForm/EventForm";
import {useSelector} from "../../redux";

interface EventCalendarProps {
    event: IEvent[];
}

export const Calendar: FC<EventCalendarProps> = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const {guests} = useSelector(state => state.eventReducer);


    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <>
            <AntdCalendar/>
            <Row justify="center">
                <Button onClick={showModal}>Добавить событие</Button>
            </Row>
            <Modal
                title="Создать событие"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}

            >
                <EventForm guests={guests} closeModal={handleCancel}/>
            </Modal>
        </>
    )
};
