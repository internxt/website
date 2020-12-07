import styles from './Container1.module.css'
import EmailNewsletter from '../EmailNewsletter'
import Image from 'next/image'

const Container1 = ({ id, descriptions, cardDescriptions }) => {

    const description = descriptions.filter( desc => desc.id === id)
    // Check if a number is odd
    const isOdd = ( num ) => {
        return num % 2 == 1;
    }

    // Set the background color of the container depending on its id
    const className = isOdd(id) ? 'normal_container' : 'normal_container grey'

    return ( 
        <div className={`${className} relative`}>
            <div className={`${styles.main} sm:py-12`}>
                <h1 className={`${styles.title} sm:text-4xl sm:pb-5 sm:w-80 lg:text-8xl`}>
                    {description[0].title}
                </h1>

                <p className={`${styles.subtitle} sm:text-xl sm:w-84 lg:text-xl lg:w-7/12`}>
                    {description[0].subtitle}
                </p>

                <p className={`${styles.subtitle} sm:text-xl sm:w-84  lg:text-xl lg:w-7/12`}>
                    {description[0].subtitle2}
                </p>

                <div className={`${styles.picture} sm:hidden lg:w-32`}>
                    <Image src="/images/1440/Photos/Section 1/1.png" width={75} height={92} />
                </div>

                <div className={`${styles.weather} sm:hidden lg:w-32 lg:pb-16`}>
                    <Image src="/images/1440/Photos/Section 1/2.png" width={68} height={65} />
                </div>

                <div className={`${styles.video} sm:hidden lg:w-16 xl:w-16`}>
                    <Image src="/images/1440/Photos/Section 1/6.png" width={110} height={134} />
                </div>

                <div className={`${styles.lgcross} sm:hidden lg:w-72 lg:pl-48`}>
                    <Image src="/images/1440/Photos/Section 1/cross 1.png" width={29} height={29} />
                </div>

                <div className={`${styles.mdcross} sm:hidden lg:pr-32 lg:pt-40`}>
                    <Image src="/images/1440/Photos/Section 1/cross 4.png" width={18} height={18} />
                </div>
            </div>

            <div className={`${styles.circles} sm:hidden lg:w-40 lg:pr-16 lg:mr-6 lg:pt-84`}>
                    <Image src="/images/1440/Photos/Section 1/5.png" width={182} height={129} />
                </div>

            <div className={`${styles.secondary} sm:items-center sm:pb-16`}>
                <h1 className={`${styles.subtitle2} sm:font-avertasemibold sm:text-xl sm:w-80 sm:m-0 lg:text-xl`}>
                    {description[0].subtitle3}
                </h1>

                <div className="sm:hidden">
                    <EmailNewsletter value={description[0].newsletter} descriptions={cardDescriptions} />
                </div>
                
                <form
                    data-code="r3s4c1" 
                    method="post" 
                    target="_blank" 
                    rel="noopener"
                    action="https://app.mailerlite.com/webforms/submit/r3s4c1"
                    className={` hidden sm:flex sm:mt-6`}>
                    <input type="hidden" name="ml-submit" value="1"></input>
                    <input
                        name='fields[email]'
                        type='email'
                        placeholder={description[0].placeholder}
                        className={`${styles.email} sm:h-10 sm:w-40 lg:w-48 lg:text-sm lg:h-10 `}
                    />

                    <input
                        name='signup'
                        type='submit'
                        value={description[0].button}
                        className={`${styles.button} sm:h-10 sm:w-auto sm:text-base sm:font-avertasemibold sm:px-3 lg:w-32 lg:h-10 lg:text-sm`}
                    />
                </form>

                <div className={`${styles.recorder} sm:hidden lg:w-84 lg:pl-32 lg:pt-32`}>
                    <Image src="/images/1440/Photos/Section 1/3.png" width={133} height={104} />
                </div>

                <div className={`${styles.message} sm:hidden lg:w-92 lg:pr-72`}>
                    <Image src="/images/1440/Photos/Section 1/4.png" width={82} height={80} />
                </div>

                <div className={`${styles.cross} sm:hidden lg:pr-64`}>
                    <Image src="/images/1440/Photos/Section 1/cross 3.png" width={19} height={19} />
                </div>
            </div>
        </div>
    );
}
 
export default Container1;