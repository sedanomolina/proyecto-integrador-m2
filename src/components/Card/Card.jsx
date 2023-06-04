import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { addFav, removeFav } from '../../redux/actions/actions'
import styles from './Card.module.css'
import portal from '../../assets/images/portal.gif'
import { Link } from 'react-router-dom'

function Card(props) {

    // const { id, name, status, species, gender, origin, image } = props
    const { onClose } = props
    const { image } = props
    const { addFav, removeFav } = props;
    const { myFavorites } = props;

    const [isFav, setIsFav] = useState(false)
    const [isLoading, setIsLoading] = useState(true);

    const handleFavorite = () => isFav
        ? (setIsFav(false), removeFav(props.id))
        : (setIsFav(true), addFav(props));


    useEffect(() => {
        myFavorites.forEach((favorite) => {
            if (favorite.id === props.id) setIsFav(true);
        });
    }, [myFavorites]);

    useEffect(() => {
        const img = new Image();
        img.src = image;
        img.onload = () => {
            setIsLoading(false);
        };
    }, [image]);

    return isLoading ? (
        <div className={styles.portal} >
            <img src={portal} alt="Loading" />
        </div>
    ) :
        <div className={styles.container}>
            <div className={styles.panel}>
                <div className={styles.ring}>
                    <img className={styles.card} src={props.image} alt="" />
                    <div className={styles.border}>
                        <div className={styles.slide}>
                            <div className={styles.close_like} >

                                {
                                    isFav ? (
                                        <button className={styles.like} onClick={handleFavorite}>❤️</button>
                                    ) : (
                                        <button className={styles.like} onClick={handleFavorite}>🤍</button>
                                    )
                                }
                                {onClose && <button onClick={() => props.onClose(props.id)} className={styles.close}>X</button>}
                            </div>

                            <Link className={styles.enlace} to={`/detail/${props.id}`} >
                                <h6 className={styles.para}>{props.name}</h6>
                            </Link>
                            <div className={styles.line}>
                                <h6 className={styles.para}>{props.gender}</h6> <i className={`${styles.fa} ${styles['fa-plane']}`} aria-hidden="true"></i>
                            </div>
                            <div className={styles.line}>
                                <h6 className={styles.para}>{props.origin}</h6> <i className={`${styles.fa} ${styles['fa-plane']}`} aria-hidden="true"></i>
                                <h6 className={styles.para}>{props.status}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addFav: (character) => dispatch(addFav(character)),
        removeFav: (id) => dispatch(removeFav(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)