import styles from './Container5.module.css'
import descriptions from '../../assets/token-descriptions.json'
import Image from 'next/image'

const Container5 = ({ id }) => {

    // Filter container specific descriptions
    const description = descriptions.filter( desc => desc.id === id)

    // Check if a number is odd
    const isOdd = ( num ) => {
        return num % 2 == 1;
    }

    // Set the background color of the container depending on its id
    const background = isOdd(id) ? 'container' : 'container grey'

    return ( 
        <div className={background}>
            <div className={`${styles.container} lg:pt-8`}>
                <div className={`${styles.main} lg:pl-24 lg:pt-32`}>
                    <h1 className={`${styles.title} lg:text-5xl lg:w-11/12 leading-12 xl:leading-13`}>
                        {description[0].title}
                    </h1>

                    <p className={`${styles.subtitle} lg:text-xl lg:w-10/12`}>
                        {description[0].subtitle}
                    </p>

                    <p className={`${styles.subtitle} lg:text-xl lg:w-104`}>
                        {description[0].subtitle2}
                    </p>

                    <div className={`${styles.button_container} lg:mt-16`}>
                        <button className={`${styles.button1} lg:text-xs lg:h-8 lg:w-32`}>App store</button>
                        <button className={`${styles.button2} lg:text-xs lg:h-8 lg:w-32`}>Play store</button>
                    </div>
                </div>
                
                <div className={`${styles.image} lg:w-5/12 lg:pt-24 lg:ml-12`}>
                    <Image
                        src="/images/1440/Token/Section 5/Coinbase graphic.png"
                        width={560}
                        height={612}
                    />
                </div>
            </div>
        </div>
    );
}
 
export default Container5;