import styles from './Container2.module.css'
import descriptions from '../../assets/about-us-descriptions.json'
import Image from 'next/image'

const Container2 = ({ id }) => {
    
    const description = descriptions.filter( desc => desc.id === id)
    
    // Check if a number is odd
    const isOdd = ( num ) => {
        return num % 2 == 1;
    }

    // Set the background color of the container depending on its id
    const className = isOdd(id) ? 'container' : 'container grey'

    // Esta funcion cambiara el color de una determinada palabra de texto
    const formattedText = (text, values) => { 
        const regex = new RegExp(/\[\[(.*?)\]\]/);

        if (!values.length)
            return text;
    
        return (<div>
            {text.split(regex)
                .reduce((prev, current, i) => {
                    if (!i)
                        return [current];
    
                    return prev.concat(
                        values.includes(current)  ?
                            <span key={i + current} className={`${styles.colored}`}>
                                {current}
                            </span>
                            : current
                    );
                }, [])}
        </div>);
    };

    return ( 
        <div className={styles.main}>
            <h1 className={styles.assosciated}>
                {description[0].title}
            </h1>

            <div className={styles.assosciated_logos}>
                <Image
                    src="/images/1440/About/Section 2/lanzadera.png"
                    width={177}
                    height={23}
                />

                <Image
                    src="/images/1440/About/Section 2/stripe.png"
                    width={104}
                    height={43}
                />

                <Image
                    src="/images/1440/About/Section 2/500.png"
                    width={71}
                    height={71}
                />

                <Image
                    src="/images/1440/About/Section 2/venture.png"
                    width={235}
                    height={42}
                />
                
                <Image
                    src="/images/1440/About/Section 2/blackberry.png"
                    width={179}
                    height={31}
                />

                <Image
                    src="/images/1440/About/Section 2/combinator.png"
                    width={160}
                    height={34}
                />
                
            </div>

            <div className={styles.subtitle}>
                {formattedText(description[0].subtitle, description[0].colored)}
            </div>

            <div className={styles.photos}>
                <div className={styles.photo}>
                    <Image
                        src="/images/1440/About/Section 2/programming.png"
                        width={365}
                        height={417}
                    />
                </div>
                

                <div className={styles.photo}>
                    <Image
                        src="/images/1440/About/Section 2/team.png"
                        width={743}
                        height={417}
                    />
                </div>
                

                <div className={styles.photo}>
                  <Image
                    src="/images/1440/About/Section 2/stock photo.png"
                    width={365}
                    height={322}
                />  
                </div>
                

                <div className={styles.photo}>
                    <Image
                        src="/images/1440/About/Section 2/angels.png"
                        width={365}
                        height={332}
                    />
                </div>
                

                <div className={styles.photo}>
                    <Image
                        src="/images/1440/About/Section 2/fran sitting.png"
                        width={365}
                        height={332}
                    />
                </div>
                
            </div>
            
            <p className={styles.subtitle2}>
                {description[0].subtitle2}
            </p>
        </div>
     );
}
 
export default Container2;