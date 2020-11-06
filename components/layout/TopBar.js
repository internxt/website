import styles from './TopBar.module.css'
import Link from 'next/link'

const TopBar = () => {
    return ( 
        <header>
            <div className={styles.links}>
                <Link href="/" ><a>INTERNXT</a></Link>
            </div>

            <div className={styles.links}>
                <Link href="/"><a className={styles.link}>Internxt Drive</a></Link>

                <Link href="/prices"><a className={styles.link}>Pricing</a></Link>

                <Link href="/about-us"><a className={styles.link}>About</a></Link>

                <Link href="/"><a className={styles.link}>More</a></Link>
            </div>

            <div className={styles.links}>
                <a className={styles.link}>Sign in</a>
                <a className={styles.link}>Get started</a>
            </div>
        </header>
     );
}
 
export default TopBar;