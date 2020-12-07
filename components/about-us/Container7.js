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
            <h1 className={`${styles.title} my-16 sm:text-4xl`}>
                {description[0].title}
            </h1>

            <div className="grid grid-cols-3 gap-y-6 gap-x-3 sm:grid-cols-1 xl:max-w-1280">
                <PublishedArticle article={articles.data[0]} image={articles.images[0]} descriptions={cardDescriptions} />
                <PublishedArticle article={articles.data[1]} image={articles.images[1]} descriptions={cardDescriptions} />
                <PublishedArticle article={articles.data[2]} image={articles.images[2]} descriptions={cardDescriptions} />
                <PublishedArticle article={articles.data[3]} image={articles.images[3]} descriptions={cardDescriptions} />
                <PublishedArticle article={articles.data[4]} image={articles.images[4]} descriptions={cardDescriptions} />
                <PublishedArticle article={articles.data[5]} image={articles.images[5]} descriptions={cardDescriptions} />
                <PublishedArticle article={articles.data[6]} image={articles.images[6]} descriptions={cardDescriptions} />
                <PublishedArticle article={articles.data[7]} image={articles.images[7]} descriptions={cardDescriptions} />
                <PublishedArticle article={articles.data[8]} image={articles.images[8]} descriptions={cardDescriptions} />
            </div>

            <a href="https://medium.com/internxt" target="_blank" className={`${styles.link} flex flex-row items-center sm:my-16 lg:text-lg lg:mb-16`}>
                <p className="mr-2 sm:text-lg">{description[0].link}</p>
                <Image className={styles.image} src="/images/1440/Drive/Section 2/Section2 arrow.svg" width={14} height={11} />
            </a>
        </div>
     );
}
 
export default Container7;