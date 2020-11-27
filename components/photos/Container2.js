import styles from './Container2.module.css'
import descriptions from '../../assets/photos-descriptions.json'
import PriceCard from '../cards/PriceCard'
import Image from 'next/image'
import Link from 'next/link'

const Container2 = ({ id }) => {

    const description = descriptions.filter( desc => desc.id === id)

    // Check if a number is odd
    const isOdd = ( num ) => {
        return num % 2 == 1;
    }

    // Set the background color of the container depending on its id
    const background = isOdd(id) ? 'normal_container' : 'normal_container grey'
    
    return ( 
        <div className={background}>
            <div className={`${styles.main_container} sm:py-16 lg:pb-16`}>
                <h1 className={`${styles.title} leading-9 sm:text-4xl sm:w-80 lg:text-5xl`}>
                    {description[0].title}
                </h1>

                <p className={`${styles.subtitle} sm:text-xl sm:w-80 lg:text-xl lg:w-7/12`}>
                    {description[0].subtitle}
                </p>

                <div className="grid grid-cols-4 gap-x-4 sm:grid-cols-1 sm:gap-y-8 sm:my-16 lg:pb-12 lg:mt-12 xl:mt-16">
                    <PriceCard free="true" size={2} individual={true} />
                    <PriceCard size={20} pMonth="0.99" pre6months="0.95" preYear="0.89" mostPopular="true" />
                    <PriceCard size={200} pMonth="4.49" pre6months="3.99" preYear="3.49" />
                    <PriceCard size={2000} pMonth="9.99" pre6months="9.49" preYear="8.99" />
                </div>

                <Link href="/prices">
                    <a className={`${styles.link} flex flex-row w-auto items-center lg:text-base lg:mt-12 lg:mb-16 xl:mt-24`}>
                        <Link href="/pricing">
                            <p className="sm:text-xl mr-2">{description[0].link}</p>
                        </Link>

                        <Image src="/images/1440/Drive/Section 2/Section2 arrow.svg" width={14} height={11} />
                    </a>
                </Link>
            </div>
        </div>
     );
}

export default Container2;