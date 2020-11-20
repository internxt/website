import styles from './Container5.module.css'
import descriptions from '../../assets/drive-descriptions.json'
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
                <div className={`${styles.main} items-center`}>
                    <h1 className={`${styles.title1} lg:text-5xl xl:mt-24`}>
                        {description[0].title}
                    </h1>

                    <p className={`${styles.subtitle1} lg:text-lg lg:w-10/12 lg:pt-2`}>
                        {description[0].subtitle}
                    </p>

                    <p className={styles.subtitle1}>
                        {description[0].subtitle2}
                    </p>
                </div>
                
                <div className={styles.interface}>
                    <Image src="/images/1440/Drive/Section 5/Interface.png" width={1212} height={575} />
                </div>
            </div>

            <div className={`${styles.container2} lg:py-16`}>
                <div className={`${styles.hand} lg:w-104`}>
                    <Image src="/images/1440/Drive/Section 5/blue hand.png" width={590} height={423} />
                </div>

                <div className={`${styles.main} lg:pl-32`}>
                    <h1 className={`${styles.title2} lg:text-5xl lg:w-84 lg:leading-tight xl:leading-13 xl:mb-4`}>
                        {description[0].title2}
                    </h1>

                    <p className={`${styles.subtitle2} lg:text-lg lg:w-96`}>
                        {description[0].subtitle3}
                    </p>

                    <p className={`${styles.subtitle2} lg:text-lg lg:w-96`}>
                        {description[0].subtitle4}
                    </p>

                    <div className={styles.links}>
                        <a className={`${styles.link} lg:text-lg`}>Sign up</a>
                        <a className={`${styles.link} lg:text-lg`}>Download</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Container5;