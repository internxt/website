import styles from './Container1.module.css'
import descriptions from '../../assets/photos-descriptions.json'
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
        <div className={`${className} relative`}>
            <div className={styles.main}>
                <h1 className={styles.title}>
                    {description[0].title}
                </h1>

                <p className={styles.subtitle}>
                    {description[0].subtitle}
                </p>

                <p className={styles.subtitle}>
                    {description[0].subtitle2}
                </p>

                <div className={styles.picture}>
                    <Image src="/images/1440/Photos/Section 1/1.png" width={75} height={92} />
                </div>

                <div className={styles.weather}>
                    <Image src="/images/1440/Photos/Section 1/2.png" width={68} height={65} />
                </div>

                <div className={styles.video}>
                    <Image src="/images/1440/Photos/Section 1/6.png" width={110} height={131} />
                </div>

                <div className={styles.lgcross}>
                    <Image src="/images/1440/Photos/Section 1/cross 1.png" width={29} height={29} />
                </div>

                <div className={styles.mdcross}>
                    <Image src="/images/1440/Photos/Section 1/cross 4.png" width={18} height={18} />
                </div>

                <div className={styles.smcross}>
                    <Image src="/images/1440/Photos/Section 1/cross 2.png" width={11} height={11} />
                </div>
            </div>

            <div className={styles.circles}>
                    <Image src="/images/1440/Photos/Section 1/5.png" width={182} height={129} />
                </div>

            <div className={styles.secondary}>
                <h1 className={styles.subtitle2}>
                    {description[0].subtitle3}
                </h1>

                <EmailNewsletter />

                <div className={styles.recorder}>
                    <Image src="/images/1440/Photos/Section 1/3.png" width={133} height={104} />
                </div>

                <div className={styles.message}>
                    <Image src="/images/1440/Photos/Section 1/4.png" width={82} height={80} />
                </div>

                <div className={styles.cross}>
                    <Image src="/images/1440/Photos/Section 1/cross 3.png" width={19} height={19} />
                </div>
            </div>
        </div>
    );
}
 
export default Container1;