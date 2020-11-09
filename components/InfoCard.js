import styles from './InfoCard.module.css'

const InfoCard = ({ title, subtitle, subtitle2, linkText, linkText2 }) => {
    return ( 
        <div className={styles.card_container}>
            <div className={styles.card}>
                <text className={styles.logo}>esto es el logo</text>

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