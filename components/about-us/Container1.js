import styles from './Container1.module.css'
import descriptions from '../../assets/about-us-descriptions.json'
import Image from 'next/image'
import TopBar from '../layout/TopBar'

const Container1 = ({ id }) => {

    const description = descriptions.filter( desc => desc.id === id)

    return ( 
        <div className={`${styles.background} lg:h-104`}>
            <TopBar />

            <div className={styles.image}>
                <Image 
                    src="/images/1440/About/Section 1/Image .png" 
                    width={1440}
                    height={626}
                    style={{
                        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))'
                    }}
                />
            </div>

            <div className={`${styles.main} lg:pl-20 lg:pt-24`}>
                <h1 className={`${styles.title} lg:text-3xl lg:w-96`}>
                    {description[0].title}
                </h1>

                <button className={styles.button}>
                    <p className={styles.text_button}>Get started</p>
                </button>
            </div>
        </div>
     );
}
 
export default Container1;