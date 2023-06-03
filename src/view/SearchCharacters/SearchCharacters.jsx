
import Cards from "../../components/Cards/Cards";
import styles from './SearchCharacters.module.css'
import SearchBar from "../../components/SearchBar/SearchBar";
import { getCharacters, removeCharacter } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

export default function SearchCharacters() {

    const dispatch = useDispatch();

    const characters = useSelector(state => state.allCharacters)
    // ------------------------LOCAL STORAE---------------
    // useEffect(() => {
    //     const storedCharacters = localStorage.getItem("characters");
    //     if (storedCharacters) {
    //         // setCharacters(JSON.parse(storedCharacters));
    //         dispatch
    //     }
    // }, []);

    // useEffect(() => {
    //     localStorage.setItem("characters", JSON.stringify(characters));
    // }, [characters]);

    // ------------------------------------------------

    const onSearch = (id) => {

        if (characters.find(character => character.id === Number(id))) {
            return;
        };

        dispatch(getCharacters(id))
    };

    const onClose = (id) => {
        dispatch(removeCharacter(id))
    }

    const onSearchCharacterRandom = () => {
        const [min, max] = [1, 826]
        const idRandom = Math.floor(Math.random() * (max - min + 1)) + min;
        
        // Evitamos un character repetido
        if (characters.find(character => character.id === idRandom)) {
            return;
        };
        dispatch(getCharacters(idRandom))
    }



    return (
        <section className={styles.container}>

            <fieldset className={styles.container__inputs}>
                <SearchBar onSearch={onSearch} onSearchCharacterRandom={onSearchCharacterRandom} />

            </fieldset>

            <Cards
                // className={styles.container__cards}
                onSearch={onSearch}
                onClose={onClose}
                characters={characters}
            />
        </section>
    )
}