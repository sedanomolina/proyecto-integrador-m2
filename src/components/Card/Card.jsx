import { Link } from 'react-router-dom';
import styles from './Card.module.css'

export default function Card(props) {
   return (
      <article className={styles.card} >
         <button onClick={() => props.onClose(props.id)}>X</button>
         <img
            className={styles.card__background}
            width={'1920'}
            height={'2193'}
            src={props.image}
            alt={props.name}
         />
         <div className={`${styles.card__content} | ${styles.flow}`} >
            <div className={`${styles.card__content__container} | ${styles.flow}`} >
               <h2 className={styles.card__title} >{props.name}</h2>
               <ul>
                  <p>{props.status}</p>
                  {/* <p>{props.species}</p>
                  <p>{props.gender}</p>
                  <p>{props.origin.name}</p> */}
               </ul>
            </div>
            <Link to={`/detail/${props.id}`} >
               <button className={styles.card__button} >Read more</button>
            </Link>
         </div>
      </article >
   );
}