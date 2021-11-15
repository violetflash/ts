import { IEvent } from "../../../models/IEvent";
import {IUser} from "../../../models/IUser";

export interface IEventState {
    guests: IUser[];
    events: IEvent[];
}

export enum eventActionsTypes {
    SET_EVENTS = "SET_EVENTS",
    SET_GUESTS = "SET_GUEST",
}


export interface setGuestsAction {
    type: eventActionsTypes.SET_GUESTS;
    payload: IUser[];
}

export interface setEventsAction {
    type: eventActionsTypes.SET_EVENTS;
    payload: IEvent[];
}

export type EventActionsTypes = setGuestsAction | setEventsAction;
