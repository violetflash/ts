import React, {FC, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import { useSelector } from '../redux';
import { RouteNames } from '../router';

export const EventPage: FC = () => {
    const {isAuth} = useSelector(state => state.authReducer);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuth) {
            navigate(RouteNames.LOGIN);
        }
    }, [isAuth, navigate]);

    return (
        <div>
            CALENDAR
        </div>
    )
};