import styles from './Container1.module.css'
import descriptions from '../../assets/token-descriptions.json'
import Image from 'next/image'

const Container1 = ({ id }) => {

    const description = descriptions.filter( desc => desc.id === id)
    
    // Check if a number is odd
    const isOdd = ( num ) => {
        return num % 2 == 1;
    }

    // Set the background color of the container depending on its id
    const background = isOdd(id) ? `normal_container ${styles.main} sm:h-136 lg:h-136` : 'normal_container grey'

    return ( 
        <div className={background}>
            <h1 className={`${styles.title} sm:text-4xl sm:w-80 sm:mb-8 lg:text-8xl lg:w-8/12 lg:mb-6 xl:w-8/12`}>
                {description[0].title}
            </h1>

            <p className={`${styles.subtitle} sm:text-xl sm:w-11/12 lg:text-xl lg:w-108`}>
                {description[0].subtitle}
            </p>

            <div className={styles.buttons_container}>
                <button className={`${styles.button} lg:h-8 lg:w-28`}>
                    <p className={`${styles.button_text} sm:text-base lg:text-xs`}>Stake Inxt</p>
                </button>
                
                <a className={`${styles.learn_more} sm:text-base lg:text-xs`}>Learn more</a>
            </div>
        </div>
     );
}
 
export default Container1;