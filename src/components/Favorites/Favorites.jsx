import React, { useState } from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";
import styles from './Favorites.modules.css'
import { filterCards, orderCards } from '../../redux/actions/actions'
import { useDispatch } from "react-redux";

const Favorites = (props) => {

    // const { id, name, staus, species, gender, origin, imagen, onClose } = props.myFavorites
const [aux, setAux] = useState(false)

    const dispatch = useDispatch()

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        setAux(!aux);
    };

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value));
    };
    console.log(props);

    return (
        <section className={styles.container__cards}>

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

            {props.myFavorites.map(character => (
                <Card
                    key={character.id}
                    // onClose={character.onClose}
                    id={character.id}
                    name={character.name}
                    status={character.status}
                    species={character.species}
                    gender={character.gender}
                    origin={character.origin?.name}
                    image={character.image}
                />
            ))}

        </section>
    )
};

const mapStateToProps = (state) => ({ myFavorites: state.myFavorites })

export default connect(mapStateToProps, null)(Favorites)
