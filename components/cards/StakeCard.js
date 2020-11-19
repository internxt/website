import styles from './StakeCard.module.css'

const StakeCard = ({ bundle, percentage, inxtQty }) => {
    return ( 
        <div>
            <p className={`${styles.bundle} lg:text-base`}>
                {bundle}
            </p>
            
            <div className={`${styles.card} lg:mt-2 lg:px-12 lg:py-4`}>
                <div className={styles.percentage_container}>
                    <p className={`${styles.percentage} lg:text-5xl`}>
                        {percentage}
                    </p>
                    <p className={`${styles.percentage2} lg:text-base`}>%</p>
                </div>

                <p className={`${styles.per_year} lg:text-sm`}>
                    Per year
                </p>

                <p className={`${styles.inxt} lg:text-xss lg:mt-6 lg:h-8`}>
                    {inxtQty}
                </p>

                <p className={`${styles.get_started} lg:text-xss`}>
                    Get started
                </p>
            </div>
        </div>
     );
}
 
export default StakeCard;