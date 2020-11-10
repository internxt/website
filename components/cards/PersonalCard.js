import styles from './PersonalCard.module.css'

const PersonalCard = ({ name, job }) => {
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
                Esto sera la imagen
            </div>
        </div>
     );
}
 
export default PersonalCard;