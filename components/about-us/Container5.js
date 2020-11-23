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
    const className = isOdd(id) ? 'normal_container grey' : 'normal_container'

    return ( 
        <div className={className}>
            <text className={`${styles.title} lg:text-5xl lg:pt-20 xl:mb-24`}>
                {title}
            </text>
            
            <div className="grid grid-cols-6 gap-16 lg:px-32 lg:pt-12 lg:pb-32 xl:gap-32 xl:mb-24">
                <InvestorCard company={company} description={info} investor="Esade" w={125} h={38} />
                <InvestorCard company={company2} description={info2} investor="Vodafone" w={192} h={48} />
                <InvestorCard company={company3} description={info3} investor="Telefonica" w={192} h={53} />
                <InvestorCard company={company4} description={info4} investor="Lanz" w={196} h={26} />
                <InvestorCard company={company5} description={info5} investor="Venture" w={245} h={42} />
            </div>

        </div>
     );
}
 
export default Container5;