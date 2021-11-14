import React from 'react';
import {List as AntList} from "antd";

//указываем тип Т дженерика
interface IListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}

export function List<T>(props: IListProps<T>) {
    return (
        <AntList>
            {props.items.map(props.renderItem)}
        </AntList>
    )
}