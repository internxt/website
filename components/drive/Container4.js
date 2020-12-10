import styles from './Container4.module.css'
import Image from 'next/image'

const Container4 = ({ id, descriptions }) => {

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
            <div className={`${styles.container} sm:flex-col max-w-1600 xl:items-center xl:justify-center`}>
                <div className={`${styles.main} sm:w-full sm:items-center sm:p-0 lg:pl-24`}>
                    <h1 data-aos="fade-up" data-aos-duration="300" className={`${styles.title} leading-10 sm:text-4xl sm:text-center sm:mt-12 sm:w-80 lg:text-5xl lg:w-112 lg:leading-12 xl:leading-13`}>
                        {description[0].title}
                    </h1>

                    <p data-aos="fade-up" data-aos-duration="300" className={`${styles.subtitle} sm:text-xl sm:text-center sm:w-80 sm:pt-4 lg:text-lg lg:w-84`}>
                        {description[0].subtitle}
                    </p>

                    <p data-aos="fade-up" data-aos-duration="300" className={`${styles.subtitle} sm:text-xl sm:text-center sm:w-80 lg:text-lg lg:w-84`}>
                        {description[0].subtitle2}
                    </p>
                </div>
                
                <div className={`${styles.image} sm:object-cover sm:w-full sm:px-8 sm:my-12 lg:w-5/12`}>
                    <Image src="/images/1440/Drive/Section 4/logos graphic.webp" width={493} height={472} />
                </div>
            </div>
        </div>
    );
}
 
export default Container4;