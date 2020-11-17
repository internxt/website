import { Fragment, useEffect, useState } from 'react'
import styles from './PriceCard.module.css'
import Image from 'next/image'

const PriceCard = ({ free, size, pMonth, pre6months, preYear, mostPopular, individual }) => {
    
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
    }, [size])

    return ( 
        <div className={styles.card_container}>

            {   mostPopular ?
                    <>
                        <div className={styles.heart1}>
                            <Image src="/images/1440/Prices Individual/heart 1.png" width={25} height={25} /> 
                        </div>

                        <div className={styles.heart2}>
                            <Image src="/images/1440/Prices Individual/heart 2.png" width={25} height={30} /> 
                        </div>

                        <div className={styles.heart3}>
                            <Image src="/images/1440/Prices Individual/heart 3.png" width={37} height={36} /> 
                        </div>
                    </>
                :
                    null
            }

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
                                <h1 className={styles.text_free}> { individual ? <span>FREE</span> : <span>CONTACT</span> } </h1>

                                <h1 className={styles.text_forever}> { individual ? <span>FOREVER & EVER</span> : <span>TEAM FOR PRICING</span> } </h1>
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

                                <p className={styles.label}>Prepay 12 month</p>
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