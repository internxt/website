import styles from './Container6.module.css'
import descriptions from '../../assets/about-us-descriptions.json'
import PartnerCard from '../cards/PartnerCard'

const Container6 = ({ id }) => {

    const description = descriptions.filter( desc => desc.id === id)
    const { 
        title,
        company, bio1, bio2,
        company2, bio3, bio4,
        company3, bio5, bio6,
        company4, bio7, bio8,
    
    } = description[0]

    return ( 
        <div className={styles.main}>
            <text className={styles.title}>
                {title}
            </text>

            <div className={styles.card_container}>
                <PartnerCard 
                    company={company} bio={bio1} bio2={bio2} blue={true} 
                    logo="Blackberry logo" logoW={} logoH={} 
                    image="" imageW={} imageH={} 
                    />

                <PartnerCard company={company2} bio={bio3} bio2={bio4} blue={false} 
                    logo="" logoW={} logoH={} 
                    image="" imageW={} imageH={} 
                />
                
                <PartnerCard company={company3} bio={bio5} bio2={bio6} blue={true} 
                    logo="" logoW={} logoH={} 
                    image="" imageW={} imageH={} 
                />

                <PartnerCard company={company4} bio={bio7} bio2={bio8} blue={false} 
                    logo="" logoW={} logoH={} 
                    image="" imageW={} imageH={} 
                />
            </div>
           
        </div>
     );
}
 
export default Container6;