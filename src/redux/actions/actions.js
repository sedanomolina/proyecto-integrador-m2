
import axios from "axios";
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, ADD_CHARACTER, REMOVE_CHARACTER, CLEAR_CHARACTERS } from "./types"


export const addFav = (character) => ({
    type: ADD_FAV,
    payload: character
});

export const removeFav = (id) => ({
    type: REMOVE_FAV,
    payload: id
});

export const filterCards = (gender) => ({
    type: FILTER,
    payload: gender
});

export const orderCards = (order) => ({
    type: ORDER,
    payload: order
});

export const getCharacters = (id) => (dispatch) => {
    axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => dispatch({ type: ADD_CHARACTER, payload: data }))
        .catch(() => window.alert('Error al buscar el personaje'));
};

export const removeCharacter = (id) => ({
    type: REMOVE_CHARACTER,
    payload: id
});

export const clearCharacters = () => ({
    type: CLEAR_CHARACTERS
})





