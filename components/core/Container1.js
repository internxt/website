import styles from './Container1.module.css'
import descriptions from '../../assets/core-descriptions.json'
import Image from 'next/image'

const Container1 = ({ id }) => {

    const description = descriptions.filter( desc => desc.id === id)
    
    // Check if a number is odd
    const isOdd = ( num ) => {
        return num % 2 == 1;
    }

    // Set the background color of the container depending on its id
    const className = isOdd(id) ? 'normal_container' : 'normal_container grey'

    return ( 
        <div className={`${className} relative`}>
            <div className={styles.main}>
                <div className={`${styles.left} sm:w-40`}>
                    <Image src="/images/1440/Core/Section 1/Graphic left.png" width={511} height={268} />
                </div>

                <div className={`${styles.right} sm:w-32`}>
                    <Image src="/images/1440/Core/Section 1/Graphic right.png" width={438} height={239} />
                </div>

                <h1 className={`${styles.title} sm:text-4xl sm:w-10/12`}>
                    {description[0].title}
                </h1>

                <p className={`${styles.subtitle} sm:text-xl sm:w-10/12 sm:mt-6`}>
                    {description[0].subtitle}
                </p>

                <p className={`${styles.subtitle2} sm:text-xl sm:w-6/12 sm:mt-16`}>
                    {description[0].subtitle2}
                </p>

                <div className={`${styles.button_container}`}>
                    <button className={`${styles.button} sm:text-base`}>Download</button>
                    <a href="https://medium.com/internxt/learn-how-to-correctly-set-up-x-core-its-quick-easy-4e738042a8a3" target="_blank" 
                        className={`${styles.link} sm:text-base`}>Set-up & tips</a>  
                </div>
            </div>
        </div>
    );
}
 
export default Container1;