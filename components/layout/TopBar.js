import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './TopBar.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const TopBar = () => {

    const router = useRouter()
    const currentPath = router.pathname
    const [ color, setColor ] = useState('')
    
    useEffect(() => {
        console.log('-----', currentPath == '/about' ? 'yes' : 'no')
        currentPath == '/about' ? setColor(`text-white`) : null
    }, [])

    return ( 
        <header>
            <Link href="/" >
                <div className={`${styles.logo} lg:w-32 lg:px-4`}>
                    <Image 
                        src="/images/1440/Footer/Internxt.png"
                        alt="INTERXT logo"
                        width={153}
                        height={16}
                        quality={100}
                    />
                </div>
            </Link>

            <div>
                <Link href="/">
                    <a className={router.pathname === '/' ? `${styles.active_link} lg:text-sm` : `${styles.nonactive_link} ${color} lg:text-sm`}>Drive</a>
                </Link>

                <Link href="/photos">
                    <a className={router.pathname === '/photos' ? `${styles.active_link} lg:text-sm` : `${styles.nonactive_link}  ${color} lg:text-sm`}>Photos</a>
                </Link>
                
                <Link href="/">
                    <a className={router.pathname === '/send' ? `${styles.active_link} lg:text-sm` : `${styles.nonactive_link}  ${color} lg:text-sm`}>Send</a>
                </Link>
                
                <Link href="/prices">
                    <a className={router.pathname === '/prices' ? `${styles.active_link} lg:text-sm` : `${styles.nonactive_link}  ${color} lg:text-sm`}>Pricing</a>
                </Link>

                <Link href="/about">
                    <a  className={router.pathname === '/about' ? `${styles.active_link} lg:text-sm` : `${styles.nonactive_link}  ${color} lg:text-sm`}>About</a>
                </Link>

                <Link href="/token">
                    <a  className={router.pathname === '/token' ? `${styles.active_link} lg:text-sm` : `${styles.nonactive_link}  ${color} lg:text-sm`}>Token</a>
                </Link>
            </div>

            <div className={styles.links}>
                <a className={`${styles.nonactive_link} ${color} lg:text-sm`}>Sign in</a>
                <a className={`${styles.button} lg:h-8`}><p className={`${styles.button_text} lg:text-sm`}>Get started</p></a>
            </div>
        </header>
     );
}

export default TopBar;