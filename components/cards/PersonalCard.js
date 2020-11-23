import styles from './PersonalCard.module.css'
import Image from 'next/image'

const PersonalCard = ({ name, job, picture }) => {
    const url = `/images/1440/About/Section 3/${picture}.png`

    return ( 
        <div className={`${styles.card} col-span-2`}>
            <div className={`${styles.bio} lg:pl-5 xl:pl-6`}>
                <text className={`${styles.name} lg:text-sm`}>
                    {name}
                </text>

                <text className={`${styles.job} lg:text-xss lg:mt-3`}>
                    {job}
                </text>
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