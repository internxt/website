import styles from './Container2.module.css'
import Image from 'next/image'

const Container2 = () => {
    return ( 
        <div data-aos="fade-up" data-aos-duration="1000" className={`${styles.image} sm:p-0 sm:px-8 sm:my-16 lg:px-56 xl:px-56`}>
           <Image src="/images/1440/Prices Individual/Text.webp" width={915} height={898} />
        </div>
     );
}
 
export default Container2;