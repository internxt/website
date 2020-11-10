import styles from './InvestorCard.module.css'

const InvestorCard = ({ company, description }) => {
    return ( 
        <div className={styles.card}>
            <text>vodafone</text>

            <text className={styles.name}>
                {company}
            </text>

            <text className={styles.desc}>
                {description}
            </text>
        </div>
     );
}
 
export default InvestorCard;