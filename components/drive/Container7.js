import InfoCard from '../cards/InfoCard'
import styles from './Container7.module.css'
import descriptions from '../../assets/drive-descriptions.json'

const Container7 = ({ id }) => {

    // Filter container specific descriptions
    const description = descriptions.filter( desc => desc.id === id)
    const { title, subtitle, subtitle2, title2, subtitle3, subtitle4 } = description[0]

    return ( 
        <div className={`${styles.cards_container} `}>
            <InfoCard title={title} subtitle={subtitle} subtitle2={subtitle2} linkText="Read more" image="Deloitte" width={137} heigth={27} />
            <InfoCard title={title2} subtitle={subtitle3} subtitle2={subtitle4} linkText="Read study 1.0" linkText2="Read study 2.0" image="IEEE" width={130} heigth={38} />
        </div>
     );
}
 
export default Container7;