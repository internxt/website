import styles from './Container2.module.css'
import TokenSmallCard from '../cards/TokenSmallCard'
import Image from 'next/image'

const Container2 = ({ id, descriptions }) => {
    
    const description = descriptions.filter( desc => desc.id === id)
    const { 
        title, subtitle, colored,
        title2, subtitle2, colored2,
        title3, subtitle3, colored3,
        title4, subtitle4, colored4,
        title5, subtitle5, colored5,
        title6, subtitle6, colored6,
        title7, subtitle7, colored7,
        title8, subtitle8, colored8,
        title9, subtitle9, colored9,

    } = description[0]
    
    // Check if a number is odd
    const isOdd = ( num ) => {
        return num % 2 == 1;
    }

    const handleScroll = (id) => {
        console.log(id);
        const section = document.getElementById(id);
        section.scrollIntoView({behavior: "smooth"});
    }

    // Set the background color of the container depending on its id
    const background = isOdd(id) ? `normal_container` : 'normal_container grey';

    return ( 
        <div className={background}>
            <div className={`${styles.main} sm:py-8 lg:pb-16`}>
                <div className={styles.images_container}>
                    <div className={`${styles.cube} sm:hidden lg:w-28`}>
                        <Image
                            src="/images/1440/Token/Section 2/left glass and cube.webp"
                            width={152}
                            height={274}
                        />   
                    </div>

                    <div className={`${styles.hoop} sm:hidden lg:w-24`}>
                        <Image
                            src="/images/1440/Token/Section 2/right hoop.webp"
                            width={167}
                            height={303}
                        />
                    </div>
                </div>

                <div className="hidden sm:flex sm:flex-col">
                    <div className={`${styles.card_container} sm:grid sm:grid-cols-1`}>
                        <div data-aos="fade-up" data-aos-duration="300">
                            <TokenSmallCard title={title} subtitle={subtitle} colored={colored} />
                        </div>

                        <div data-aos="fade-up" data-aos-duration="300">
                            <TokenSmallCard title={title2} subtitle={subtitle2} colored={colored2} />
                        </div>

                        <div data-aos="fade-up" data-aos-duration="300">
                            <TokenSmallCard title={title3} subtitle={subtitle3} colored={colored3} />
                        </div>
                    </div>

                    <div className={`${styles.card_container} sm:grid sm:grid-cols-1`}>
                        <div data-aos="fade-up" data-aos-duration="300">
                            <TokenSmallCard title={title4} subtitle={subtitle4} colored={colored4} />
                        </div>

                        <div data-aos="fade-up" data-aos-duration="300">
                            <TokenSmallCard title={title5} subtitle={subtitle5} colored={colored5} />
                        </div>

                        <div data-aos="fade-up" data-aos-duration="300">
                            <TokenSmallCard title={title6} subtitle={subtitle6} colored={colored6} />
                        </div>
                    </div>
                </div>

                <div className={`${styles.card_container} sm:hidden`}>
                    <div data-aos="fade-up" data-aos-duration="300">
                        <TokenSmallCard title={title} subtitle={subtitle} colored={colored} />
                    </div>

                    <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="50" onClick={() => handleScroll("loyaltyProgram")}>
                        <TokenSmallCard title={title2} subtitle={subtitle2} colored={colored2} />
                    </div>

                    <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="100" onClick={() => handleScroll("merch")}>
                        <TokenSmallCard title={title3} subtitle={subtitle3} colored={colored3} />
                    </div>
                </div>

                <div className={`${styles.card_container} sm:hidden`}>
                    <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="150">
                        <TokenSmallCard title={title4} subtitle={subtitle4} colored={colored4} />
                    </div>

                    <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="200">
                        <TokenSmallCard title={title8} subtitle={subtitle8} colored={colored8} />
                    </div>

                    <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="250" onClick={() => handleScroll("interest")}>
                        <TokenSmallCard title={title7} subtitle={subtitle7} colored={colored7} />
                    </div>
                </div>

                <div className={`${styles.card_container} sm:hidden`}>
                    <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="150">
                        <TokenSmallCard title={title6} subtitle={subtitle6} colored={colored6} /> 
                    </div>
                    
                    <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="200" onClick={() => handleScroll("loyaltyProgram")}>
                        <TokenSmallCard title={title5} subtitle={subtitle5} colored={colored5} />
                    </div>

                    <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="250">
                        <TokenSmallCard title={title9} subtitle={subtitle9} colored={colored9} />
                    </div>
                </div>
                
            </div>
        </div>
     );
}
 
export default Container2;