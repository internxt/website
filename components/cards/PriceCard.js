import { useEffect, useState } from 'react'
import styles from './PriceCard.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'

const PriceCard = ({ free, size, pMonth, pre6months, preYear, mostPopular, individual, descriptions }) => {
    
    const description = descriptions.filter( desc => desc.id === "PriceCard")

    const [ plansize, setPlanSize ] = useState()
    const router = useRouter()
    const locale = router.locale

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
                        <div className={`${styles.heart1} sm:pt-0 lg:w-12 lg:pt-8`}>
                            <Image src="/images/1440/Prices Individual/heart 1.png" width={25} height={25} /> 
                        </div>

                        <div className={`${styles.heart2} sm:pt-36 sm:pr-4 lg:pt-40 lg:pr-4 lg:w-10`}>
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
                free ? <p className={`${styles.try_for_free} sm:hidden lg:text-xxs xl:text-xs`}>{description[0].getstarted}</p> : <p className={`${styles.try_for_free} sm:hidden lg:text-xxs xl:text-xs`}>{description[0].tryforfree}</p>
            }
            <div className={`${styles.card} lg:min-h-0 lg:w-44 lg:h-60`}>
                { mostPopular ? <p className={`${styles.most_popular} sm:text-sm lg:text-xs lg:pt-3`}>{description[0].mostpopular}</p> : <div className={`${styles.void} lg:h-8`}></div> }

                    <p className={`${styles.size} sm:text-3xl lg:text-2xl`}>
                        {plansize}
                    </p>

                    {free ? 
                            <a href="https://drive.internxt.com/new" className={styles.free_msg}>
                                <h1 className={`${styles.text_free} sm:text-2xl sm:font-avertabold lg:text-lg`}> { individual ? <span>{description[0].free}</span> : <span>{description[0].contact}</span> } </h1>

                                <h1 className={`${styles.text_forever} sm:text-xl lg:text-sm`}> { individual ? <span>{description[0].forever}</span> : <span>{description[0].team}</span> } </h1>
                            </a>
                        :
                            <div className={styles.paid_container}>
                                <div className={`${styles.background_pMonth} sm:h-8 lg:w-24 h-8 lg:py-1`}>
                                    <a id="a" href="https://drive.internxt.com/new" target="_blank" 
                                        className={`${styles.pMonth} sm:text-sm lg:text-xxs`}>
                                        €{pMonth} / {description[0].month}
                                    </a>
                                </div>

                                <p className={`${styles.label} sm:text-xs lg:text-xxs`}>{description[0].prepay} 6 {description[0].month}{locale === 'en' ? 's' : 'es'}</p>
                                <h1 className={`${styles.pre_pay} sm:text-base lg:text-xs`}>
                                    €{pre6months} / {description[0].month}
                                </h1>

                                <div className={`${styles.line} lg:my-2`}></div>

                                <p className={`${styles.label} sm:text-xs lg:text-xxs`}>{description[0].prepay} 12 {description[0].month}{locale === 'en' ? 's' : 'es'}</p>
                                <h1 className={`${styles.pre_pay} sm:text-base lg:text-xs`}>
                                    €{preYear} / {description[0].month}
                                </h1>
                            </div>
                    }
            </div>
        </div>
    );
}
 
export default PriceCard;