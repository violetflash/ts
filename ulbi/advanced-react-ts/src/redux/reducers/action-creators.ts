import {AuthActionCreators} from "./auth/auth-action-creators";
import {eventActionCreators} from "./event/action-creators";

export const appActionCreators = {
    ...AuthActionCreators,
    ...eventActionCreators
}

