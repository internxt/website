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
            <div className={styles.container}>
                <div className={`${styles.main} items-center`}>
                    <h1 className={`${styles.title} leading-10 sm:text-4xl sm:text-center sm:mt-12 sm:w-80 lg:text-center lg:text-5xl lg:mt-20 xl:text-center xl:leading-12 xl:mt-24`}>
                        {description[0].title}
                    </h1>

                    <p className={`${styles.subtitle} sm:text-xl sm:text-center sm:w-80 lg:text-center lg:text-lg lg:w-120 lg:mt-4 xl:text-center`}>
                        {description[0].subtitle}
                    </p>
                </div>
                
                <div className={`mt-10 sm:hidden sm:mt-14`}>
                    <Image src="/images/1440/Photos/Section 4/interface.png" width={1212} height={575} />
                </div>

                <div className={`hidden sm:block sm:object-contain`}>
                    <Image src="/images/1440/Photos/Section 4/375p interface.png" width={750} height={319} />
                </div>
            </div>
        </div>
    );
}
 
export default Container4;