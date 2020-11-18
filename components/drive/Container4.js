import styles from './Container4.module.css'
import descriptions from '../../assets/drive-descriptions.json'
import Image from 'next/image'

const Container4 = ({ id }) => {

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
                <div className={`${styles.main} lg:pl-24`}>
                    <h1 className={`${styles.title} lg:text-5xl lg:w-112 lg:leading-tight`}>
                        {description[0].title}
                    </h1>

                    <p className={`${styles.subtitle} lg:text-lg lg:w-84`}>
                        {description[0].subtitle}
                    </p>

                    <p className={`${styles.subtitle} lg:text-lg lg:w-84`}>
                        {description[0].subtitle2}
                    </p>
                </div>
                
                <div className={`${styles.image} lg:w-5/12`}>
                    <Image src="/images/1440/Drive/Section 4/logos graphic.png" width={493} height={472} />
                </div>
            </div>
        </div>
    );
}
 
export default Container4;