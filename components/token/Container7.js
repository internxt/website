import styles from './Container7.module.css'
import descriptions from '../../assets/token-descriptions.json'

const Container7 = ({ id }) => {

    // Filter container specific descriptions
    const description = descriptions.filter( desc => desc.id === id)

    // Check if a number is odd
    const isOdd = ( num ) => {
        return num % 2 == 1;
    }

    // Set the background color of the container depending on its id
    const background = isOdd(id) ? 'container grey' : 'container'

    return ( 
        <div className={background}>
            <h1 className={styles.title}>
                {description[0].title}
            </h1>

            <div className={styles.cards_container}>
                <div className={styles.card}>
                    <p className={styles.label}>
                        {description[0].label}
                    </p>

                    <p className={styles.data}>20.88%</p>
                </div>
                
                <div className={styles.card}>
                    <p className={styles.label}>
                        {description[0].label2}
                    </p>

                    <p className={styles.data}>20.88%</p>
                </div>
                
                <div className={styles.card}>
                    <p className={styles.label}>
                        {description[0].label3}
                    </p>

                    <p className={styles.data}>20.88%</p>
                </div>
                
                <div className={styles.card}>
                    <p className={styles.label}>
                        {description[0].label4}
                    </p>

                    <p className={styles.data}>20.88%</p>
                </div>
                
                <div className={styles.card}>
                    <p className={styles.label}>
                        {description[0].label5}
                    </p>

                    <p className={styles.data}>20.88%</p>
                </div>
                
                <div className={styles.card}>
                    <p className={styles.label}>
                        {description[0].label6}
                    </p>

                    <p className={styles.data}>20.88%</p>
                </div>
                
                <div className={styles.card}>
                    <p className={styles.label}>
                        {description[0].label7}
                    </p>

                    <p className={styles.data}>20.88%</p>
                </div>
                
                <div className={styles.card}>
                    <p className={styles.label}>
                        {description[0].label8}
                    </p>

                    <p className={styles.data}>20.88%</p>
                </div>
                
                <div className={styles.card}>
                    <p className={styles.label}>
                        {description[0].label9}
                    </p>

                    <p className={styles.data}>20.88%</p>
                </div>
            </div>
        </div>
     );
}
 
export default Container7;