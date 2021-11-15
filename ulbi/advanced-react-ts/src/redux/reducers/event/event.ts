import {eventActionsTypes, EventActionsTypes, IEventState} from "./types";

const initialState: IEventState = {
    guests: [],
    events: [],
};


export const eventReducer = (state = initialState, action: EventActionsTypes): IEventState => {
    switch (action.type) {
        case eventActionsTypes.SET_EVENTS:
            return {...state, events: action.payload};
        case eventActionsTypes.SET_GUESTS:
            return {...state, guests: action.payload};
        default:
            return state;
    }
}
