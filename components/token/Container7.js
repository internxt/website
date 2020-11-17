import styles from './Container7.module.css'
import descriptions from '../../assets/token-descriptions.json'

const Container7 = ({ id, data }) => {

    // Filter container specific descriptions
    const description = descriptions.filter( desc => desc.id === id)

    // Check if a number is odd
    const isOdd = ( num ) => {
        return num % 2 == 1;
    }

    // Set the background color of the container depending on its id
    const background = isOdd(id) ? 'container grey' : 'container'

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
            <h1 className={styles.title}>
                {description[0].title}
            </h1>

            <div className={styles.cards_container}>
                <div className={styles.card}>
                    <p className={styles.label}>
                        {description[0].label}
                    </p>

                    <p className={styles.data}>
                        ${Math.round((data.quote.EUR.price + Number.EPSILON) * 100) / 100}
                    </p>
                </div>
                
                <div className={styles.card}>
                    <p className={styles.label}>
                        {description[0].label2}
                    </p>

                    <p className={data.quote.EUR.percent_change_24h > 0 ? `${styles.data} ${styles.green}` : `${styles.data} ${styles.red}`}>
                        {Math.round((data.quote.EUR.percent_change_24h + Number.EPSILON) * 100) / 100}%
                    </p>
                </div>
                
                <div className={styles.card}>
                    <p className={styles.label}>
                        {description[0].label3}
                    </p>

                    <p className={data.quote.EUR.percent_change_7d > 0 ? `${styles.data} ${styles.green}` : `${styles.data} ${styles.red}`}>
                        {Math.round((data.quote.EUR.percent_change_7d + Number.EPSILON) * 100) / 100}%
                    </p>
                </div>
                
                <div className={styles.card}>
                    <p className={styles.label}>
                        {description[0].label4}
                    </p>

                    <p className={styles.data}>
                        ${formatNumber(data.quote.EUR.market_cap)}
                    </p>
                </div>
                
                <div className={styles.card}>
                    <p className={styles.label}>
                        {description[0].label5}
                    </p>

                    <p className={`${styles.data} ${styles.blue}`}>$18.2M</p>
                </div>
                
                <div className={styles.card}>
                    <p className={styles.label}>
                        {description[0].label6}
                    </p>

                    <p className={`${styles.data} ${styles.blue}`}>$33.71</p>
                </div>
                
                <div className={styles.card}>
                    <p className={styles.label}>
                        {description[0].label7}
                    </p>

                    <p className={styles.data}>
                        ${formatNumber(data.quote.EUR.volume_24h)}
                    </p>
                </div>
                
                <div className={styles.card}>
                    <p className={styles.label}>
                        {description[0].label8}
                    </p>

                    <p className={styles.data}>
                        {Intl.NumberFormat("en-EN").format(Math.round(data.circulating_supply))}
                    </p>
                </div>
                
                <div className={styles.card}>
                    <p className={styles.label}>
                        {description[0].label9}
                    </p>

                    <p className={styles.data}>
                        {Intl.NumberFormat("en-EN").format(Math.round(data.total_supply))}
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default Container7;