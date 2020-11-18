import styles from './Container2.module.css'
import descriptions from '../../assets/drive-descriptions.json'
import PriceCard from '../cards/PriceCard'

const Container2 = ({ id }) => {

    // Filter container specific descriptions
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
                <h1 className={`${styles.title} lg:text-5xl`}>
                    {description[0].title}
                </h1>

                <p className={`${styles.subtitle} lg:text-lg lg:w-9/12`}>
                    {description[0].subtitle}
                </p>
            </div>

            <div className={styles.cards_container}>
                <PriceCard free="true" size={2} individual={true} />
                <PriceCard size={20} pMonth="0.99" pre6months="0.95" preYear="0.89" mostPopular="true" />
                <PriceCard size={200} pMonth="4.49" pre6months="3.99" preYear="3.49" />
                <PriceCard size={2000} pMonth="9.99" pre6months="9.49" preYear="8.99" />
            </div>

            <a className={`${styles.link} lg:text-base lg:mt-0 lg:mb-16`}>
                {description[0].link}
            </a>
        </div>
    );
}
 
export default Container2;