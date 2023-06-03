import styles from './Cards.module.css'
import Card from '../Card/Card';

export default function Cards({ characters, onClose }) {

   const showCard = characters.map(character => (
      <Card
         key={character.id}
         onClose={character.onClose || onClose}
         id={character.id}
         name={character.name}
         status={character.status}
         species={character.species}
         gender={character.gender}
         origin={character.origin?.name}
         image={character.image}
      />
   ))

   return (

      <section className={styles.container__cards}>

         {showCard}

      </section>

   )
}
