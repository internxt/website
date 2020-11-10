import styles from './Container1.module.css'
import descriptions from '../../assets/prices-descriptions.json'
import PriceCard from '../cards/PriceCard'

const Container1 = ({ id }) => {

    const description = descriptions.filter( desc => desc.id === id)
    
    return ( 
        <div>
            <div className={styles.first_half}>
                <text className={styles.title}>
                    {description[0].title}
                </text>

                <text className={styles.subtitle}>
                    {description[0].subtitle}
                </text>

                <text className={styles.subtitle}>
                    {description[0].subtitle2}
                </text>

                <div className={styles.switch_container}>
                    <div className={styles.switch}>
                        <text className={styles.text_switch}>For individuals</text>
                    </div>

                    <div className={styles.switch}>
                        <text className={styles.text_switch}>For teams</text>
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