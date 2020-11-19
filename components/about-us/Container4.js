import styles from './Container4.module.css'
import descriptions from '../../assets/about-us-descriptions.json'
import PersonalCard from '../cards/PersonalCard'

const Container4 = ({ id }) => {

    const description = descriptions.filter( desc => desc.id === id)
    const { 
        employee, job,
        employee2, job2,
        employee3, job3

    } = description[0]

    return ( 
        <div className={`${styles.main} lg:pt-0 lg:pb-24`}>
            <text className={`${styles.title} lg:text-5xl`}>
                {description[0].title}
            </text>

            <div className="grid grid-cols-6 gap-4 lg:px-32 lg:pt-12">
                <PersonalCard name={employee} job={job} picture="Harrison" />
                <PersonalCard name={employee2} job={job2} picture="Alex" />
                <PersonalCard name={employee3} job={job3} picture="Jerome" />
            </div>
        </div>
     );
}
 
export default Container4;