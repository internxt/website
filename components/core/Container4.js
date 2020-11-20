import styles from './Container4.module.css'
import descriptions from '../../assets/core-descriptions.json'

const Container4 = ({ id }) => {

    const description = descriptions.filter( desc => desc.id === id)

    return ( 
        <div className={styles.background}>
            <h1 className={`${styles.title}`}>
                {description[0].title}
            </h1>
            <p className={`${styles.subtitle}`}>
                {description[0].subtitle}
            </p>

            <h1 className={`${styles.title}`}>
                {description[0].title2}
            </h1>
            <p className={`${styles.subtitle}`}>
                {description[0].subtitle2}
            </p>

            <h1 className={`${styles.title}`}>
                {description[0].title3}
            </h1>
            <p className={`${styles.subtitle}`}>
                {description[0].subtitle3}
            </p>
        </div>
     );
}
 
export default Container4;