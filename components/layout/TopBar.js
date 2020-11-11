import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './TopBar.module.css'

const TopBar = () => {

    const router = useRouter()

    return ( 
        <header>
            <Link href="/" ><a className={styles.logo}>INTERNXT</a></Link>

            <div >
                <Link href="/"><a className={router.pathname === '/' ? styles.active_link : styles.nonactive_link}>Internxt Drive</a></Link>

                <Link href="/prices"><a className={router.pathname === '/prices' ? styles.active_link : styles.nonactive_link}>Pricing</a></Link>

                <Link href="/about-us"><a  className={router.pathname === '/about-us' ? styles.active_link : styles.nonactive_link}>About</a></Link>

                <Link href="/token"><a  className={router.pathname === '/token' ? styles.active_link : styles.nonactive_link}>Token</a></Link>
            </div>

            <div className={styles.links}>
                <a className={styles.nonactive_link}>Sign in</a>
                <a className={styles.button}><text className={styles.button_text}>Get started</text></a>
            </div>
        </header>
     );
}
 
export default TopBar;