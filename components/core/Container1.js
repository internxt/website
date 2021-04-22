import styles from './Container1.module.css'
import Image from 'next/image'

const Container1 = ({ id, downloadUrl, descriptions }) => {

    const description = descriptions.filter(desc => desc.id === id)
    
    // Check if a number is odd
    const isOdd = (num) => {
        return num % 2 == 1;
    }

    // Set the background color of the container depending on its id
    const className = isOdd(id) ? 'normal_container' : 'normal_container grey'

    // Esta funcion cambiara el color de una determinada palabra de texto
    const formattedText = (text, values) => { 
        const regex = new RegExp(/\[\[(.*?)\]\]/);

        if (!values.length)
            return text;
    
        return (<div>
            {text.split(regex)
                .reduce((prev, current, i) => {
                    if (!i)
                        return [current];
    
                    return prev.concat(
                        values.includes(current)  ?
                            <span key={i + current} className={`${styles.colored}`}>
                                {current}
                            </span>
                            : current
                    );
                }, [])}
        </div>);
    };

    const formattedTextColor = (text, values) => { 
        const regex = new RegExp(/\[\[(.*?)\]\]/);

        if (!values.length)
            return text;
    
        return (<div>
            {text.split(regex)
                .reduce((prev, current, i) => {
                    if (!i)
                        return [current];
    
                    return prev.concat(
                        values.includes(current)  ?
                            <span key={i + current} className={`${styles.coloredTitle}`}>
                                {current}
                            </span>
                            : current
                    );
                }, [])}
        </div>);
    };

    return (
        <div className={`${className} relative`}>
            <div className={`${styles.main} sm:h-136`}>
                <div data-aos="fade-right" data-aos-delay="250" data-aos-duration="700" className={`${styles.left} sm:w-40`}>
                    <Image src="/images/1440/Core/Section 1/Graphic left.webp" width={511} height={268} />
                </div>

                <div data-aos="fade-left" data-aos-delay="250" data-aos-duration="700" className={`${styles.right} sm:w-36`}>
                    <Image src="/images/1440/Core/Section 1/Graphic right.webp" width={438} height={239} />
                </div>

                <h1 
                    data-aos="fade-up"
                    data-aos-delay="150"
                    data-aos-duration="500"
                    className={`${styles.title} sm:text-4xl sm:w-80`}>
                    {formattedTextColor(description[0].title, description[0].coloredTitle)}
                </h1>

                <p 
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="500"
                    className={`${styles.subtitle} sm:text-xl sm:w-10/12 sm:mt-6`}>
                    {formattedText(description[0].subtitle, description[0].colored)}
                </p>



                <span className={`${styles.button_container}`}>
                    <a 
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="500"

                        href={downloadUrl} className={`${styles.button_core} sm:text-base`}>{description[0].button1}</a>
                    <a 
                        data-aos="fade-up"
                        data-aos-delay="350"
                        data-aos-duration="500"

                        href="https://medium.com/internxt/learn-how-to-correctly-set-up-x-core-its-quick-easy-4e738042a8a3" target="_blank"
                        className={`${styles.link} sm:text-base`}>{description[0].button2}</a>
                </span>
            </div>
        </div>
    );
}

export default Container1;