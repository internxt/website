import styles from './Container1.module.css'
import descriptions from '../../assets/drive-descriptions.json'
import EmailNewsletter from '../EmailNewsletter'
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
        <div className={className}>
            <div className={`${styles.main} sm:pb-20`}>
                <h1 className={`${styles.title} sm:w-80 sm:text-4xl lg:text-8xl`}>
                    {description[0].title}
                </h1>

                <p className={`${styles.subtitle} sm:text-xl sm:w-80 sm:pt-8 lg:text-xl lg:w-7/12`}>
                    {description[0].subtitle}
                </p>

                <div className={`${styles.star} sm:top-0 sm:ml-6 sm:mt-6 sm:w-6 sm:p-0 lg:pl-24`}>
                    <Image src="/images/1440/Drive/Section 1/star icon.png" width={47} height={50} />
                </div>

                <div className={`${styles.gear} sm:p-0 sm:top-0 sm:w-6 sm:mr-12 sm:mt-3 lg:pt-8 lg:pr-22`}>
                    <Image src="/images/1440/Drive/Section 1/cog icon.png" width={37} height={38} />
                </div>

                <div className={`${styles.coin} sm:p-0 sm:w-8 sm:mb-8 sm:ml-10 lg:pb-20`}>
                    <Image src="/images/1440/Drive/Section 1/coin icon.png" width={81} height={76} />
                </div>

                <div className={`${styles.lock} sm:p-0 sm:w-8 sm:mr-16 sm:mb-6 lg:pr-32`}>
                    <Image src="/images/1440/Drive/Section 1/lock icon.png" width={45} height={60} />
                </div>
            </div>

            <div className={`${styles.secondary} sm:pb-12 sm:items-center lg:pb-32`}>
                <h1 className={`${styles.subtitle2} sm:text-2xl sm:mb-8 sm:w-10/12 lg:text-xl`}>
                    {description[0].subtitle2}
                </h1>

                <form   
                    method="get" 
                    target="_blank" 
                    action="https://drive.internxt.com/new"
                    className="flex items-center"
                >
                    <input
                        name='email'
                        type='email'
                        placeholder='Your email'
                        className={`${styles.email} sm:hidden lg:w-48 lg:text-sm lg:h-10 `}
                        required
                    />

                    <input
                        name='signup'
                        type='submit'
                        value="Sign up"
                        className={`${styles.button} sm:rounded-3xl sm:w-28 sm:h-10 sm:text-base lg:w-32 lg:h-10 lg:text-sm`}
                    />
                </form>

                <p className={`${styles.subtitle3} sm:text-xs sm:pt-2 lg:text-sm`}>
                    {description[0].subtitle3}
                </p>

                <div className={`${styles.cloud} sm:bottom-0 sm:p-0 sm:mb-10 sm:ml-8 sm:w-8 lg:pl-48`}>
                    <Image src="/images/1440/Drive/Section 1/cloud icon.png" width={70} height={52} />
                </div>

                <div className={`${styles.hand} sm:hidden lg:w-84`}>
                    <Image src="/images/1440/Drive/Section 1/purplehand.png" width={482} height={310} />
                </div>
            </div>
        </div>
    );
}
 
export default Container1;