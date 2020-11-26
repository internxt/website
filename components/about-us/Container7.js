import styles from './Container7.module.css'
import descriptions from '../../assets/about-us-descriptions.json'
import PublishedArticle from '../cards/PublishedArticle'
import Image from 'next/image'

const Container7 = ({ id, articles }) => {
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

            <div className="grid grid-cols-6 gap-y-6 gap-x-3 sm:flex sm:flex-col lg:max-w-780 xl:max-w-1280">
                <PublishedArticle article={articles.data[0]} image={articles.images[0]} />
                <PublishedArticle article={articles.data[1]} image={articles.images[1]} />
                <PublishedArticle article={articles.data[2]} image={articles.images[2]} />
                <PublishedArticle article={articles.data[3]} image={articles.images[3]} />
                <PublishedArticle article={articles.data[4]} image={articles.images[4]} />
                <PublishedArticle article={articles.data[5]} image={articles.images[5]} />
                <PublishedArticle article={articles.data[6]} image={articles.images[6]} />
                <PublishedArticle article={articles.data[7]} image={articles.images[7]} />
                <PublishedArticle article={articles.data[8]} image={articles.images[8]} />
            </div>

            <a href="https://medium.com/internxt" target="_blank" className={`${styles.link} flex flex-row items-center sm:my-16 lg:text-lg lg:mb-16`}>
                <p className="mr-2 sm:text-lg">Read more posts</p>
                {/* <Image className={styles.image} src="/images/1440/Drive/Section 2/Section2 arrow.png" width={14} height={11} /> */}
            </a>
        </div>
     );
}
 
export default Container7;