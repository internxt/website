import styles from './Container1.module.css'
import Image from 'next/image'

const Container1 = ({ id, descriptions }) => {

    const description = descriptions.filter( desc => desc.id === id)
    
    // Check if a number is odd
    const isOdd = ( num ) => {
        return num % 2 == 1;
    }

    // Set the background color of the container depending on its id
    const background = isOdd(id) ? `normal_container ${styles.main} sm:h-136 lg:h-136` : 'normal_container grey'

    return ( 
        <div className={background}>
            <h1 className={`${styles.title} sm:text-4xl sm:w-80 sm:mb-8 lg:text-8xl lg:w-8/12 lg:mb-6`}>
                {description[0].title}
            </h1>

            <p className={`${styles.subtitle} sm:text-xl sm:w-11/12 lg:text-xl lg:w-108`}>
                {description[0].subtitle}
            </p>

            <div className={styles.buttons_container}>
                <a 
                    href="https://medium.com/internxt/earn-interest-by-holding-internxt-tokens-introducing-internxt-earn-5d4830d98370" 
                    target="_blank" 
                    className={`${styles.button} flex items-center justify-center lg:h-8 lg:w-28`}
                >
                    <p className={`${styles.button_text} sm:text-base lg:text-xs`}>{description[0].button}</p>
                </a>
                
                <a className={`${styles.learn_more} sm:text-base lg:text-xs`}>{description[0].learn}</a>
            </div>
        </div>
     );
}
 
export default Container1;