import React from "react";
import {EventPage, Login} from "../pages";

export interface IRoute {
    title: string;
    path: string;
    element: React.ReactElement;
}

export enum RouteNames {
    LOGIN = "/login",
    EVENT = "/"
}

export const publicRoutes: IRoute[] = [
    {title: "Login", path: RouteNames.LOGIN, element: <Login/>}
];

export const privateRoutes: IRoute[] = [
    {title: "Events", path: RouteNames.EVENT, element: <EventPage/>}
];
