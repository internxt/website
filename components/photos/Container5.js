import styles from './Container5.module.css'
import Image from 'next/image' 

const Container5 = ({ id, descriptions }) => {

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
            <div className={`${styles.container} max-w-1600 sm:flex-col-reverse sm:items-center sm:mt-16`}>
                <div className={`${styles.image} `}>
                    <img src="/images/1440/Photos/Section 4/hand2.png" alt="Share Filest"/>
                </div>

                <div className={`${styles.main} sm:items-center`}>
                    <h1 data-aos="fade-up" data-aos-duration="300" data-aos-delay="100" className={`${styles.title} leading-10 sm:text-4xl sm:w-84 sm:text-center leading-10 lg:text-5xl lg:max-w-none lg:w-104 xl:leading-12`}>
                        {description[0].title}
                    </h1>

                    <p data-aos="fade-up" data-aos-duration="300" data-aos-delay="100" className={`${styles.subtitle} sm:text-xl sm:w-80 sm:text-center sm:pt-2 lg:text-xl lg:w-100`}>
                        {description[0].subtitle}
                    </p>

                    <p data-aos="fade-up" data-aos-duration="300" data-aos-delay="100" className={`${styles.subtitle} sm:text-xl sm:w-80 sm:text-center lg:text-xl lg:w-104`}>
                        {description[0].subtitle2}
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default Container5;