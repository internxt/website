import styles from './Container1.module.css'
import descriptions from '../../assets/prices-descriptions.json'
import PriceCard from '../cards/PriceCard'
import Image from 'next/image'
import { useState } from 'react'

const Container1 = ({ id }) => {

    const description = descriptions.filter( desc => desc.id === id)

    const [ individual, setIndividual ] = useState(true)
    const [ teams, setTeams ] = useState(false)
    
    // ESTO SE PUEDE OPTIMIZAR, onClickTeams SOBRA, CON UNA VARIABLE ES SUFICIENTE
    const onClickIndividual = () => {
        individual ? null : setIndividual(true); setTeams(false)
    }

    const onClickTeams = () => {
        teams ? null : setTeams(true); setIndividual(false)
    }
    
    return ( 
        <div>
            <div className={styles.first_half}>
                {
                    !individual ? 
                    <div>
                        <div className={styles.speech}>
                            <Image src="/images/1440/Prices Individual/12.png" width={118} height={110} /> 
                        </div>

                        <div className={styles.letter}>
                            <Image src="/images/1440/Prices Individual/13.png" width={112} height={121} /> 
                        </div>
                    </div>
                    :
                    <div>
                        <div className={styles.face}>
                            <Image src="/images/1440/Prices Teams/14.png" width={66} height={67} /> 
                        </div>

                        <div className={styles.star}>
                            <Image src="/images/1440/Prices Teams/15.png" width={39} height={41} /> 
                        </div>

                        <div className={styles.mail}>
                            <Image src="/images/1440/Prices Teams/16.png" width={114} height={75} /> 
                        </div>
                    </div>
                }

                <h1 className={styles.title}>
                    {
                        individual ? description[0].individual_title : description[0].teams_title
                    }
                </h1>

                <p className={styles.subtitle}>
                    {description[0].subtitle}
                </p>

                <p className={styles.subtitle}>
                    {description[0].subtitle2}
                </p>

                <div className={styles.switch_container}>
                    <button onClick={onClickIndividual} className={individual ? `${styles.button} ${styles.grey}` : styles.button}>For individuals</button>

                    <button onClick={onClickTeams}  className={teams ? `${styles.button} ${styles.grey}` : styles.button}>For teams</button>
                </div>
            </div>
            
            {
                individual ?
                    <div className={styles.cards_container}>
                        <PriceCard free="true" size={2} individual={true} />
                        <PriceCard size={20} pMonth="0.99" pre6months="0.95" preYear="0.89" mostPopular="true" />
                        <PriceCard size={200} pMonth="4.49" pre6months="3.99" preYear="3.49" />
                        <PriceCard size={2000} pMonth="9.99" pre6months="9.49" preYear="8.99" />
                    </div>
                :
                    <div className={styles.cards_container}>
                        <PriceCard size={200} pMonth="9.49" pre6months="8.99" preYear="8.49" mostPopular="true" />
                        <PriceCard size={2000} pMonth="19.99" pre6months="19.49" preYear="18.99" />
                        <PriceCard size={20000} pMonth="149.99" pre6months="145.49" preYear="139.99" />
                        <PriceCard free="true" size={2} individual={false} />
                    </div>
            }
        </div>
     );
}
 
export default Container1;