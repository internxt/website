import styles from './Container3.module.css'
import descriptions from '../../assets/drive-descriptions.json'
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
                <div className={`${styles.image} lg:w-5/12`}>
                    <Image src="/images/1440/Drive/Section 3/icons graphic.png" width={646} height={742} />
                </div>

                <div className={`${styles.main} lg:pl-16`}>
                    <h1 className={`${styles.title} lg:text-5xl lg:w-112 lg:leading-tight xl:leading-13`}>
                        {description[0].title}
                    </h1>

                    <p className={`${styles.subtitle} lg:text-lg lg:w-96`}>
                        {description[0].subtitle}
                    </p>

                    <p className={`${styles.subtitle} lg:text-lg lg:w-96`}>
                        {description[0].subtitle2}
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default Container3;