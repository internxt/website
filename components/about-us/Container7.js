import styles from './Container7.module.css'
import PublishedArticle from '../cards/PublishedArticle'
import Image from 'next/image'

const Container7 = ({ id, articles, descriptions, cardDescriptions }) => {
    const description = descriptions.filter( desc => desc.id === id)

    // Check if a number is odd
    const isOdd = ( num ) => {
        return num % 2 == 1;
    }
    
    // Set the background color of the container depending on its id
    const background = isOdd(id) ? 'normal_container grey' : 'normal_container'

    return ( 
        <div className={`${background} sm:items-center`}>
            <h1 data-aos="fade-up" data-aos-duration="300" className={`${styles.title} my-16 sm:text-4xl`}>
                {description[0].title}
            </h1>

            <div className="grid grid-cols-3 gap-y-6 gap-x-3 sm:grid-cols-1 xl:max-w-1280">
                <div data-aos="fade-up" data-aos-duration="300" className="col-span-1">
                    <PublishedArticle article={articles.data[0]} image={articles.images[0]} descriptions={cardDescriptions} />
                </div>

                <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="50" className="col-span-1">
                    <PublishedArticle article={articles.data[1]} image={articles.images[1]} descriptions={cardDescriptions} />
                </div>

                <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="150" className="col-span-1">
                    <PublishedArticle article={articles.data[2]} image={articles.images[2]} descriptions={cardDescriptions} />
                </div>

                <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="200" className="col-span-1">
                    <PublishedArticle article={articles.data[3]} image={articles.images[3]} descriptions={cardDescriptions} />
                </div>

                <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="250" className="col-span-1">
                    <PublishedArticle article={articles.data[4]} image={articles.images[4]} descriptions={cardDescriptions} />
                </div>

                <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="300" className="col-span-1">
                    <PublishedArticle article={articles.data[5]} image={articles.images[5]} descriptions={cardDescriptions} />
                </div>

                <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="250" className="col-span-1">
                    <PublishedArticle article={articles.data[6]} image={articles.images[6]} descriptions={cardDescriptions} />
                </div>

                <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="300" className="col-span-1">
                    <PublishedArticle article={articles.data[7]} image={articles.images[7]} descriptions={cardDescriptions} />
                </div>

                <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="350" className="col-span-1">
                    <PublishedArticle article={articles.data[8]} image={articles.images[8]} descriptions={cardDescriptions} />
                </div>
            </div>

            <a data-aos="fade-up" data-aos-duration="300" href="https://medium.com/internxt" target="_blank" className={`${styles.link} hover:opacity-80 flex flex-row items-center sm:my-16 lg:text-lg lg:mb-16`}>
                <p className="mr-2 sm:text-lg">{description[0].link}</p>
                <Image className={styles.image} src="/images/1440/Drive/Section 2/Section2 arrow.svg" width={14} height={11} />
            </a>
        </div>
     );
}
 
export default Container7;