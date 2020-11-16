import styles from './InfoCard.module.css'
import Image from 'next/image'

const InfoCard = ({ title, subtitle, subtitle2, linkText, linkText2, image }) => {
    
    const url = `/images/1440/Drive/Section 7/${image}.png`

    return ( 
        <div className={styles.card_container}>
            <div className={styles.card}>
                <div className={styles.logo}>
                    <Image src={url} width={137} height={27} />
                </div>

                <text className={styles.title}>
                    {title}
                </text>

                <text className={styles.subtitle}>
                    {subtitle}
                </text>

                <text className={styles.subtitle}>
                    {subtitle2}
                </text>

                <div className={styles.links_container}>
                    <a className={styles.link}>
                        {linkText}
                    </a>

                    {
                        linkText2 ? 
                            <a className={styles.link}>
                                {linkText2}
                            </a>
                        :
                            null
                    }
                </div>
            </div>
        </div>
     );
}
 
export default InfoCard;