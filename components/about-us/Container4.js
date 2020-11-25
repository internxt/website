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
        <div className={`${styles.main} sm:pt-16 lg:pt-0 lg:pb-24 items-center`}>
            <text className={`${styles.title} sm:text-4xl sm:mt-12 lg:text-5xl`}>
                {description[0].title}
            </text>

            <div className="grid grid-cols-6 gap-x-8 sm:grid-cols-1 sm:gap-y-6 sm:mt-12 lg:pt-12 xl:my-16">
                <PersonalCard name={employee} job={job} picture="Harrison" />
                <PersonalCard name={employee2} job={job2} picture="Alex" />
                <PersonalCard name={employee3} job={job3} picture="Jerome" />
            </div>
        </div>
     );
}
 
export default Container4;