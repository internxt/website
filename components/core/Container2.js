import styles from './Container2.module.css'
import descriptions from '../../assets/core-descriptions.json'
import Image from 'next/image'

const Container2 = ({ id }) => {

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
                    <h1 className={`${styles.title} lg:text-5xl lg:w-112 lg:leading-12 xl:leading-13`}>
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
                    <Image src="/images/1440/Core/Section 2/Blue hand.png" width={290} height={578} />
                </div>
            </div>
        </div>
    );
}
 
export default Container2;