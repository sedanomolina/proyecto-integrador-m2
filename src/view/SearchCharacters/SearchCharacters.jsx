import { useState } from "react";
import axios from "axios";
import Cards from "../../components/Cards/Cards";
import styles from './SearchCharacters.module.css'
import SearchBar from "../../components/SearchBar/SearchBar";

export default function SearchCharacters() {

    const [characters, setCharacters] = useState([]);

    const onSearch = (id) => {

        if (characters.find(character => character.id === Number(id))) {
            return;
        };
        axios(`https://rickandmortyapi.com/api/character/${id}`)
            .then(({ data }) => setCharacters([...characters, data]))
            .catch(() => window.alert('Error al buscar el personaje'));
    };

    const onClose = (id) => {
        setCharacters([...characters.filter(character => character.id !== id)])
    }

    const onSearchEpisodes = (id) => {
        if (Number(id) > 51) {
            return;
        }

        axios(`https://rickandmortyapi.com/api/episode/${id}`)
            .then(({ data }) => {
                const characterURLs = data.characters;
                const characterRequests = characterURLs.map(url => axios.get(url).then(({ data }) => data));

                Promise.all(characterRequests)
                    .then(charactersData => {
                        const newCharacters = charactersData.map(character => (character));

                        setCharacters([...newCharacters]);
                    })
                    .catch(() => window.alert('Error al buscar el personaje'));
            })
            .catch(() => window.alert('Error al buscar el episodio'));
    };



    const characterRandom = () => {

        const min = 1;
        const max = 826;
        const idRandom = Math.floor(Math.random() * (max - min + 1)) + min;

        axios(`https://rickandmortyapi.com/api/character/${idRandom}`)
            .then(({ data }) => setCharacters([...characters, data]))
            .catch(() => window.alert('Error al buscar el personaje'));
    }

    return (
        <section className={styles.container}>

            <fieldset className={styles.container__inputs}>
                <SearchBar onSearch={onSearch} />
                <SearchBar onSearch={onSearchEpisodes} />
                <button onClick={characterRandom} >Random</button>
            </fieldset>

            <Cards
                className={styles.container__cards}
                onSearch={onSearch}
                onClose={onClose}
                characters={characters}
            />
        </section>
    )
}