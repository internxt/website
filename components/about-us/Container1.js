import styles from './Container1.module.css'
import descriptions from '../../assets/about-us-descriptions.json'
import TopBar from '../layout/TopBar'
import EmailNewsletter from '../EmailNewsletter'

const Container1 = ({ id }) => {

    const description = descriptions.filter( desc => desc.id === id)

    return ( 
        <div className={`${styles.background} lg:h-144`}>
            <TopBar />

            <div className={`${styles.main} xl:h-full`}>
                <h1 className={`${styles.title} lg:text-8xl lg:w-10/12`}>
                    {description[0].title}
                </h1>

                <p className={`${styles.subtitle} mb-4 lg:text-xl`}>
                    {description[0].subtitle}
                </p>

                <EmailNewsletter value="Subscribe" />
            </div>
        </div>
     );
}
 
export default Container1;