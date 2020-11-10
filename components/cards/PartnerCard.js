import { useEffect, useState } from 'react'
import styles from './PartnerCard.module.css'

const PartnerCard = ({ company, bio, bio2, blue }) => {

    const [ cardstyle, setCardstyle] = useState(`${styles.PartnerCard}`)
    const [ companystyle, setCompanystyle] = useState(`${styles.company}`)
    const [ biostyle, setBiostyle] = useState(`${styles.bio}`)
    const [ readmorestyle, setReadmorestyle] = useState(`${styles.read_more}`)

    const changeClass = () => {
        if ( !blue ) {
            setCardstyle( `${styles.PartnerCard} ${styles.reverse}` )
            setCompanystyle( `${styles.company} ${styles.text_black}` )
            setBiostyle( `${styles.bio} ${styles.text_black}` )
            setReadmorestyle( `${styles.read_more} ${styles.text_black}` )
        }
    }

    useEffect(() => {
        changeClass()
    }, [])

    return ( 
        <div className={cardstyle}>
            <div className={styles.content}>
                <text>Blackberry</text>

                <text className={companystyle}>
                    {company}
                </text>

                <text className={biostyle}>
                    {bio}
                </text>

                <text className={biostyle}>
                    {bio2}
                </text>

                <text className={readmorestyle}>Read more</text>
            </div>

            <div>
                esto es la imagen
            </div>
        </div>
     );
}

export default PartnerCard;