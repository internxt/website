import styles from './Container1.module.css'
import descriptions from '../../assets/core-descriptions.json'
import EmailNewsletter from '../EmailNewsletter'
import Image from 'next/image'

const Container1 = ({ id }) => {

    const description = descriptions.filter( desc => desc.id === id)
    
    // Check if a number is odd
    const isOdd = ( num ) => {
        return num % 2 == 1;
    }

    // Set the background color of the container depending on its id
    const className = isOdd(id) ? 'container' : 'container grey'

    return ( 
        <div className={className}>
            <div className={styles.main}>
                <h1 className={styles.title}>
                    {description[0].title}
                </h1>

                <p className={styles.subtitle}>
                    {description[0].subtitle}
                </p>

                <div className={styles.star}>
                    <Image src="/images/1440/Drive/Section 1/star icon.png" width={47} height={50} />
                </div>

                <div className={styles.gear}>
                    <Image src="/images/1440/Drive/Section 1/cog icon.png" width={37} height={38} />
                </div>

                <div className={styles.coin}>
                    <Image src="/images/1440/Drive/Section 1/coin icon.png" width={81} height={76} />
                </div>

                <div className={styles.lock}>
                    <Image src="/images/1440/Drive/Section 1/lock icon.png" width={45} height={60} />
                </div>
            </div>

            <div className={styles.secondary}>
                <h1 className={styles.subtitle2}>
                    {description[0].subtitle2}
                </h1>

                <EmailNewsletter />

                <p className={styles.subtitle3}>
                    {description[0].subtitle3}
                </p>

                <div className={styles.cloud}>
                    <Image src="/images/1440/Drive/Section 1/cloud icon.png" width={70} height={52} />
                </div>

                <div className={styles.hand}>
                    <Image src="/images/1440/Drive/Section 1/purplehand.png" width={482} height={310} />
                </div>
            </div>
        </div>
    );
}
 
export default Container1;