import styles from './Container1.module.css'
import descriptions from '../../assets/drive-descriptions.json'
import EmailNewsletter from '../EmailNewsletter'

const Container = ({ id }) => {

    const description = descriptions.filter( desc => desc.id === id)
    // Check if a number is odd
    const isOdd = ( num ) => {
        return num % 2 == 1;
    }

    // Set the background color of the container depending on its id
    const className = isOdd(id) ? 'container' : 'container grey'

    return ( 
        <div className={className}>
            <div className={styles.main}>
                <div className={styles.info}>
                    <text className={styles.maininfo}>Internxt </text>
                    <text className={styles.subinfo}>drive</text>
                </div>
                
                <text className={styles.title}>
                    {description[0].title}
                </text>

                <text className={styles.subtitle}>
                    {description[0].subtitle}
                </text>
            </div>

            <div className={styles.secondary}>
                <text className={styles.subtitle2}>
                    {description[0].subtitle2}
                </text>

                <EmailNewsletter />

                <text className={styles.subtitle3}>
                    {description[0].subtitle3}
                </text>
            </div>
        </div>
    );
}
 
export default Container;