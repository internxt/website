import styles from './PersonalCard.module.css'
import Image from 'next/image'

const PersonalCard = ({ name, job, picture }) => {
    const url = `/images/1440/About/Section 3/${picture}.png`

    return ( 
        <div className={styles.card}>
            <div className={styles.bio}>
                <text className={styles.name}>
                    {name}
                </text>

                <text className={styles.job}>
                    {job}
                </text>

                <text className={styles.read_more}>READ BIO</text>
            </div>
            
            <div className={styles.image}>
                <Image
                    src={url}
                    width={109}
                    height={155}
                />
            </div>
        </div>
     );
}
 
export default PersonalCard;