import styles from './PublishedArticle.module.css'
import Image from 'next/image'
import moment from 'moment';

const PublishedArticle = ({ article, image}) => {

    return ( 
        <div className={`${styles.card} col-span-2 overflow-hidden h-auto w-auto`}>
            { image ? <img className="h-auto w-full object-contain" src={image} /> : <p>La imagen esta cargando</p> }

            <div className={`${styles.description} lg:pl-4 lg:pt-4 xl:pl-6 xl:pt-6 relative`}>
                <p className={`${styles.date} lg:text-xxs`}>
                    {moment(article.created).format('MMM DD YYYY')}
                </p>

                <h1 className={`${styles.title} lg:text-sm lg:mb-10 xl:mb-16`}>
                    {article.title}
                </h1>

                <a href={article.link} target="_blank" className={`${styles.link} absolute bottom-0 mb-6 lg:text-xxxs mr-1`}>READ ARTICLE</a>
            </div>
        </div>
    );
}
 
export default PublishedArticle;