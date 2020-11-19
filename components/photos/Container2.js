import styles from './Container2.module.css'
import descriptions from '../../assets/photos-descriptions.json'
import PriceCard from '../cards/PriceCard'
import Image from 'next/image'

const Container2 = ({ id }) => {

    const description = descriptions.filter( desc => desc.id === id)

    // Check if a number is odd
    const isOdd = ( num ) => {
        return num % 2 == 1;
    }

    // Set the background color of the container depending on its id
    const background = isOdd(id) ? 'container' : 'container grey'
    
    return ( 
        <div className={background}>
            <div className={`${styles.main_container} lg:pb-16`}>
                <h1 className={`${styles.title} lg:text-5xl`}>
                    {description[0].title}
                </h1>

                <p className={`${styles.subtitle} lg:text-xl lg:w-8/12`}>
                    {description[0].subtitle}
                </p>

                <div className={`${styles.cards_container} lg:pb-12`}>
                    <PriceCard free="true" size={2} individual={true} />
                    <PriceCard size={20} pMonth="0.99" pre6months="0.95" preYear="0.89" mostPopular="true" />
                    <PriceCard size={200} pMonth="4.49" pre6months="3.99" preYear="3.49" />
                    <PriceCard size={2000} pMonth="9.99" pre6months="9.49" preYear="8.99" />
                </div>

                <p className={`${styles.link} lg:text-base`}>
                    {description[0].link}
                </p>
            </div>
        </div>
     );
}

export default Container2;