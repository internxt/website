import styles from './Container3.module.css'
import descriptions from '../../assets/about-us-descriptions.json'
import PersonalCard from '../cards/PersonalCard'

const Container3 = ({ id }) => {

    const description = descriptions.filter( desc => desc.id === id)
    const { 
        employee, job,
        employee2, job2,
        employee3, job3,
        employee4, job4,
        employee5, job5,
        employee6, job6,
        employee7, job7,
        employee8, job8,
        employee9, job9,
        employee10, job10

    } = description[0]

    return ( 
        <div className={styles.main}>
            <text className={styles.title}>
                {description[0].title}
            </text>

            <div className={styles.cards_container}>
                <PersonalCard name={employee} job={job} />
                <PersonalCard name={employee2} job={job2} />
                <PersonalCard name={employee3} job={job3} />
                <PersonalCard name={employee4} job={job4} />
                <PersonalCard name={employee5} job={job5} />
                <PersonalCard name={employee6} job={job6} />
                <PersonalCard name={employee7} job={job7} />
                <PersonalCard name={employee8} job={job8} />
                <PersonalCard name={employee9} job={job9} />
                <PersonalCard name={employee10} job={job10} />
            </div>
        </div>
     );
}
 
export default Container3;