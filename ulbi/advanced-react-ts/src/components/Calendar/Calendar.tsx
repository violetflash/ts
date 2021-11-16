import React, {FC, useState} from 'react';
import {Badge, Button, Calendar as AntdCalendar, Modal, Row} from 'antd';
import {IEvent} from "../../models/IEvent";
import {EventForm} from "../EventForm/EventForm";
import {useSelector} from "../../redux";
import moment, {Moment} from "moment";
import {getFormattedDate} from "../../utils/functions";

interface EventCalendarProps {
    event: IEvent[];
}

export const Calendar: FC<EventCalendarProps> = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const {guests, events} = useSelector(state => state.eventReducer);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    function dateCellRender(value: Moment) {
        const listData = events.filter(event => event.date === getFormattedDate(value));

        if (!listData) {
            return;
        }

        return (
            <ul style={{listStyle: 'none', margin: 0, padding: "0 5px "}} className="events">
                {listData.map(event => (
                    <li key={event.description}>
                        <Badge status="success" text={`Автор: ${event.author} | ${event.description}. Гость: ${event.guest}`} />
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <>
            <AntdCalendar dateCellRender={dateCellRender}/>
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
