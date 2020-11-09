import styles from './Container1.module.css'
import descriptions from '../../assets/prices-descriptions.json'

const Container1 = ({ id }) => {

    const description = descriptions.filter( desc => desc.id === id)
    
    return ( 
        <div className={styles.main_container}>
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
            
            <div className={styles.second_half}>

            </div>
        </div>
     );
}
 
export default Container1;