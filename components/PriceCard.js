import { Fragment, useEffect, useState } from 'react'
import styles from './PriceCard.module.css'

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
            <div className={styles.card}>
                { mostPopular ? <text className={styles.most_popular}>Most popular</text> : <div className={styles.void}></div> }

                    <text className={styles.size}>
                        {plansize}
                    </text>

                    {free ? 
                            <div className={styles.free_msg}>
                                <text className={styles.text_free}>FREE</text>

                                <text className={styles.text_forever}>FOREVER & EVER</text>
                            </div>
                        :
                            <div className={styles.paid_container}>
                                <div className={styles.background_pMonth}>
                                    <text className={styles.pMonth}>
                                        €{pMonth} / month
                                    </text>
                                </div>

                                <text className={styles.label}>Prepay 6 month</text>
                                <text className={styles.pre_pay}>
                                    €{pre6months} / month
                                </text>

                                <div className={styles.line}></div>

                                <text className={styles.label}>Prepay 12 month</text>
                                <text className={styles.pre_pay}>
                                    €{preYear} / month
                                </text>
                            </div>
                    }
            </div>
            {
                free ? null : <text className={styles.try_for_free}>Try for free for 30 days</text>
            }
        </div>
    );
}
 
export default PriceCard;