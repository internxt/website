import styles from './Container4.module.css'
import descriptions from '../../assets/photos-descriptions.json'
import Image from 'next/image' 

const Container4 = ({ id }) => {

    // Filter container specific descriptions
    const description = descriptions.filter( desc => desc.id === id)

    // Check if a number is odd
    const isOdd = ( num ) => {
        return num % 2 == 1;
    }

    // Set the background color of the container depending on its id
    const background = isOdd(id) ? 'normal_container' : 'normal_container grey'

    return ( 
        <div className={background}>
            <div className={`${styles.container} max-w-1600 sm:flex-col-reverse sm:items-center sm:mt-16`}>
                <div className={`${styles.image} sm:mt-12 lg:w-56 lg:mx-32 lg:mt-16`}>
                    <Image src="/images/1440/Photos/Section 3/snap graphic.png" width={260} height={579} />
                </div>

                <div className={styles.main}>
                    <h1 className={`${styles.title} sm:text-4xl sm:w-84 sm:text-center leading-12 lg:text-5xl lg:max-w-none lg:w-104`}>
                        {description[0].title}
                    </h1>

                    <p className={`${styles.subtitle} sm:text-xl sm:w-80 sm:text-center lg:text-xl lg:w-100`}>
                        {description[0].subtitle}
                    </p>

                    <p className={`${styles.subtitle} sm:text-xl sm:w-80 sm:text-center lg:text-xl lg:w-104`}>
                        {description[0].subtitle2}
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default Container4;