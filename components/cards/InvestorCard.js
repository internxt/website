import styles from './InvestorCard.module.css'
import Image from 'next/image'

const InvestorCard = ({ company, description, investor, w, h }) => {

    const url = `/images/1440/About/Section 4/${investor}.png`

    return ( 
        <div className={styles.card}>
           <div className={styles.image}>
                <Image
                    src={url}
                    width={w}
                    height={h}
                />
            </div>

            <h1 className={styles.name}>
                {company}
            </h1>

            <p className={styles.desc}>
                {description}
            </p>
        </div>
     );
}
 
export default InvestorCard;