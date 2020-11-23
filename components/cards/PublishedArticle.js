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

                <a href={article.link} target="_blank" className={`${styles.link_container} lg:mb-4 xl:mb-6`}>
                    <p className={`${styles.link} lg:text-xxxs mr-1`}>READ ARTICLE</p>
                    <Image className="w-2" src="/images/1440/Drive/Section 2/Section2 arrow.png" width={14} height={11} />
                </a>
            </div>
        </div>
    );
}
 
export default PublishedArticle;