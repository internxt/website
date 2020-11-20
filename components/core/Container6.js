import styles from './Container6.module.css'
import descriptions from '../../assets/core-descriptions.json'

const Container6 = ({ id }) => {

    const description = descriptions.filter( desc => desc.id === id)

    return ( 
        <div className={styles.background}>
            <h1 className={`${styles.title}`}>
                {description[0].title}
            </h1>

            <div className={`grid grid-cols-4 gap-x-6`}>
                <div className={`${styles.input_container}`}>
                    <label className={`${styles.label}`}>
                        {description[0].label}
                    </label>

                    <div className={`${styles.placeholders}`}>
                        <input 
                            type="number"
                            className={`${styles.input}`}
                        />

                        <div className={`${styles.type_container}`}>
                            <p className={`${styles.type}`}>
                                GB
                            </p>
                        </div>
                    </div>
                </div>

                <div className={`${styles.input_container}`}>
                    <label className={`${styles.label}`}>
                        {description[0].label}
                    </label>

                    <div className={`${styles.placeholders}`}>
                        <input 
                            type="number"
                            className={`${styles.input}`}
                        />

                        <div className={`${styles.type_container}`}>
                            <p className={`${styles.type}`}>
                                INXT
                            </p>
                        </div>
                    </div>
                </div>

                <div className={`${styles.input_container}`}>
                    <label className={`${styles.label}`}>
                        {description[0].label}
                    </label>

                    <div className={`${styles.placeholders}`}>
                        <input 
                            type="number"
                            className={`${styles.input}`}
                        />

                        <div className={`${styles.type_container}`}>
                            <p className={`${styles.type}`}>
                                EUR
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <a className={`${styles.link}`}>
                {description[0].link}
            </a>
        </div>
     );
}
 
export default Container6;