import styles from './Container3.module.css'
import PersonalCard from '../cards/PersonalCard'

const Container3 = ({ id, descriptions }) => {

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
        employee10, job10,
        employee11, job11,
        employee12, job12,
        employee13, job13,
        employee14, job14,
        employee15, job15,
        employee16, job16
    } = description[0]

    return ( 
        <div className={`${styles.main} sm:pt-16`}>
            <h1 className={`${styles.title} sm:text-4xl lg:text-5xl`}>
                {description[0].title}
            </h1>

            <div className={`grid grid-cols-6 gap-y-6 gap-x-3 sm:grid-cols-1 sm:mt-12 lg:py-12 xl:mt-16`}>
                <div data-aos="fade-up" data-aos-duration="300" className="col-span-2">
                    <PersonalCard name={employee} job={job} picture="Fran" />
                </div>

                <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="50" className="col-span-2">
                    <PersonalCard name={employee2} job={job2} picture="Alberto" />
                </div>

                <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="100" className="col-span-2">
                    <PersonalCard name={employee3} job={job3} picture="Ale" />
                </div>

                <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="150" className="col-span-2">
                    <PersonalCard name={employee4} job={job4} picture="Ald" />
                </div>

                <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="200" className="col-span-2">
                    <PersonalCard name={employee5} job={job5} picture="Joan" />
                </div>

                <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="250" className="col-span-2">
                    <PersonalCard name={employee6} job={job6} picture="Desi" />
                </div>

                <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="350" className="col-span-2">
                    <PersonalCard name={employee8} job={job8} picture="Zhihao" />
                </div>

                <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="400" className="col-span-2">
                    <PersonalCard name={employee11} job={job11} picture="Sergio" />
                </div>
 
                <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="500" className="col-span-2">
                    <PersonalCard name={employee16} job={job16} picture="Aldemaro"/>
                </div>

                <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="550" className="col-span-2">
                    <PersonalCard name={employee12} job={job12} picture="Vicente" />
                </div>

                <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="300" className="col-span-2">
                    <PersonalCard name={employee7} job={job7} picture="Oleksandra" />
                </div>

                <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="450" className="col-span-2">
                    <PersonalCard name={employee9} job={job9} picture="Ain" />
                </div>

                <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="500" className="col-span-2">
                    <PersonalCard name={employee10} job={job10} picture="Cadi" />
                </div>

                <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="500" className="col-span-2">
                    <PersonalCard name={employee15} job={job15} picture="Mauricio" />
                </div>

                <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="500" className="col-span-2">
                    <PersonalCard name={employee14} job={job14} picture="Izascun" />
                </div>

                <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="500" className="col-span-2">
                    <PersonalCard name={employee13} job={job13} picture="Ana" />
                </div>
            </div>
        </div>
     );
}
 
export default Container3;