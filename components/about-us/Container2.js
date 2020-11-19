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
            <h1 className={`${styles.assosciated} lg:text-sm lg:mb-12`}>
                {description[0].title}
            </h1>

            <div className={`${styles.assosciated_logos} lg:mb-12`}>
                <div className="flex items-center lg:w-32">
                    <Image
                        src="/images/1440/About/Section 2/lanzadera.png"
                        width={177}
                        height={23}
                    />
                </div>
                
                <div className="flex items-center lg:w-20">
                    <Image
                        src="/images/1440/About/Section 2/stripe.png"
                        width={104}
                        height={43}
                    />
                </div>

                <div className="flex items-center lg:w-16">
                    <Image
                        src="/images/1440/About/Section 2/500.png"
                        width={71}
                        height={71}
                    />
                </div>

                <div className="flex items-center lg:w-48">
                    <Image
                        src="/images/1440/About/Section 2/venture.png"
                        width={235}
                        height={42}
                    />
                </div>
                
                <div className="flex items-center lg:w-32">
                    <Image
                        src="/images/1440/About/Section 2/blackberry.png"
                        width={179}
                        height={31}
                    />
                </div>

                <div className="flex items-center lg:w-32">
                    <Image
                        src="/images/1440/About/Section 2/combinator.png"
                        width={160}
                        height={34}
                    />
                </div>
                
            </div>

            <div className={`${styles.subtitle} lg:text-xl lg:w-120 lg:mb-16`}>
                {formattedText(description[0].subtitle, description[0].colored)}
            </div>

            <div className={`grid grid-cols-6 gap-4 lg:px-32`}>
                <div className={`col-span-2`}>
                    <Image
                        src="/images/1440/About/Section 2/programming.png"
                        width={365}
                        height={417}
                    />
                </div>
                

                <div className={`col-span-4`}>
                    <Image
                        src="/images/1440/About/Section 2/team.png"
                        width={743}
                        height={417}
                    />
                </div>
                

                <div className={`col-span-2`}>
                  <Image
                    src="/images/1440/About/Section 2/stock photo.png"
                    width={365}
                    height={322}
                />  
                </div>
                

                <div className={`col-span-2`}>
                    <Image
                        src="/images/1440/About/Section 2/angels.png"
                        width={365}
                        height={332}
                    />
                </div>
                

                <div className={`col-span-2`}>
                    <Image
                        src="/images/1440/About/Section 2/fran sitting.png"
                        width={365}
                        height={332}
                    />
                </div>
                
            </div>
            
            <p className={`lg:text-xs lg:mt-4`}>
                {description[0].subtitle2}
            </p>
        </div>
     );
}
 
export default Container2;