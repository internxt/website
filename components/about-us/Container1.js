import styles from './Container1.module.css'
import EmailNewsletter from '../EmailNewsletter'

const Container1 = ({ id, descriptions, cardDescriptions }) => {

    const description = descriptions.filter( desc => desc.id === id)

    return ( 
        <div className={`${styles.background} sm:h-120 lg:h-144`}>
            <div className={`${styles.main} xl:h-full`}>
                <h1 
                    data-aos="fade-up"
                    data-aos-delay="150"
                    data-aos-duration="500"
                    
                    className={`${styles.title} sm:text-4xl sm:w-80 lg:text-8xl lg:w-150`}>
                    {description[0].title}
                </h1>

                <p 
                    data-aos="fade-up"
                    data-aos-delay="250"
                    data-aos-duration="500"
                    
                    className={`${styles.subtitle} sm:text-xl sm:w-84 sm:mb-0 lg:text-xl`}>
                    {description[0].subtitle}
                </p>

                <div 
                    data-aos="fade-up"
                    data-aos-delay="350"
                    data-aos-duration="500"
                    
                    className="sm:hidden">
                    <EmailNewsletter value={description[0].newsletter} descriptions={cardDescriptions} />
                </div>

                <form
                    data-aos="fade-up"
                    data-aos-delay="450"
                    data-aos-duration="500"
                    
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
            </div>
        </div>
     );
}
 
export default Container1;