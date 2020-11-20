import styles from './Container1.module.css'
import descriptions from '../../assets/about-us-descriptions.json'
import Image from 'next/image'
import TopBar from '../layout/TopBar'

const Container1 = ({ id }) => {

    const description = descriptions.filter( desc => desc.id === id)

    return ( 
        <div className={`${styles.background} lg:h-104 xl:h-136`}>
            <TopBar />

            <div className={`${styles.main} lg:pl-20 lg:pt-24 xl:h-full`}>
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