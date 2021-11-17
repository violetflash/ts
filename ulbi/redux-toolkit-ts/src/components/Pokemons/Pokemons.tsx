import React, { useEffect } from 'react';
import { useAppDispatch } from '../../utils/hooks';
import {fetchPokemon} from "../../redux";

export const Pokemons = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchPokemon("bulbasaur"));

    }, [dispatch])

    return (
        <div>

        </div>
    )
};
