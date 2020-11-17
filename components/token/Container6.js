import styles from './Container6.module.css'
import descriptions from '../../assets/token-descriptions.json'
import { lazy } from 'react'
import Image from 'next/image'

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
            
            <div className={styles.circle}>
                <Image
                    src="/images/1440/Token/Section 5/middle circle.png"
                    width={55}
                    height={55}
                />
            </div>

            <div className={styles.card_container}>

                

                <div className={styles.card}>
                    <Image
                        src="/images/1440/Token/Section 5/exrates.png"
                        width={154}
                        height={41}
                    />
                </div>

                <div className={styles.card}>
                    <Image
                        src="/images/1440/Token/Section 5/uniswap.png"
                        width={182}
                        height={41}
                    />
                </div>

                <div className={styles.card}>
                    <Image
                        src="/images/1440/Token/Section 5/mercatox.png"
                        width={187}
                        height={19}
                    />
                </div>
                
                <div className={styles.card}>
                    <Image
                        src="/images/1440/Token/Section 5/latoken.png"
                        width={159}
                        height={39}
                    />
                </div>

                <div className={styles.card}>
                    <Image
                        src="/images/1440/Token/Section 5/idex.png"
                        width={129}
                        height={33}
                    />
                </div>

                <div className={styles.card}>
                    <Image
                        src="/images/1440/Token/Section 5/fatbtc.png"
                        width={159}
                        height={47}
                    />
                </div>
            </div>

            <div className={styles.form_container}>
                <div className={styles.diamond}>
                    <Image 
                        src="/images/1440/Token/Section 5/right diamond.png"
                        width={109}
                        height={117}
                    />
                </div>
                
                <div className={styles.cube}>
                    <Image 
                        src="/images/1440/Token/Section 5/left cube.png"
                        width={84}
                        height={89}
                    />
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
        </div>
     );
}
 
export default Container6;