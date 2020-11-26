import styles from './Container1.module.css'
import descriptions from '../../assets/about-us-descriptions.json'
import TopBar from '../layout/TopBar'
import EmailNewsletter from '../EmailNewsletter'

const Container1 = ({ id }) => {

    const description = descriptions.filter( desc => desc.id === id)

    return ( 
        <div className={`${styles.background} sm:h-120 lg:h-144`}>
            <div className={`${styles.main} xl:h-full`}>
                <h1 className={`${styles.title} sm:text-4xl sm:w-80 lg:text-8xl lg:w-10/12`}>
                    {description[0].title}
                </h1>

                <p className={`${styles.subtitle} sm:text-xl sm:w-84 mb-4 lg:text-xl`}>
                    {description[0].subtitle}
                </p>

                <EmailNewsletter value="Subscribe" />
            </div>
        </div>
     );
}
 
export default Container1;