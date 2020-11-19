import styles from './TokenSmallCard.module.css'

const TokenSmallCard = ({ title, subtitle, colored }) => {

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
        <div className={styles.card}>
            <p className={`${styles.title} lg:text-4xl lg:w-40`}>
                {formattedText(title, colored)}
            </p>

            <p className={`${styles.subtitle} lg:text-4xl lg:w-44`}>
                {subtitle}
            </p>

        </div>
     );
}
 
export default TokenSmallCard;