import styles from './PublishedArticle.module.css'
import Image from 'next/image'
import moment from 'moment';

const PublishedArticle = ({ article, image}) => {

    return ( 
        <div className={`${styles.card} col-span-2 overflow-hidden h-auto w-auto`}>
            { image ? <img className="h-auto w-full object-contain" src={image} /> : <p>La imagen esta cargando</p> }

            <div className={`${styles.description} lg:pl-4 lg:pt-4`}>
                <p className={`${styles.date} lg:text-xxs`}>
                    {moment(article.created).format('MMM DD YYYY')}
                </p>

                <h1 className={`${styles.title} lg:text-sm lg:mb-10`}>
                    {article.title}
                </h1>

                <p className={`${styles.link} lg:text-xxxs lg:mb-4`}>READ ARTICLE</p>
            </div>
        </div>
    );
}
 
export default PublishedArticle;