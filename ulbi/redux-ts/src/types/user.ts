export interface UserStateI {
    users: any[];
    isLoading: boolean;
    error: string | null
}


export enum UserActionTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR"
}

//отдельный интерфейс для каждого экшна
interface FetchUserActionI {
    type: UserActionTypes.FETCH_USERS
}

interface FetchUserSuccessActionI {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}

interface FetchUserErrorActionI {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

//обобщение интерфейса для экшна  - юнион
export type UserActionT = FetchUserActionI | FetchUserSuccessActionI | FetchUserErrorActionI;
