import styles from './Container2.module.css'
import descriptions from '../../assets/about-us-descriptions.json'

const Container2 = ({ id }) => {
    
    const description = descriptions.filter( desc => desc.id === id)
    
    // Check if a number is odd
    const isOdd = ( num ) => {
        return num % 2 == 1;
    }

    // Set the background color of the container depending on its id
    const className = isOdd(id) ? 'container' : 'container grey'

    return ( 
        <div className={styles.main}>
            <text className={styles.assosciated}>
                {description[0].title}
            </text>

            <div className={styles.assosciated_logos}>
                <text>logo</text>
                <text>logo</text>
                <text>logo</text>
                <text>logo</text>
                <text>logo</text>
                <text>logo</text>
            </div>

            <text className={styles.subtitle}>
                {description[0].subtitle}
            </text>

            <div className={styles.photos}>

            </div>
            
            <text className={styles.subtitle2}>
                {description[0].subtitle2}
            </text>
        </div>
     );
}
 
export default Container2;