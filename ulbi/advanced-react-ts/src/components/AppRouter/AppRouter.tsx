import React, {FC} from 'react';
import {Routes, Route} from 'react-router-dom'
import {PageLayout} from "../PageLayout/PageLayout";
import {privateRoutes, publicRoutes} from "../../router";
import {NotFound} from "../../pages";

export const AppRouter: FC = props => {
    const publicPages = publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element}/>
    ));

    const privatePages = privateRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element}/>
    ));




    return (
        <Routes>
            <Route path="/" element={<PageLayout/>}>
                {publicPages}
                {privatePages}
                <Route path="/*" element={<NotFound/>}/>
            </Route>
        </Routes>
    )
};