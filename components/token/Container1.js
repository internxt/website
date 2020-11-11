import styles from './Container1.module.css'
import descriptions from '../../assets/token-descriptions.json'

const Container1 = ({ id }) => {

    const description = descriptions.filter( desc => desc.id === id)
    
    // Check if a number is odd
    const isOdd = ( num ) => {
        return num % 2 == 1;
    }

    // Set the background color of the container depending on its id
    const background = isOdd(id) ? `container ${styles.main}` : 'container grey'

    return ( 
        <div className={background}>
            <h1 className={styles.title}>
                {description[0].title}
            </h1>

            <p className={styles.subtitle}>
                {description[0].subtitle}
            </p>

            <div className={styles.buttons_container}>
                <button className={styles.button}>
                    <p className={styles.button_text}>Stake Inxt</p>
                </button>
                
                <a className={styles.learn_more}>Learn more</a>
            </div>
        </div>
     );
}
 
export default Container1;