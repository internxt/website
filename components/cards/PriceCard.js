import { Fragment, useEffect, useState } from 'react'
import styles from './PriceCard.module.css'
import Image from 'next/image'

const PriceCard = ({ free, size, pMonth, pre6months, preYear, mostPopular }) => {
    
    const [ plansize, setPlanSize ] = useState()

    const formatSize = ( gigas ) => {
        const sizes = ["GB", "TB"]
      
        if (gigas == 0) {
            return "N/A"
        }
      
        const i = parseInt(Math.floor(Math.log(gigas) / Math.log(1000)))
      
        if (i == 0) {
            return gigas + " " + sizes[i]
        }
      
        return (gigas / Math.pow(1000, i)).toFixed(1) + " " + sizes[i]
    }

    useEffect(() => {
        setPlanSize(formatSize(size))
    }, [])

    return ( 
        <div className={styles.card_container}>
            {
                free ? <p className={styles.try_for_free}>Get started!</p> : <p className={styles.try_for_free}>Try for free for 30 days</p>
            }
            <div className={styles.card}>
                { mostPopular ? <p className={styles.most_popular}>Most popular</p> : <div className={styles.void}></div> }

                    <p className={styles.size}>
                        {plansize}
                    </p>

                    {free ? 
                            <div className={styles.free_msg}>
                                <h1 className={styles.text_free}>FREE</h1>

                                <h1 className={styles.text_forever}>FOREVER & EVER</h1>
                            </div>
                        :
                            <div className={styles.paid_container}>
                                <div className={styles.background_pMonth}>
                                    <p className={styles.pMonth}>
                                        €{pMonth} / month
                                    </p>
                                </div>

                                <p className={styles.label}>Prepay 6 month</p>
                                <h1 className={styles.pre_pay}>
                                    €{pre6months} / month
                                </h1>

                                <div className={styles.line}></div>

                                <text className={styles.label}>Prepay 12 month</text>
                                <h1 className={styles.pre_pay}>
                                    €{preYear} / month
                                </h1>
                            </div>
                    }
            </div>
        </div>
    );
}
 
export default PriceCard;