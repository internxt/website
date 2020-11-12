import styles from './Container3.module.css'
import descriptions from '../../assets/token-descriptions.json'
import Image from 'next/image'

const Container3 = ({ id }) => {

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
                <div className={styles.image_container}>
                    <Image
                        src="/images/1440/Token/Section 3/floating girl.png"
                        width={517}
                        height={589}
                    />
                </div>

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

                    <p className={styles.link}>
                        {description[0].subtitle3}
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default Container3;