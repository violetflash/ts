import React, {FC, useState} from 'react';
import {Button, Input, Layout} from "antd";
import './EventsExample.css'

export const EventsExample: FC = () => {
    const [value, setValue] = useState<string>("");
    const [savedValue, setSavedValue] = useState<string>("");

    const changeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const saveHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
        setSavedValue(value);
    }

    return (
        <Layout className="layout">
            <Input value={value} onChange={changeHandle}/>
            <Button onClick={saveHandle}>Показать</Button>
            <Input value={savedValue} disabled/>
        </Layout>
    )
};