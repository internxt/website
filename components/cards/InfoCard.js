import styles from './InfoCard.module.css'
import Image from 'next/image'

const InfoCard = ({ title, subtitle, subtitle2, linkText, linkText2, image, width, heigth }) => {
    
    const url = `/images/1440/Drive/Section 7/${image}.png`

    return ( 
        <div className={`${styles.card} relative lg:p-0 lg:pl-10 lg:pt-12 lg:pb-6 lg:h-100 lg:w-4/12`}>
            <div className={`${styles.logo} lg:w-4/12`}>
                <Image src={url} width={width} height={heigth} />
            </div>

            <h1 className={`${styles.title} lg:text-2xl lg:mt-10`}>
                {title}
            </h1>

            <p className={`${styles.subtitle} lg:text-sm lg:w-10/12`}>
                {subtitle}
            </p>

            <p className={`${styles.subtitle} lg:text-sm lg:w-10/12`}>
                {subtitle2}
            </p>

            <a className={`${styles.link} absolute bottom-0 lg:pb-6 lg:text-sm lg:m-0 xl:mb-16`}>
                {linkText}
            </a>

            {
                linkText2 ? 
                    <a className={`${styles.link} absolute bottom-0 right-0 lg:pr-16 lg:pb-6 lg:text-sm xl:mb-16 xl:mr-40`}>
                        {linkText2}
                    </a>
                :
                    null
            }
        </div>
     );
}
 
export default InfoCard;