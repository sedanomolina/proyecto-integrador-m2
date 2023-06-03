import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, ADD_CHARACTER, REMOVE_CHARACTER,CLEAR_CHARACTERS } from "../actions/types";

const initialState = {
    allCharacters: [],
    myFavorites: [],
    allCharactersFav: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case ADD_CHARACTER:
            state.allCharacters.length > 7 && state.allCharacters.shift()
            return {
                ...state
                , allCharacters: [...state.allCharacters, payload]
            }


        case REMOVE_CHARACTER:
            return {
                ...state
                , allCharacters: []
            };

        case CLEAR_CHARACTERS:
            return {
                ...state
                , allCharacters: [...state.allCharacters.filter(character => character.id !== payload)]
            };


        // Section favorites
        case ADD_FAV:
            return {
                ...state
                , myFavorites: [...state.allCharactersFav, payload]
                , allCharactersFav: [...state.allCharactersFav, payload]
            };

        case REMOVE_FAV:
            return {
                ...state
                , myFavorites: [...state.allCharactersFav.filter(favorite => favorite.id !== payload)]
            };

        case FILTER:
            return {
                ...state
                , myFavorites: [...state.allCharactersFav.filter(character => character.gender === payload)]
            };

        case ORDER:
            return {
                ...state
                , myFavorites: payload === 'A'
                    ? [...state.allCharactersFav].sort((a, b) => a.id - b.id)
                    : [...state.allCharactersFav].sort((a, b) => b.id - a.id)
            }

        default:
            return { ...state };
    };
};

export default rootReducer;