import styles from './Container1.module.css'

const Container1 = ({ id, descriptions }) => {

    const description = descriptions.filter( desc => desc.id === id)
    
    // Check if a number is odd
    const isOdd = ( num ) => {
        return num % 2 == 1;
    }

    // Set the background color of the container depending on its id
    const background = isOdd(id) ? `normal_container ${styles.main} sm:m-0 sm:h-136 lg:h-136` : 'normal_container grey'


    const handleScroll = () => {
        const buySection = document.getElementById("buyINX");
        buySection.scrollIntoView({behavior: "smooth"});
    }

    return ( 
        <div className={background}>
            <h1 
                data-aos="fade-up"
                data-aos-delay="150"
                data-aos-duration="300"
                
                className={`${styles.title} sm:text-4xl sm:w-80 sm:mb-8 lg:text-8xl lg:w-8/12 lg:mb-6`}>
                {description[0].title}
            </h1>

            <p 
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="300"
                
                className={`${styles.subtitle} sm:text-xl sm:w-11/12 lg:text-xl lg:w-108`}>
                {description[0].subtitle}
            </p>

            <div className={styles.buttons_container}>
                <div
                    data-aos="fade-up"
                    data-aos-delay="250"
                    data-aos-duration="300" >
                    <button 
                        onClick={handleScroll}
                        className={`${styles.button} flex items-center justify-center lg:h-8 lg:w-28`}
                    >
                        <p className={`${styles.button_text} sm:text-base lg:text-xs`}>{description[0].button}</p>
                    </button>
                </div>
                
                <div 
                    data-aos="fade-up"
                    data-aos-delay="250"
                    data-aos-duration="300">
                    <a href="https://medium.com/internxt/internxts-token-inxt-embrace-the-power-99dc8940a4b6" target="_blank"
                        className={`${styles.learn_more} sm:text-base lg:text-xs`}>
                        {description[0].learn}
                    </a>
                </div>
                    
                    
                
            </div>
        </div>
     );
}
 
export default Container1;