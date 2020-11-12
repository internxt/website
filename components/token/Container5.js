import styles from './Container5.module.css'
import descriptions from '../../assets/token-descriptions.json'
import Image from 'next/image'

const Container5 = ({ id }) => {

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
            <div className={styles.container}>
                <div className={styles.main}>
                    <h1 className={styles.title}>
                        {description[0].title}
                    </h1>

                    <p className={styles.subtitle}>
                        {description[0].subtitle}
                    </p>

                    <p className={styles.subtitle}>
                        {description[0].subtitle2}
                    </p>

                    <div className={styles.button_container}>
                        <button className={styles.button1}>App store</button>
                        <button className={styles.button2}>Play store</button>
                    </div>
                </div>
                
                <div className={styles.image_container}>
                    <Image
                        src="/images/1440/Token/Section 5/Coinbase graphic.png"
                        width={560}
                        height={612}
                    />
                </div>
            </div>
        </div>
    );
}
 
export default Container5;