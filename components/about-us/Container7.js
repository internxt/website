import styles from './Container7.module.css'
import descriptions from '../../assets/about-us-descriptions.json'
import PublishedArticle from '../cards/PublishedArticle'

const Container7 = ({ id, articles, images }) => {

    console.log(images[5])
    console.log(articles[5].author)
    const description = descriptions.filter( desc => desc.id === id)

    // Check if a number is odd
    const isOdd = ( num ) => {
        return num % 2 == 1;
    }
    
    // Set the background color of the container depending on its id
    const background = isOdd(id) ? 'container grey' : 'container'

    return ( 
        <div className={background}>
            <h1 className={styles.title}>
                {description[0].title}
            </h1>

            <div className={styles.card_container}>
                <PublishedArticle article={articles[0]} image={images[0]} />
                <PublishedArticle article={articles[1]} image={images[1]} />
                <PublishedArticle article={articles[2]} image={images[2]} />
                <PublishedArticle article={articles[3]} image={images[3]} />
                <PublishedArticle article={articles[4]} image={images[4]} />
                <PublishedArticle article={articles[5]} image={images[5]} />
                <PublishedArticle article={articles[6]} image={images[6]} />
                <PublishedArticle article={articles[7]} image={images[7]} />
                <PublishedArticle article={articles[8]} image={images[8]} />
            </div>

            <p className={styles.link}>
                {description[0].link}
            </p>
        </div>
     );
}
 
export default Container7;