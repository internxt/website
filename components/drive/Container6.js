import styles from './Container6.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Container6 = ({ id, descriptions }) => {

    // Filter container specific descriptions
    const description = descriptions.filter( desc => desc.id === id)

    // Check if a number is odd
    const isOdd = ( num ) => {
        return num % 2 == 1;
    }

    // Set the background color of the container depending on its id
    const background = isOdd(id) ? 'normal_container' : 'normal_container grey'

    return ( 
        <div className={background}>
            <div className={`${styles.container} sm:items-center sm:justify-center sm:flex-col`}>
                <div className={`${styles.main} sm:items-center sm:w-auto sm:p-0`}>
                    <h1 className={`${styles.title} leading-10 sm:text-4xl sm:text-center sm:w-80 sm:mt-16 lg:text-5xl lg:w-104 lg:leading-tight xl:leading-13`}>
                        {description[0].title}
                    </h1>

                    <p className={`${styles.subtitle} sm:text-xl sm:text-center sm:w-80 sm:mb-12 sm:pt-4 lg:text-lg lg:w-96`}>
                        {description[0].subtitle}
                    </p>

                    <Link href="/pricing">
                        <a className={`hover:opacity-80 flex flex-row w-auto items-center sm:my-6 lg:text-base lg:mt-10 lg:mb-12 xl:my-16`}>
                            <p className={`${styles.margin} ${styles.link} sm:text-lg lg:text-base mr-2`}>{description[0].link}</p>
                            <img src="/images/1440/Drive/Section 2/Section2 arrow.svg"/>
                        </a>
                    </Link>
                </div>
                
                <div className={`${styles.image} sm:hidden`}>
                    <Image src="/images/1440/Drive/Section 6/Business.png" width={740} height={704} />
                </div>

                <div className={`hidden sm:block sm:mt-12`}>
                    <Image src="/images/1440/Drive/Section 6/375p business.png" width={708} height={658} />
                </div>
            </div>
        </div>
    );
}
 
export default Container6;