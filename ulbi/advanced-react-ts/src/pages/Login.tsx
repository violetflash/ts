import React, {FC, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {Row} from "antd";
import {LoginForm} from "../components";
import {RouteNames} from "../router";
import {useSelector} from "../redux";

export const Login: FC = () => {
    const navigate = useNavigate();
    const {isAuth} = useSelector(state => state.authReducer);

    useEffect(() => {
        if (isAuth) {
            navigate(RouteNames.EVENT);
        }
    }, [isAuth, navigate]);
    
  return (
      <Row justify="center" align="middle" className="h100">
          <LoginForm/>
      </Row>
  );
};