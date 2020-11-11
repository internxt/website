import styles from './StakeCard.module.css'

const StakeCard = ({ bundle, percentage, inxtQty }) => {
    return ( 
        <div>
            <p className={styles.bundle}>
                {bundle}
            </p>
            
            <div className={styles.card}>
                <div className={styles.percentage_container}>
                    <p className={styles.percentage}>
                        {percentage}
                    </p>
                    <p className={styles.percentage2}>%</p>
                </div>

                <p className={styles.per_year}>
                    Per year
                </p>

                <p className={styles.inxt}>
                    {inxtQty}
                </p>

                <p className={styles.get_started}>
                    Get started
                </p>
            </div>
        </div>
     );
}
 
export default StakeCard;