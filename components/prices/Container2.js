import styles from './Container2.module.css'
import descriptions from '../../assets/prices-descriptions.json'
import Image from 'next/image'

const Container2 = ({ id }) => {

    const description = descriptions.filter( desc => desc.id === id)

    return ( 
        <div className={`${styles.image} lg:px-56`}>
           <Image src="/images/1440/Prices Individual/Text.png" width={915} height={989} />
        </div>
     );
}
 
export default Container2;