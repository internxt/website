import styles from './Container8.module.css'
import descriptions from '../../assets/token-descriptions.json'
import Image from 'next/image'

const Container8 = ({ id }) => {

    // Filter container specific descriptions
    const description = descriptions.filter( desc => desc.id === id)

    // Check if a number is odd
    const isOdd = ( num ) => {
        return num % 2 == 1;
    }

    // Set the background color of the container depending on its id
    const background = isOdd(id) ? 'container' : 'container grey'

    return ( 
        <div className={background}>
            <div className={styles.images}>
                <div className={styles.left_image}>
                    <Image
                        src="/images/1440/Token/Section 6/Left graph.png"
                        width={1086}
                        height={420}
                    />
                </div>

                <div className={styles.right_image}>
                    <Image
                        src="/images/1440/Token/Section 6/Right graph.png"
                        width={1068}
                        height={420}
                    />
                </div>
            </div>
            
            <h1 className={styles.title}>
                {description[0].title}
            </h1>

            <div className={styles.cards_container}>
                <div className={styles.card}>
                    <Image 
                        src="/images/1440/Token/Section 6/coinbase.png"
                        width={133}
                        height={29}
                    />
                </div>

                <div className={styles.card}>
                    <Image 
                        src="/images/1440/Token/Section 6/cmc.png"
                        width={151}
                        height={75}
                    />
                </div>

                <div className={styles.card}>
                    <Image 
                        src="/images/1440/Token/Section 6/binance.png"
                        width={106}
                        height={78}
                    />
                </div>

                <div className={styles.card}>
                    <Image 
                        src="/images/1440/Token/Section 6/Blockfolio.png"
                        width={140}
                        height={30}
                    />
                </div>
            </div>
        </div>
     );
}
 
export default Container8;