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
      
        return (gigas / Math.pow(1000, i)).toFixed(0) + " " + sizes[i]
    }

    useEffect(() => {
        setPlanSize(formatSize(size))
    }, [size])

    return ( 
        <div className={`${styles.card_container} relative`}>

            {   mostPopular ?
                    <div>
                        <div className={`${styles.heart1} lg:w-12 lg:pt-8`}>
                            <Image src="/images/1440/Prices Individual/heart 1.png" width={25} height={25} /> 
                        </div>

                        <div className={`${styles.heart2} lg:pt-40 lg:pr-4 lg:w-10`}>
                            <Image src="/images/1440/Prices Individual/heart 2.png" width={25} height={30} /> 
                        </div>

                        <div className={`${styles.heart3} lg:w-6 lg:ml-4`}>
                            <Image src="/images/1440/Prices Individual/heart 3.png" width={37} height={36} /> 
                        </div>
                    </div>
                :
                    null
            }

            {
                free ? <p className={`${styles.try_for_free} lg:text-xss`}>Get started!</p> : <p className={`${styles.try_for_free} lg:text-xss`}>Try for free for 30 days</p>
            }
            <div className={`${styles.card} lg:min-h-0 lg:w-44 lg:h-60`}>
                { mostPopular ? <p className={`${styles.most_popular} lg:text-xs lg:pt-3`}>Most popular</p> : <div className={`${styles.void} lg:h-8`}></div> }

                    <p className={`${styles.size} lg:text-2xl`}>
                        {plansize}
                    </p>

                    {free ? 
                            <div className={styles.free_msg}>
                                <h1 className={`${styles.text_free} lg:text-lg`}> { individual ? <span>FREE</span> : <span>CONTACT</span> } </h1>

                                <h1 className={`${styles.text_forever} lg:text-sm`}> { individual ? <span>FOREVER & EVER</span> : <span>TEAM FOR PRICING</span> } </h1>
                            </div>
                        :
                            <div className={styles.paid_container}>
                                <div className={`${styles.background_pMonth} lg:w-24 h-auto lg:py-1`}>
                                    <p className={`${styles.pMonth} lg:text-xxs`}>
                                        €{pMonth} / month
                                    </p>
                                </div>

                                <p className={`${styles.label} lg:text-xxs`}>Prepay 6 month</p>
                                <h1 className={`${styles.pre_pay} lg:text-xs`}>
                                    €{pre6months} / month
                                </h1>

                                <div className={`${styles.line} lg:my-2`}></div>

                                <p className={`${styles.label} lg:text-xxs`}>Prepay 12 month</p>
                                <h1 className={`${styles.pre_pay} lg:text-xs`}>
                                    €{preYear} / month
                                </h1>
                            </div>
                    }
            </div>
        </div>
    );
}
 
export default PriceCard;