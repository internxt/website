import styles from './Container1.module.css'
import PriceCard from '../cards/PriceCard'
import Image from 'next/image'
import { useState } from 'react'

const Container1 = ({ id, descriptions, cardDescriptions }) => {

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
        <div className={styles.main_container}>
            {
                individual ? 
                <div>
                    <div className={`${styles.speech} sm:hidden lg:w-36 lg:pt-32 lg:pl-16`}>
                        <img className="xl:w-32" src="/images/1440/Prices Individual/12.png" /> 
                    </div>

                    <div className={`${styles.letter} sm:hidden lg:pr-12 lg:w-32`}>
                        <img className="xl:w-24" src="/images/1440/Prices Individual/13.png" /> 
                    </div>
                </div>
                :
                <div>
                    <div className={`${styles.face} sm:hidden lg:w-12 lg:mr-6`}>
                        <Image src="/images/1440/Prices Teams/14.png" width={66} height={67} /> 
                    </div>

                    <div className={`${styles.star} sm:hidden lg:w-8 lg:mr-24 lg:mt-36`}>
                        <Image src="/images/1440/Prices Teams/15.png" width={39} height={41} /> 
                    </div>

                    <div className={`${styles.mail} sm:hidden lg:w-20 lg:mt-40`}>
                        <Image src="/images/1440/Prices Teams/16.png" width={114} height={75} /> 
                    </div>
                </div>
            }

            <div className={`${styles.first_half} `}>
                <h1 className={`${styles.title} leading-9 sm:text-4xl sm:w-80 lg:text-4.5xl`}>
                    {
                        individual ? description[0].individual_title : description[0].teams_title
                    }
                </h1>

                <p className={`${styles.subtitle} sm:text-xl sm:w-80 lg:text-lg xl:mt-4`}>
                    {description[0].subtitle}
                </p>

                <p className={`${styles.subtitle} sm:text-xl sm:w-80 lg:text-lg`}>
                    {description[0].subtitle2}
                </p>

                <div className={`${styles.switch_container} sm:mt-12 sm:w-auto sm:h-12 sm:px-2 lg:h-12 lg:w-72 lg:mt-16`}>
                    <button onClick={onClickIndividual} 
                        className={
                            individual ? 
                                    `${styles.button} sm:text-sm sm:w-32 sm:h-10 lg:text-13 lg:h-10 lg:w-36 ${styles.grey}` 
                                : 
                                    `${styles.button} sm:text-sm sm:text-xs sm:w-32 sm:h-10 lg:text-13 lg:h-10 lg:w-36`}>
                        {description[0].individuals}
                    </button>

                    <button onClick={onClickTeams} 
                        className={
                            teams ? 
                                `${styles.button} sm:text-sm sm:w-32 sm:h-10 lg:text-13 lg:h-10 lg:w-36 ${styles.grey}` 
                            : 
                                `${styles.button} sm:text-sm sm:text-xs sm:w-32 sm:h-10 lg:text-13 lg:h-10 lg:w-36`}>
                        {description[0].teams}
                    </button>
                </div>
            </div>
            
            {
                individual ?
                    <div className={`grid grid-cols-4 gap-3 sm:grid-cols-1 sm:gap-y-8`}>
                        <PriceCard free="true" size={2} individual={true} descriptions={cardDescriptions} />
                        <PriceCard size={20} pMonth="0.99" pre6months="0.95" preYear="0.89" descriptions={cardDescriptions} />
                        <PriceCard size={200} pMonth="4.49" pre6months="3.99" preYear="3.49" mostPopular="true" descriptions={cardDescriptions} />
                        <PriceCard size={2000} pMonth="9.99" pre6months="9.49" preYear="8.99" descriptions={cardDescriptions} />
                    </div>
                :
                    <div className={`grid grid-cols-4 gap-3 sm:grid-cols-1 sm:gap-y-8`}>
                        <PriceCard teams={true} limitedMembers={true} size={200} pMonth="9.49" pre6months="8.99" preYear="8.49" descriptions={cardDescriptions}  />
                        <PriceCard teams={true} size={2000} pMonth="19.99" pre6months="19.49" preYear="18.99" mostPopular="true" descriptions={cardDescriptions} />
                        <PriceCard teams={true} size={20000} pMonth="149.99" pre6months="145.49" preYear="139.99" descriptions={cardDescriptions} />
                        <PriceCard teams={true} free="true" size={200000} individual={false} descriptions={cardDescriptions} />
                    </div>
            }
        </div>
     );
}
 
export default Container1;