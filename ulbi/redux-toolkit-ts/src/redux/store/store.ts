import {configureStore} from '@reduxjs/toolkit';
import {userSlice} from "../slices";

export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
});

export type RootStateT = ReturnType<typeof store.getState>;
export type AppDispatchT = typeof store.dispatch;
