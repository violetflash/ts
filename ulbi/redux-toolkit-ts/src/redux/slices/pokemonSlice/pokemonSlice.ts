import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import axios from "axios";
import { IPokemon } from '../../../utils/models';

export const fetchPokemon = createAsyncThunk<IPokemon, number>(
    'pokemon/fetchPokemon',
    async (page, thunkAPI) => {
        try {
            const response = await axios.get(`https://rickandmortyapi.com/api/character/`, {
                params: {
                    _page: page
                }
            });
            console.log(response.data);
            return {
                id: response.data.id,
                name: response.data.name,
                image: response.data.sprites.front_default
            };
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

interface StateType {
    pokemons: IPokemon[];
    isLoading: boolean;
    error: string | null;
}

const initialState: StateType = {
    pokemons: [],
    isLoading: false,
    error: null
}

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPokemon.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchPokemon.fulfilled.type]: (state, action: PayloadAction<IPokemon>) => {
            state.pokemons.push(action.payload);
            state.isLoading = false;
            state.error = null;
        },
        [fetchPokemon.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
})
