import styles from './InvestorCard.module.css'
import Image from 'next/image'

const InvestorCard = ({ company, description, investor, w, h }) => {

    const url = `/images/1440/About/Section 4/${investor}.png`

    return ( 
        <div className={`${styles.card} col-span-2`}>
            <div className="flex justify-center lg:w-40">
                <Image
                    src={url}
                    width={w}
                    height={h}
                    style="lg:w-full"
                />
            </div>
           
            <h1 className={`${styles.name} lg:text-base lg:pt-8`}>
                {company}
            </h1>

            <p className={`${styles.desc} lg:text-sm`}>
                {description}
            </p>
        </div>
     );
}
 
export default InvestorCard;