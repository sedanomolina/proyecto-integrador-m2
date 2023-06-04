import styles from './Cards.module.css'
import Card from '../Card/Card';
import { useSelector } from 'react-redux';


export default function Cards({ onClose }) {

   const characters = useSelector(state => state.allCharacters)

   return (

      <section className={styles.container__cards}>

         {characters.map(character => (
            <Card
               key={character.id}
               onClose={onClose}
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
}
