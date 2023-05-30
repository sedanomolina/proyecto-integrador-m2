import styles from './Cards.module.css'
import Card from '../Card/Card';
import Card2 from '../Card/Card2';
import SearchBar from '../SearchBar/SearchBar';

export default function Cards({ characters, onClose }) {

   const showCard = characters.map(character => (
      <Card2
         key={character.id}
         onClose={onClose}
         id={character.id}
         name={character.name}
         status={character.status}
         species={character.species}
         gender={character.gender}
         origin={character.origin}
         image={character.image}
      />
   ))

   return (

      <section
         className={styles.container__cards}>
         {showCard}
      </section>

   )
}
