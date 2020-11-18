import { useEffect, useState } from 'react'
import styles from './PartnerCard.module.css'
import Image from 'next/image'

const PartnerCard = ({ company, bio, bio2, blue, logo, logoW, logoH, image, imageW, imageH }) => {

    const logourl = `/images/1440/About/Section 5/${logo}.png`
    const imageurl = `/images/1440/About/Section 5/${image}.png`

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
        <div className={`${cardstyle} lg:h-96`}>
            <div className={styles.content}>
                <div>
                    <Image
                        src={logourl}
                        width={logoW}
                        height={logoH}
                    />
                </div>

                <h1 className={`${companystyle} lg:text-2xl`}>
                    {company}
                </h1>

                <p className={`${biostyle} lg:text-sm lg:mb-4`}>
                    {bio}
                </p>

                <p className={`${biostyle} lg:text-sm lg:mb-0`}>
                    {bio2}
                </p>

                <p className={`${readmorestyle} lg:text-sm lg:`}>Read more</p>
            </div>

            <div>
                <Image
                    src={imageurl}
                    width={imageW}
                    height={imageH}
                />
            </div>
        </div>
     );
}

export default PartnerCard;