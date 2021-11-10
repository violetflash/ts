import React from 'react';
import {useSelector} from "react-redux";
import {useTypedSelector} from "../utils/hooks/useTypedSelector";

export const UserList: React.FC = props => {
    const {users, isLoading, error} = useTypedSelector(state => state.users);
    console.log(users);
    return (
        <div>

        </div>
    )
};