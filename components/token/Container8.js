import styles from './Container8.module.css'
import descriptions from '../../assets/token-descriptions.json'

const Container8 = ({ id }) => {

    // Filter container specific descriptions
    const description = descriptions.filter( desc => desc.id === id)

    // Check if a number is odd
    const isOdd = ( num ) => {
        return num % 2 == 1;
    }

    // Set the background color of the container depending on its id
    const background = isOdd(id) ? 'container' : 'container grey'

    return ( 
        <div className={background}>
            <h1 className={styles.title}>
                {description[0].title}
            </h1>

            <div className={styles.cards_container}>
                <div className={styles.card}>coinbase</div>
                <div className={styles.card}>coinmarketcap</div>
                <div className={styles.card}>binance</div>
                <div className={styles.card}>blockfolio</div>
            </div>
        </div>
     );
}
 
export default Container8;