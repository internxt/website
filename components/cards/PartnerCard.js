import { useEffect, useState } from 'react'
import styles from './PartnerCard.module.css'
import Image from 'next/image'

const PartnerCard = ({ company, bio, bio2, blue, logo, logoW, logoH, image, imageW, imageH }) => {

    const logo = `/image/1440/About/Section 5/${logo}.png`
    const image = `/image/1440/About/Section 5/${image}.png`

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
                <div className={styles.logo_container}>
                    <Image
                        src={url}
                        width={logoW}
                        height={logoH}
                    />
                </div>

                <h1 className={companystyle}>
                    {company}
                </h1>

                <p className={biostyle}>
                    {bio}
                </p>

                <p className={biostyle}>
                    {bio2}
                </p>

                <p className={readmorestyle}>Read more</p>
            </div>

            <div className={styles.image}>
                    <Image
                        src={url}
                        width={imageW}
                        height={imageH}
                    />
            </div>
        </div>
     );
}

export default PartnerCard;