import styles from './PublishedArticle.module.css'
import Image from 'next/image'

const PublishedArticle = ({ article, image}) => {

    return ( 
        <div className={styles.card}>
            <div className={styles.image}>
                {
                    image ? <Image src={image} width={355} height={285} /> : <p>La imagen esta cargando</p>
                }
            </div>

            <div className={styles.description}>
                <p className={styles.date}>
                    {article.created}
                </p>

                <h1 className={styles.title}>
                    {article.title}
                </h1>

                <p className={styles.link}>READ ARTICLE</p>
            </div>
        </div>
    );
}
 
export default PublishedArticle;