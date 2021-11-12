import React, {FC} from 'react';
import { IUser } from '../../types/types';
import {List} from "antd";
import {UserItem} from "../UserItem/UserItem";

interface UserListProps {
    users: IUser[]
}


export const UserList: FC<UserListProps> = ({users}) => {
    const userItems = users.map((user) => {
        return (
            <UserItem key={user.id} user={user}/>
        )
    });

    return (
        <List>
            {userItems}
        </List>
    )
};
