import React, {FC} from 'react';
import {IUser} from "../../types/types";
import {List} from "antd";

interface IUserItemProps {
    user: IUser;
}

export const UserItem: FC<IUserItemProps> = ({user}) => {
    const { name, id, address } = user;

    return (
        <List.Item>
            {id}) {name} - проживает в городе {address.city} на улице {address.street}
        </List.Item>
    )
};
