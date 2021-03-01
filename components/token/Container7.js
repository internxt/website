import styles from './Container7.module.css'

const Container7 = ({ id, data, descriptions }) => {
    // Filter container specific descriptions
    const description = descriptions.filter( desc => desc.id === id)

    // Check if a number is odd
    const isOdd = ( num ) => {
        return num % 2 == 1;
    }

    // Set the background color of the container depending on its id
    const background = isOdd(id) ? 'normal_container grey' : 'normal_container'

    const formatNumber = (value) => {
        let newNum = value;
        const suffixes = ["", "K", "M", "B","T"];
        let suffixNum = 0;

        while (newNum >= 1000) {
          newNum /= 1000;
          suffixNum++;
        }
        newNum = newNum.toPrecision(3);
      
        newNum += suffixes[suffixNum];
        return newNum;
      }

    return ( 
        <div className={background}>
            <h1 data-aos="fade-up" data-aos-duration="300" className={`${styles.title} sm:text-4xl sm:my-16 lg:text-4.5xl lg:mt-20`}>
                {description[0].title}
            </h1>

            <div className="grid grid-cols-3 gap-8 sm:grid-cols-1 sm:gap-y-16 lg:mt-12 lg:px-32 xl:gap-24">
                <div data-aos="fade-up" data-aos-duration="300" className={styles.card}>
                    <p className={`${styles.label} lg:text-xss`}>
                        {description[0].label}
                    </p>

                    <p className={`${styles.data} lg:text-4xl lg:mt-4`}>
                        ${Math.round((data.inxtToEUR.data.INXT.quote.EUR.price + Number.EPSILON) * 100) / 100}
                    </p>
                </div>
                
                <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="50" className={styles.card}>
                    <p className={`${styles.label} lg:text-xss`}>
                        {description[0].label2}
                    </p>

                    <p className={data.inxtToEUR.data.INXT.quote.EUR.percent_change_24h > 0 ? `${styles.data} lg:text-4xl lg:mt-4 ${styles.green}` : `${styles.data} lg:text-4xl lg:mt-4 ${styles.red}`}>
                        {data.inxtToEUR.data.INXT.quote.EUR.percent_change_24h > 0 ? <span>+</span> : null}{Math.round((data.inxtToEUR.data.INXT.quote.EUR.percent_change_24h + Number.EPSILON) * 100) / 100}%
                    </p>
                </div>
                
                <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="100" className={styles.card}>
                    <p className={`${styles.label} lg:text-xss`}>
                        {description[0].label3}
                    </p>

                    <p className={data.inxtToEUR.data.INXT.quote.EUR.percent_change_7d > 0 ? `${styles.data} lg:text-4xl lg:mt-4 ${styles.green}` : `${styles.data} lg:text-4xl lg:mt-4 ${styles.red}`}>
                        {data.inxtToEUR.data.INXT.quote.EUR.percent_change_24h > 0 ? <span>+</span> : null}{Math.round((data.inxtToEUR.data.INXT.quote.EUR.percent_change_7d + Number.EPSILON) * 100) / 100}%
                    </p>
                </div>
                
                <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="150" className={styles.card}>
                    <p className={`${styles.label} lg:text-xss`}>
                        {description[0].label4}
                    </p>

                    <p className={`${styles.data} lg:text-4xl lg:mt-4`}>
                        ${formatNumber(data.inxtToEUR.data.INXT.quote.EUR.market_cap)}
                    </p>
                </div>
                
                <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="200" className={styles.card}>
                    <p className={`${styles.label} lg:text-xss`}>
                        {description[0].label5}
                    </p>

                    <p className={`${styles.data} lg:text-4xl lg:mt-4 ${styles.blue}`}>$18.2M</p>
                </div>
                
                <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="250" className={styles.card}>
                    <p className={`${styles.label} lg:text-xss`}>
                        {description[0].label6}
                    </p>

                    <p className={`${styles.data} lg:text-4xl lg:mt-4 ${styles.blue}`}>$33.71</p>
                </div>
                
                <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="300" className={styles.card}>
                    <p className={`${styles.label} lg:text-xss`}>
                        {description[0].label7}
                    </p>

                    <p className={`${styles.data} lg:text-4xl lg:mt-4`}>
                        ${formatNumber(data.inxtToEUR.data.INXT.quote.EUR.volume_24h)}
                    </p>
                </div>
                
                <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="350" className={styles.card}>
                    <p className={`${styles.label} lg:text-xss`}>
                        {description[0].label8}
                    </p>

                    <p className={`${styles.data} lg:text-4xl lg:mt-4`}>
                        {Intl.NumberFormat("en-EN").format(Math.round(data.inxtToEUR.data.INXT.circulating_supply))}
                    </p>
                </div>
                
                <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="400" className={styles.card}>
                    <p className={`${styles.label} lg:text-xss`}>
                        {description[0].label9}
                    </p>

                    <p className={`${styles.data} lg:text-4xl lg:mt-4`}>
                        {Intl.NumberFormat("en-EN").format(Math.round(data.inxtToEUR.data.INXT.total_supply))}
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default Container7;