import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './TopBar.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

const TopBar = () => {

    const router = useRouter()
    const currentPath = router.pathname
    const [ color, setColor ] = useState('')
    
    useEffect(() => {
        console.log('-----', currentPath == '/about' ? 'yes' : 'no')
        currentPath == '/about' ? setColor(`text-white`) : null
    }, [])

    return ( 
        <Navbar className="sm:flex-row-reverse sm:pl-4 sm:pt-1" expand="md">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Brand className="md:hidden lg:hidden xl:hidden" href="/"><img src="/images/1440/Footer/Internxt.png" className={`${styles.brand} sm:w-28`} /></Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="w-full justify-between sm:pt-8 sm:items-center sm:p-0 lg:relative lg:h-12 lg:p-0 xl:relative xl:h-16 xl:p-0">
                    <Link href="/">
                        <img className="block object-contain sm:hidden md:w-28 lg:w-28 xl:w-32" src="/images/1440/Footer/Internxt.png" />
                    </Link>

                    <div className={`${styles.center} flex flex-row sm:flex-col sm:p-0`} >
                        <Link href="/drive">
                            <a className={router.pathname === '/' ? `${styles.active_link} sm:mb-16 sm:text-xl lg:text-sm` : `${styles.nonactive_link} sm:mb-16 sm:text-xl lg:text-sm`}>Drive</a>
                        </Link>

                        <Link href="/photos">
                            <a className={router.pathname === '/photos' ? `${styles.active_link} sm:mb-16 sm:text-xl lg:text-sm` : `${styles.nonactive_link} sm:mb-16 sm:text-xl lg:text-sm`}>Photos</a>
                        </Link>

                        <Link href="/send">
                            <a className={router.pathname === '/send' ? `${styles.active_link} sm:mb-16 sm:text-xl lg:text-sm` : `${styles.nonactive_link} sm:mb-16 sm:text-xl lg:text-sm`}>Send</a>
                        </Link>

                        <Link href="/pricing">
                            <a className={router.pathname === '/pricing' ? `${styles.active_link} sm:mb-16 sm:text-xl lg:text-sm` : `${styles.nonactive_link} sm:mb-16 sm:text-xl lg:text-sm`}>Pricing</a>
                        </Link>

                        <Link href="/about">
                            <a  className={router.pathname === '/about' ? `${styles.active_link} sm:mb-16 sm:text-xl lg:text-sm` : `${styles.nonactive_link} sm:mb-16 sm:text-xl lg:text-sm`}>About</a>
                        </Link>

                        <a href="https://drive.internxt.com/login" target="_blank" className={`${styles.nonactive_link} sm:mb-16 sm:text-xl lg:hidden xl:hidden`}>Sign in</a>

                        <a href="https://drive.internxt.com/new" target="_blank" className={`${styles.nonactive_link} sm:mb-16 sm:text-xl lg:hidden xl:hidden`}>Get started</a>
                    </div>

                    <div className={`${styles.links} sm:hidden`}>
                        <a href="https://drive.internxt.com/login" target="_blank" className={`${styles.nonactive_link} m-0 lg:text-sm`}>Sign in</a>
                        <a href="https://drive.internxt.com/new" target="_blank"><img src="/images/1440/Footer/button.png" className={`${styles.get_started}`}/></a>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        /* <header>
            <Link href="/" >
                <div className={`${styles.logo} lg:w-32 lg:px-4 xl:w-28`}>
                    <Image 
                        src="/images/1440/Footer/Internxt.png"
                        alt="INTERXT logo"
                        width={298}
                        height={32}
                    />
                </div>
            </Link>

            <div>
                <Link href="/">
                    <a className={router.pathname === '/' ? `${styles.active_link} lg:text-sm` : `${styles.nonactive_link} lg:text-sm`}>Drive</a>
                </Link>

                <Link href="/photos">
                    <a className={router.pathname === '/photos' ? `${styles.active_link} lg:text-sm` : `${styles.nonactive_link}  lg:text-sm`}>Photos</a>
                </Link>
                
                <a href="https://send.internxt.com/" className={`${styles.nonactive_link}  lg:text-sm`}>Send</a>
                
                <Link href="/prices">
                    <a className={router.pathname === '/pricing' ? `${styles.active_link} lg:text-sm` : `${styles.nonactive_link}  lg:text-sm`}>Pricing</a>
                </Link>

                <Link href="/about">
                    <a  className={router.pathname === '/about' ? `${styles.active_link} lg:text-sm` : `${styles.nonactive_link}  lg:text-sm`}>About</a>
                </Link>

                <Link href="/token">
                    <a  className={router.pathname === '/token' ? `${styles.active_link} lg:text-sm` : `${styles.nonactive_link}  lg:text-sm`}>Token</a>
                </Link>

                <Link href="/core">
                    <a  className={router.pathname === '/core' ? `${styles.active_link} lg:text-sm` : `${styles.nonactive_link}  lg:text-sm`}>Core</a>
                </Link>
            </div>

            <div className={styles.links}>
                <a className={`${styles.nonactive_link} lg:text-sm`}>Sign in</a>
                <a className={`${styles.button} lg:h-8`}><p className={`${styles.button_text} lg:text-sm`}>Get started</p></a>
            </div>
        </header> */
     );
}

export default TopBar;