import styles from './Container5.module.css'
import descriptions from '../../assets/drive-descriptions.json'
import Image from 'next/image'

const Container5 = ({ id }) => {

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
                    <h1 className={`${styles.title1} sm:text-4xl sm:text-center sm:mt-12 sm:w-10/12 lg:text-5xl xl:mt-24`}>
                        {description[0].title}
                    </h1>

                    <p className={`${styles.subtitle1} sm:text-xl sm:text-center sm:w-10/12 lg:text-lg lg:w-10/12 lg:pt-2`}>
                        {description[0].subtitle}
                    </p>
                </div>
                
                <div className={`sm:hidden sm:mt-12`}>
                    <Image src="/images/1440/Drive/Section 5/Interface.png" width={1212} height={575} />
                </div>

                <div className={`hidden sm:block sm:object-contain`}>
                    <Image src="/images/1440/Drive/Section 5/375p interface.png" width={750} height={778} />
                </div>
            </div>

            <div className={`${styles.container2} sm:py-12 sm:justify-center sm:flex-col-reverse lg:py-16`}>
                <div className={`${styles.hand} sm:w-11/12 lg:w-104`}>
                    <Image src="/images/1440/Drive/Section 5/blue hand.png" width={590} height={423} />
                </div>

                <div className={`${styles.main} sm:items-center lg:pl-32`}>
                    <h1 className={`${styles.title2} sm:text-4xl sm:text-center sm:w-10/12 lg:text-5xl lg:w-84 lg:leading-tight xl:leading-13 xl:mb-4`}>
                        {description[0].title2}
                    </h1>

                    <p className={`${styles.subtitle2} sm:text-xl sm:text-center sm:w-10/12 lg:text-lg lg:w-96`}>
                        {description[0].subtitle3}
                    </p>

                    <p className={`${styles.subtitle2} sm:text-xl sm:text-center sm:w-10/12 lg:text-lg lg:w-96`}>
                        {description[0].subtitle4}
                    </p>

                    <div className={`${styles.links} sm:justify-evenly`}>
                        <a href="https://drive.internxt.com/new" target="_blank" className={`${styles.link} flex flex-row w-auto items-center sm:p-0 lg:text-lg lg:mb-16`}>
                            <p className="sm:text-lg mr-2">Sign up</p>
                            <Image src="/images/1440/Drive/Section 2/Section2 arrow.png" width={14} height={11} />
                        </a>

                        <a className={`${styles.link} flex flex-row w-auto items-center sm:p-0 lg:text-lg lg:mb-16`}>
                            <p className="sm:text-lg mr-2">Download</p>
                            <Image src="/images/1440/Drive/Section 2/Section2 arrow.png" width={14} height={11} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Container5;