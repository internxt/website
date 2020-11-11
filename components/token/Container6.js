import styles from './Container6.module.css'
import descriptions from '../../assets/token-descriptions.json'
import { lazy } from 'react'

const Container6 = ({ id }) => {

    // Filter container specific descriptions
    const description = descriptions.filter( desc => desc.id === id)

    // Check if a number is odd
    const isOdd = ( num ) => {
        return num % 2 == 1;
    }

    // Set the background color of the container depending on its id
    const background = isOdd(id) ? 'container grey' : 'container'
    
    return ( 
        <div className={background}>
            <h1 className={styles.title}>
                {description[0].title}
            </h1>

            <div className={styles.card_container}>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
            </div>

            <h1 className={styles.title}>
                {description[0].title2}
            </h1>

            <p className={styles.subtitle}>
                {description[0].subtitle}
            </p>

            <form className={styles.form}>
                <div className={styles.first_half}>
                    <div className={styles.payment}>
                        <div className={styles.input_container}>
                            <label className={styles.label}>Deposit</label>
                            <input 
                                type="number"
                                className={styles.input}
                                placeholder="0"
                            />
                        </div>

                        <div className={styles.input_container}>
                            <label className={styles.label}>Receive</label>
                            <input 
                                className={styles.input}
                                placeholder="0"
                                disabled
                            />
                        </div>
                    </div>

                    <div className={styles.currency}>
                        <div className={styles.input_container}>
                            <label className={styles.label}>Currency</label>
                            <select className={styles.input}>
                                <option value="bitcoin">Bitcoin</option>
                                <option value="ethereum">Ethereum</option>
                                <option selected value="litecoin">Litecoin</option>
                            </select>
                        </div>
                        
                        <div  className={styles.input_container}>
                            <label className={styles.label}>Currency</label>
                            <input 
                                className={styles.input}
                                placeholder="Internxt"
                                disabled
                            />    
                        </div>
                    </div>
                </div>

                <div className={styles.second_half}>
                    <label className={styles.label}>Please enter your INXT receiving address</label>
                    <input 
                        className={`${styles.input} ${styles.input2}`}
                        placeholder="INXT Receiving address"
                    />

                    <label className={styles.label}>Please send the funds to the following address</label>
                    <input
                        className={`${styles.input} ${styles.input2}`}
                        placeholder="39UtLoELAoDSHQ5YaJvwwSu6ntTUAH2k6C"
                        disabled
                    />
                </div>

                <input 
                    className={styles.button}
                    value="Done"
                    type="submit"
                />
            </form>
        </div>
     );
}
 
export default Container6;