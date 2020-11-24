import styles from './Container5.module.css'
import descriptions from '../../assets/core-descriptions.json'
import { useState } from 'react'
import Image from 'next/image'

const Container5 = ({ id }) => {

    const description = descriptions.filter( desc => desc.id === id)

    const CENTS_PER_GB = 1
    const MIN_INXT_BONUS = 100
    const BONUS_PERCENTAGE = 0.1

    const [ storage, setStorage ] = useState(0)
    const [ inxt, setInxt ] = useState(0)
    const [ total, setTotal ] = useState(0)

    /* const isRound = function(number, p){
        let l = number.toString().split('.')[1].length;
        return (p >= l);
    }

    // Funcion que redondea precisamente
    const round = function(number, p=2){
        if(Number.isInteger(number) || isRound(number,p))
            return number;
        let r = 0.5 * Number.EPSILON * number;
        let o = 1; while(p-- > 0) o *= 10;
        if(number<0)
            o *= -1;
        return Math.round((number + r) * o) / o;
    } */

    const amountEarned = () => {
        let amountInCents = storage * CENTS_PER_GB

        inxt >= MIN_INXT_BONUS ? amountInCents += addBonus(amountInCents) : null
        let formattedAmount = amountInCents.toFixed(2)

        setTotal(formattedAmount)
    }

    const addBonus = ( originalAmount ) => {
        const bonusMultiplier = ( inxt * BONUS_PERCENTAGE ) / 100
        return originalAmount * bonusMultiplier
    }

    return ( 
        <div className={styles.background}>
            <h1 className={`${styles.title} sm:text-4xl sm:w-10/12 sm:mt-12`}>
                {description[0].title}
            </h1>

            <p className={`${styles.subtitle} sm:text-xl sm:w-10/12`}>
                {description[0].subtitle}
            </p>

            <div className={`grid grid-cols-3 gap-x-6 sm:flex sm:flex-col `}>
                <div className={`${styles.input_container} sm:mt-12`}>
                    <label className={`${styles.label}`}>
                        {description[0].label}
                    </label>

                    <div className={`${styles.placeholders}`}>
                        <input 
                            type="number"
                            min="1"
                            className={`${styles.input}`}
                            onChange={e => {
                                setStorage(e.target.value)
                                amountEarned()
                            }}
                        />

                        <div className={`${styles.type_container}`}>
                            <p className={`${styles.type}`}>
                                GB
                            </p>
                        </div>
                    </div>
                </div>

                <div className={`${styles.input_container} sm:mt-6`}>
                    <label className={`${styles.label}`}>
                        {description[0].label2}
                    </label>

                    <div className={`${styles.placeholders} `}>
                        <input 
                            type="number"
                            min="1"
                            className={`${styles.input}`}
                            onChange={e => {
                                setInxt(e.target.value)
                                amountEarned()
                            }}
                        />

                        <div className={`${styles.type_container}`}>
                            <p className={`${styles.type}`}>
                                INXT
                            </p>
                        </div>
                    </div>
                </div>

                <div className={`${styles.input_container} sm:mt-20`}>
                    <label className={`${styles.label}`}>
                        {description[0].label3}
                    </label>

                    <div className={`${styles.placeholders}`}>
                        <input 
                            type="text"
                            min="0"
                            disabled
                            className={`${styles.input}`}
                            value={total}
                        />

                        <div className={`${styles.type_container}`}>
                            <p className={`${styles.type}`}>
                                EUR
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <a href="https://medium.com/internxt/learn-how-to-correctly-set-up-x-core-its-quick-easy-4e738042a8a3" target="_blank" className={`${styles.link} flex flex-row w-auto items-center lg:text-lg lg:mb-16`}>
                <p className="sm:text-lg mr-2">{description[0].link}</p>
            </a>
        </div>
     );
}

export default Container5;