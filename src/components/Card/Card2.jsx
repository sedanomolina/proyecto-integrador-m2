import styles from './Card.module.css'
import { connect } from 'react-redux'
import { addFav, removeFav } from '../../redux/actions/actions'
import { useState, useEffect } from 'react'

function Card2(props) {

    const { addFav, removeFav } = props;
    const { myFavorites } = props;

    const [isFav, setIsFav] = useState(false)

    const handleFavorite = () => {
        return isFav
            ? (setIsFav(false), removeFav(props.id))
            : (setIsFav(true), addFav(props));

    };

    useEffect(() => myFavorites.forEach(favorite => favorite.id === props.id && setIsFav(true))
        , [myFavorites]);

    return (
        <div className={styles.container}>
            <div className={styles.panel}>
                <div className={styles.ring}>
                    <img className={styles.card} src={props.image} alt="" />
                    <div className={styles.border}>
                        {/* <p className={styles.title}>{props.name}</p> */}
                        <div className={styles.slide}>
                            {
                                isFav ? (
                                    <button className={styles.para} onClick={handleFavorite}>❤️</button>
                                ) : (
                                    <button className={styles.para} onClick={handleFavorite}>🤍</button>
                                )
                            }
                            <h6 className={styles.para}>{props.name}</h6>
                            <div className={styles.line}>
                                <h6 className={styles.para}>OUT</h6> <i className={`${styles.fa} ${styles['fa-plane']}`} aria-hidden="true"></i>
                                <button onClick={() => props.onClose(props.id)} className={styles.para}>x</button>
                            </div>
                            <div className={styles.line}>
                                <h6 className={styles.para}>RTN</h6> <i className={`${styles.fa} ${styles['fa-plane']}`} aria-hidden="true"></i>
                                <h6 className={styles.para}>£659</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(Card2)