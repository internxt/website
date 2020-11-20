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
                    individual ? 
                    <div>
                        <div className={`${styles.speech} lg:w-36 lg:pt-32 lg:pl-16`}>
                            <Image src="/images/1440/Prices Individual/12.png" width={118} height={110} /> 
                        </div>

                        <div className={`${styles.letter} lg:pr-12 lg:w-32`}>
                            <Image src="/images/1440/Prices Individual/13.png" width={112} height={121} /> 
                        </div>
                    </div>
                    :
                    <div>
                        <div className={`${styles.face} lg:pr-12`}>
                            <Image src="/images/1440/Prices Teams/14.png" width={66} height={67} /> 
                        </div>

                        <div className={`${styles.star} lg:pr-32 lg:pt-28`}>
                            <Image src="/images/1440/Prices Teams/15.png" width={39} height={41} /> 
                        </div>

                        <div className={`${styles.mail} lg:pt-40 lg:w-40`}>
                            <Image src="/images/1440/Prices Teams/16.png" width={114} height={75} /> 
                        </div>
                    </div>
                }

                <h1 className={`${styles.title} lg:text-4.5xl`}>
                    {
                        individual ? description[0].individual_title : description[0].teams_title
                    }
                </h1>

                <p className={`${styles.subtitle} lg:text-lg`}>
                    {description[0].subtitle}
                </p>

                <p className={`${styles.subtitle} lg:text-lg`}>
                    {description[0].subtitle2}
                </p>

                <div className={`${styles.switch_container} lg:h-12 lg:w-72 lg:px-1 lg:mt-16`}>
                    <button onClick={onClickIndividual} className={individual ? `${styles.button} lg:text-13 lg:h-10 lg:w-36 ${styles.grey}` : `${styles.button} lg:text-13 lg:h-10 lg:w-36`}>For individuals</button>

                    <button onClick={onClickTeams}  className={teams ? `${styles.button} lg:text-13 lg:h-10 lg:w-36 ${styles.grey}` : `${styles.button} lg:text-13 lg:h-10 lg:w-36`}>For teams</button>
                </div>
            </div>
            
            {
                individual ?
                    <div className={`grid grid-cols-4 gap-2 lg:px-40 xl:px-48`}>
                        <PriceCard free="true" size={2} individual={true} />
                        <PriceCard size={20} pMonth="0.99" pre6months="0.95" preYear="0.89" mostPopular="true" />
                        <PriceCard size={200} pMonth="4.49" pre6months="3.99" preYear="3.49" />
                        <PriceCard size={2000} pMonth="9.99" pre6months="9.49" preYear="8.99" />
                    </div>
                :
                    <div className={`grid grid-cols-4 gap-2 lg:px-40`}>
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