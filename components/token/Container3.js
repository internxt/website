import styles from './Container3.module.css'
import descriptions from '../../assets/token-descriptions.json'
import Image from 'next/image'
import Link from 'next/link'

const Container3 = ({ id }) => {

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
            <div className={`${styles.container} lg:py-12`}>
                <div className="lg:w-104">
                    <Image
                        src="/images/1440/Token/Section 3/floating girl.png"
                        width={517}
                        height={589}
                    />
                </div>

                <div className={`${styles.main} lg:pl-12 lg:pt-12`}>
                    <h1 className={`${styles.title} leading-12 lg:text-5xl lg:max-w-none lg:w-104 xl:leading-13`}>
                        {description[0].title}
                    </h1>

                    <p className={`${styles.subtitle} lg:text-xl lg:w-100`}>
                        {description[0].subtitle}
                    </p>

                    <p className={`${styles.subtitle} lg:text-xl lg:w-104`}>
                        {description[0].subtitle2}
                    </p>

                    <Link href="/core">
                        <a className={`${styles.link} flex flex-row w-auto items-center lg:text-lg lg:mb-16`}>
                            <p className={`lg:text-base mr-1 mb-1`}>{description[0].subtitle3}</p>
                            <Image src="/images/1440/Drive/Section 2/Section2 arrow.png" width={14} height={11} />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}
 
export default Container3;