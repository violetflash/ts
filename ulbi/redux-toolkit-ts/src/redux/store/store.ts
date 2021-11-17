import {configureStore} from '@reduxjs/toolkit';
import {pokemonSlice, userSlice} from "../slices";

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        pokemon: pokemonSlice.reducer
    }
});

export type RootStateT = ReturnType<typeof store.getState>;
export type AppDispatchT = typeof store.dispatch;
