import React, {FC, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import { useSelector } from '../redux';
import { RouteNames } from '../router';
import {Calendar} from "../components";
import { useActions } from '../utils/hooks/useActions';
import { IUser } from '../models/IUser';



export const EventPage: FC = () => {
    const {fetchGuests} = useActions();
    const {isAuth} = useSelector(state => state.authReducer);
    const navigate = useNavigate();

    useEffect(() => {
        fetchGuests();
    }, [fetchGuests])

    useEffect(() => {
        if (!isAuth) {
            navigate(RouteNames.LOGIN);
        }
    }, [isAuth, navigate]);

    return (
        <div>
            <Calendar event={[]}/>
        </div>
    )
};
