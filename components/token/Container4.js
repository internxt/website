import styles from './Container4.module.css'
import descriptions from '../../assets/token-descriptions.json'
import StakeCard from '../cards/StakeCard'
import Image from 'next/image'

const Container4 = ({ id }) => {

    // Filter container specific descriptions
    const description = descriptions.filter( desc => desc.id === id)

    // Check if a number is odd
    const isOdd = ( num ) => {
        return num % 2 == 1;
    }

    // Set the background color of the container depending on its id
    const background = isOdd(id) ? 'container' : 'container grey'

    // Esta funcion cambiara el color de una determinada cadena de texto
    const formattedText = (label, value) => {
        if (!value) {
            return label;
        }
        return (<span>
            { label.split(value)
            .reduce((prev, current, i) => {
                if (!i) {
                return [current];
                }
                return prev.concat(<span className={styles.colored_text} key={value + current}>{ value }</span>, current);
            }, [])
            }
        </span>);
    };

    return ( 
        <div className={background}>

            <div className={styles.image_container}>
                <div className={styles.blue_coin}>
                    <Image
                        src="/images/1440/Token/Section 4/Coin blue.png"
                        width={64}
                        height={60}
                    />
                </div>
                
                <div className={styles.purple_coin}>
                    <Image
                        src="/images/1440/Token/Section 4/Coin purple.png"
                        width={62}
                        height={59}
                    /> 
                </div>
            </div>

           <h1 className={styles.title}>
               {formattedText(description[0].title, description[0].colored)}
           </h1>

           <p className={styles.subtitle}>
               {description[0].subtitle}
           </p>

           <p className={styles.subtitle}>
               {description[0].subtitle2}
           </p>

           <div className={styles.card_container}>
               <StakeCard bundle="Starter" percentage="5" inxtQty="0 - 1000 INXT" />
               <StakeCard bundle="Professional" percentage="10" inxtQty="1000 - 10,000 INXT" />
               <StakeCard bundle="Expert" percentage="20" inxtQty="Above 10,000 INXT" />
           </div>

           <p className={styles.info}>
               {description[0].subtitle3}
           </p>

           <p className={styles.info}>
               {description[0].subtitle4}
           </p>

           <a className={styles.link}>
               {description[0].link}
           </a>
        </div>
    );
}
 
export default Container4;