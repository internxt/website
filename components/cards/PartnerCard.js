import { useEffect, useState } from 'react'
import styles from './PartnerCard.module.css'
import Image from 'next/image'

const PartnerCard = ({ company, bio, bio2, blue, logo, logoW, logoH, image, link, imageW, imageH }) => {

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
        <div className={`${cardstyle} lg:w-8/12 lg:h-90`}>
            <div className={`${styles.content} lg:p-0 lg:pt-8 lg:pl-12`}>
                <div className="w-32">
                    <Image
                        src={logourl}
                        width={logoW}
                        height={logoH}
                    />
                </div>

                <h1 className={`${companystyle} lg:text-2xl lg:my-4`}>
                    {company}
                </h1>

                <p className={`${biostyle} lg:text-13 lg:w-11/12 lg:mb-4 lg:leading-6`}>
                    {bio}
                </p>

                <p className={`${biostyle} lg:text-13 lg:w-11/12 lg:mb-0`}>
                    {bio2}
                </p>

                <a href={link} target="_blank" className={`${readmorestyle} lg:text-sm lg:mb-6 xl:mb-6`}>Read more</a>
            </div>

            <div className="w-6/12 overflow-hidden">
                <img src={imageurl} className="object-contain" />
            </div>
        </div>
     );
}

export default PartnerCard;