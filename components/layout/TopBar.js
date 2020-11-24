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
        <Navbar expand="sm">
            <Navbar.Brand href="/">INTERNXT</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/photos">Photos</Nav.Link>
                    <Nav.Link href="/">Send</Nav.Link>
                    <Nav.Link href="/pricing">Pricing</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/token">Token</Nav.Link>
                    <Nav.Link href="/core">Core</Nav.Link>
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
                    <a className={router.pathname === '/' ? `${styles.active_link} lg:text-sm` : `${styles.nonactive_link} ${color} lg:text-sm`}>Drive</a>
                </Link>

                <Link href="/photos">
                    <a className={router.pathname === '/photos' ? `${styles.active_link} lg:text-sm` : `${styles.nonactive_link}  ${color} lg:text-sm`}>Photos</a>
                </Link>
                
                <a href="https://send.internxt.com/" className={`${styles.nonactive_link}  ${color} lg:text-sm`}>Send</a>
                
                <Link href="/prices">
                    <a className={router.pathname === '/pricing' ? `${styles.active_link} lg:text-sm` : `${styles.nonactive_link}  ${color} lg:text-sm`}>Pricing</a>
                </Link>

                <Link href="/about">
                    <a  className={router.pathname === '/about' ? `${styles.active_link} lg:text-sm` : `${styles.nonactive_link}  ${color} lg:text-sm`}>About</a>
                </Link>

                <Link href="/token">
                    <a  className={router.pathname === '/token' ? `${styles.active_link} lg:text-sm` : `${styles.nonactive_link}  ${color} lg:text-sm`}>Token</a>
                </Link>

                <Link href="/core">
                    <a  className={router.pathname === '/core' ? `${styles.active_link} lg:text-sm` : `${styles.nonactive_link}  ${color} lg:text-sm`}>Core</a>
                </Link>
            </div>

            <div className={styles.links}>
                <a className={`${styles.nonactive_link} ${color} lg:text-sm`}>Sign in</a>
                <a className={`${styles.button} lg:h-8`}><p className={`${styles.button_text} lg:text-sm`}>Get started</p></a>
            </div>
        </header> */
     );
}

export default TopBar;