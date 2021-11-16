import {eventActionsTypes, setEventsAction, setGuestsAction} from "./types";
import {IUser} from "../../../models/IUser";
import { IEvent } from "../../../models/IEvent";
import {AppDispatch} from "../../store/store";
import {userService} from "../../../api";

export const eventActionCreators = {
    setGuests: (payload: IUser[]): setGuestsAction => ({type: eventActionsTypes.SET_GUESTS, payload}),
    setEvents: (payload: IEvent[]): setEventsAction => {

        return {type: eventActionsTypes.SET_EVENTS, payload}
    },
    fetchGuests: () => async (dispatch: AppDispatch) => {
        try {
            const response = await userService.getUsers();

            if (response.data) {
                dispatch(eventActionCreators.setGuests(response.data));
            }

        } catch(e) {

        }
    },
    createEvent: (event: IEvent) => (dispatch: AppDispatch) => {
        try {
            const events = JSON.parse(localStorage.getItem('events') || "[]") as IEvent[];
            events.push(event);
            dispatch(eventActionCreators.setEvents(events));
            localStorage.setItem('events', JSON.stringify(events));
        } catch (e) {

        }
    },
    fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
        try {
            const events = JSON.parse(localStorage.getItem('events') || "[]") as IEvent[];

            if (events.length === 0) return;

            const visibleEvents = events.filter(event => event.guest === username || event.author === username);
            dispatch(eventActionCreators.setEvents(visibleEvents));
        } catch (e) {

        }
    }
};
