import {eventActionsTypes, setEventsAction, setGuestsAction} from "./types";
import {IUser} from "../../../models/IUser";
import { IEvent } from "../../../models/IEvent";
import {AppDispatch} from "../../store/store";
import {userService} from "../../../api";



export const eventActionCreators = {
    setGuests: (payload: IUser[]): setGuestsAction => ({type: eventActionsTypes.SET_GUESTS, payload}),
    setEvents: (payload: IEvent[]): setEventsAction => ({type: eventActionsTypes.SET_EVENTS, payload}),
    fetchGuests: async (dispatch: AppDispatch) => {
        try {
            const response = await userService.getUsers();

            if (response.data) {
                dispatch(eventActionCreators.setGuests(response.data));
            }

        } catch(e) {

        }


    }
};
