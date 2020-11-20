import styles from './Container7.module.css'
import descriptions from '../../assets/about-us-descriptions.json'
import PublishedArticle from '../cards/PublishedArticle'

const Container7 = ({ id, articles }) => {
    const description = descriptions.filter( desc => desc.id === id)

    // Check if a number is odd
    const isOdd = ( num ) => {
        return num % 2 == 1;
    }
    
    // Set the background color of the container depending on its id
    const background = isOdd(id) ? 'container grey' : 'container'

    return ( 
        <div className={background}>
            <h1 className={`${styles.title} my-16`}>
                {description[0].title}
            </h1>

            <div className="grid grid-cols-6 gap-y-6 gap-x-3 lg:px-32 xl:px-40">
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

            <p className={`${styles.link} lg:text-base lg:my-16`}>
                {description[0].link}
            </p>
        </div>
     );
}
 
export default Container7;