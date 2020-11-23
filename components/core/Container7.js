import styles from './Container7.module.css'
import descriptions from '../../assets/core-descriptions.json'
import Faq from 'react-faq-component';

const Container7 = ({ id }) => {

    // Filter container specific descriptions
    const description = descriptions.filter( desc => desc.id === id)

    // Check if a number is odd
    const isOdd = ( num ) => {
        return num % 2 == 1;
    }

    // Set the background color of the container depending on its id
    const background = isOdd(id) ? 'container grey' : 'container'

    const config = {
        animate: true
    }

    return ( 
        <div className={background}>
            <h1 className={styles.title}>
                {description[0].title}
            </h1>

            <div className="xl:w-9/12 xl:mb-32">
                <Faq 
                    data={description[0].faq} 
                    styles={{
                        bgColor: "transparent"
                    }} 
                    config={config} />
            </div>
        </div>
    );
}

export default Container7;