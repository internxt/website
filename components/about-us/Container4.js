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
        <div className={styles.main}>
            <text className={styles.title}>
                {description[0].title}
            </text>

            <div className={styles.cards_container}>
                <PersonalCard name={employee} job={job} picture="Harrison" />
                <PersonalCard name={employee2} job={job2} picture="Alex" />
                <PersonalCard name={employee3} job={job3} picture="Jerome" />
            </div>
        </div>
     );
}
 
export default Container4;