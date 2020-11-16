import styles from './Container1.module.css'
import descriptions from '../../assets/prices-descriptions.json'
import PriceCard from '../cards/PriceCard'

const Container1 = ({ id }) => {

    const description = descriptions.filter( desc => desc.id === id)
    
    return ( 
        <div>
            <div className={styles.first_half}>
                <h1 className={styles.title}>
                    {description[0].title}
                </h1>

                <p className={styles.subtitle}>
                    {description[0].subtitle}
                </p>

                <p className={styles.subtitle}>
                    {description[0].subtitle2}
                </p>

                <div className={styles.switch_container}>
                    <div className={styles.switch}>
                        <p className={styles.text_switch}>For individuals</p>
                    </div>

                    <div className={styles.switch}>
                        <p className={styles.text_switch}>For teams</p>
                    </div>
                </div>
            </div>
            
            <div className={styles.cards_container}>
                <PriceCard free="true" size={2} />
                <PriceCard size={20} pMonth="0.99" pre6months="0.95" preYear="0.89" mostPopular="true" />
                <PriceCard size={200} pMonth="4.49" pre6months="3.99" preYear="3.49" />
                <PriceCard size={2000} pMonth="9.99" pre6months="9.49" preYear="8.99" />
            </div>
        </div>
     );
}
 
export default Container1;