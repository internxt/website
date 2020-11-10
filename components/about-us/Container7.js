import styles from './Container7.module.css'
import descriptions from '../../assets/about-us-descriptions.json'

const Container7 = ({ id }) => {

    const description = descriptions.filter( desc => desc.id === id)

    // Check if a number is odd
    const isOdd = ( num ) => {
        return num % 2 == 1;
    }

    // Set the background color of the container depending on its id
    const background = isOdd(id) ? 'container grey' : 'container'

    return ( 
        <div className={background}>
            <p className={styles.title}>
                {description[0].title}
            </p>
        </div>
     );
}
 
export default Container7;