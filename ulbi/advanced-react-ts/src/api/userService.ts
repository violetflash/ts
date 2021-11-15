import axios, { AxiosResponse } from "axios";
import { IUser } from "../models/IUser";

export const userService = {

    //типизация axios response
    async getUsers(): Promise<AxiosResponse<IUser[]>> {
        return axios.get<IUser[]>('users.json');
    }
};



