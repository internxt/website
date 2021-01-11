import styles from './PersonalCard.module.css'
import Image from 'next/image'

const PersonalCard = ({ name, job, picture }) => {
    const url = `/images/1440/About/Section 3/${picture}.webp`

    return ( 
        <div className={`${styles.card} col-span-2`}>
            <div className={`${styles.bio} sm:pl-6 sm:w-56 lg:pl-5 lg:m-0 xl:pl-6`}>
                <p className={`${styles.name} sm:text-lg sm:pr-4 lg:text-sm`}>
                    {name}
                </p>

                <p className={`${styles.job} sm:text-13 lg:text-xss lg:mt-3`}>
                    {job}
                </p>
            </div>
            
            <div className={`${styles.image} sm:w-auto`}>
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