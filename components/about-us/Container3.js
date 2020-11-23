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
            <text className={`${styles.title} lg:text-5xl`}>
                {description[0].title}
            </text>

            <div className={`grid grid-cols-6 gap-4 lg:py-12 xl:mt-16`}>
                <PersonalCard name={employee} job={job} picture="Fran" />
                <PersonalCard name={employee2} job={job2} picture="Alberto" />
                <PersonalCard name={employee3} job={job3} picture="Ale" />
                <PersonalCard name={employee4} job={job4} picture="Ald" />
                <PersonalCard name={employee5} job={job5} picture="Joan" />
                <PersonalCard name={employee6} job={job6} picture="Desi" />
                <PersonalCard name={employee7} job={job7} picture="Elena" />
                <PersonalCard name={employee8} job={job8} picture="Joan" />
                <PersonalCard name={employee9} job={job9} picture="Ain" />
                <PersonalCard name={employee10} job={job10} picture="Emi" />
            </div>
        </div>
     );
}
 
export default Container3;