import styles from './Container1.module.css'
import descriptions from '../../assets/core-descriptions.json'
import Image from 'next/image'

const Container1 = ({ id }) => {

    const description = descriptions.filter( desc => desc.id === id)
    
    // Check if a number is odd
    const isOdd = ( num ) => {
        return num % 2 == 1;
    }

    // Set the background color of the container depending on its id
    const className = isOdd(id) ? 'normal_container' : 'normal_container grey'

    return ( 
        <div className={`${className} relative`}>
            <div className={styles.main}>
                <div className={styles.left}>
                    <Image src="/images/1440/Core/Section 1/Graphic left.png" width={511} height={268} />
                </div>

                <div className={styles.right}>
                    <Image src="/images/1440/Core/Section 1/Graphic right.png" width={438} height={239} />
                </div>

                <h1 className={styles.title}>
                    {description[0].title}
                </h1>

                <p className={styles.subtitle}>
                    {description[0].subtitle}
                </p>

                <h1 className={styles.subtitle2}>
                    {description[0].subtitle2}
                </h1>

                <div className={`${styles.button_container}`}>
                    <button className={styles.button}>Download</button>
                    <a className={styles.link}>Set-up & tips</a>
                </div>
            </div>
        </div>
    );
}
 
export default Container1;