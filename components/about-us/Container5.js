import styles from './Container5.module.css'
import descriptions from '../../assets/about-us-descriptions.json'
import InvestorCard from '../cards/InvestorCard'

const Container5 = ({ id }) => {

    const description = descriptions.filter( desc => desc.id === id)
    const { 
        title,
        company, info,
        company2, info2,
        company3, info3,
        company4, info4,
        company5, info5,
        company6, info6,
    
    } = description[0]
    
    const isOdd = ( num ) => {
        return num % 2 == 1;
    }

    // Set the background color of the container depending on its id
    const className = isOdd(id) ? 'container grey' : 'container'

    return ( 
        <div className={className}>
            <text className={styles.title}>
                {title}
            </text>
            
            <div className={styles.card_container}>
                <InvestorCard company={company} description={info} />
                <InvestorCard company={company2} description={info2} />
                <InvestorCard company={company3} description={info3} />
                <InvestorCard company={company4} description={info4} />
                <InvestorCard company={company5} description={info5} />
            </div>

        </div>
     );
}
 
export default Container5;