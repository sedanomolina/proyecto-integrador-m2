import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import styles from './Favorites.module.css'
import { filterCards, orderCards } from '../../redux/actions/actions'
import { useDispatch } from "react-redux";

const Favorites = () => {

    // const { id, name, staus, species, gender, origin, imagen, onClose } = props.myFavorites
    const [aux, setAux] = useState(false)

    const dispatch = useDispatch()
    const { myFavorites } = useSelector(state => state)

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        setAux(!aux);
    };

    const handleFilter = (event) => {
        const { value } = event.target
        dispatch(filterCards(value));
    };

    return (
        <section className={styles.container}>
            <div className={styles.container__search}>

                <select onChange={handleOrder}>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>

                <select onChange={handleFilter} >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>
            <div className={styles.container_cards}>

                {myFavorites.map(character => (
                    <Card
                        key={character.id}
                        onClose={() => character.onClose(character.id)}
                        id={character.id}
                        name={character.name}
                        status={character.status}
                        species={character.species}
                        gender={character.gender}
                        origin={character.origin?.name}
                        image={character.image}
                    />
                ))}
            </div>

        </section>
    )
};

export default Favorites;

// const mapStateToProps = (state) => ({
//     myFavorites: state.myFavorites
// })

// export default connect(mapStateToProps, null)(Favorites)
