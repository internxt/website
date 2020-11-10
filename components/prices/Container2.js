import styles from './Container2.module.css'
import descriptions from '../../assets/prices-descriptions.json'

const Container2 = ({ id }) => {

    const description = descriptions.filter( desc => desc.id === id)

    return ( 
        <div className={styles.main_container}>
            <text className={styles.title}>
                {description[0].title}
            </text>

            <text className={styles.title}>
                {description[0].title2}
            </text>

            <text className={styles.title}>
                {description[0].title3}
            </text>

            <text className={styles.title}>
                {description[0].title4}
            </text>

            <text className={styles.title}>
                {description[0].title5}
            </text>

            <text>esto sera la imagen</text>
        </div>
     );
}
 
export default Container2;