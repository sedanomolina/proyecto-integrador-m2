import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
export default function Detail() {

    const { id } = useParams();

    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => setCharacter(response.data))
            .catch(()=>window.alert('No llego nada'))

        return setCharacter({});
    }, [id])

    return (
        <div>
            <h1>{character.name}</h1>
            <h3>{character.status}</h3>
            <h3>{character.species}</h3>
            <h3>{character.gender}</h3>
            <h3>{character.origin?.name}</h3>
            <img src={character.image} alt={character.name} />
        </div>
    )
}