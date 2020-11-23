import styles from './Container6.module.css'
import descriptions from '../../assets/drive-descriptions.json'
import Image from 'next/image'

const Container6 = ({ id }) => {

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
            <div className={styles.container}>
                <div className={styles.main}>
                    <h1 className={`${styles.title} lg:text-5xl lg:w-104 lg:leading-tight xl:leading-13`}>
                        {description[0].title}
                    </h1>

                    <p className={`${styles.subtitle} lg:text-lg lg:w-96`}>
                        {description[0].subtitle}
                    </p>

                    <a className={`${styles.link} lg:pt-8 lg:text-lg xl:mt-12`}>Check out plans for teams</a>
                </div>
                
                <div className={styles.image}>
                    <Image src="/images/1440/Drive/Section 6/Business.png" width={708} height={754} />
                </div>
            </div>
        </div>
    );
}
 
export default Container6;