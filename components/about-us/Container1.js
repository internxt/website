import styles from './Container1.module.css'
import descriptions from '../../assets/about-us-descriptions.json'

const Container1 = ({ id }) => {

    const description = descriptions.filter( desc => desc.id === id)

    return ( 
        <>
            <div className={styles.main}>
                <text className={styles.title}>
                    {description[0].title}
                </text>

                <button className={styles.button}>
                    <text className={styles.text_button}>Get started</text>
                </button>
            </div>
        </>
     );
}
 
export default Container1;