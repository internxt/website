import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './TopBar.module.css'
import { useEffect, useState } from 'react'
import { Nav, Navbar } from 'react-bootstrap'

export default function TopBar(props) {

    const router = useRouter()

    return (
        <Navbar className="sm:flex-row-reverse sm:pl-4 sm:pt-1" expand="md">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Brand className="md:hidden lg:hidden xl:hidden" href="/"><img src="/images/1440/Footer/Internxt.webp" className={`${styles.brand} sm:w-28`} /></Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="w-full justify-between sm:pt-8 sm:items-center sm:p-0 lg:relative lg:h-12 lg:p-0 xl:relative xl:h-16 xl:p-0">
                    <Link href="/">
                        <img className="block object-contain cursor-pointer sm:hidden md:w-28 lg:w-28 xl:w-28" src="/images/1440/Footer/Internxt.webp" />
                    </Link>

                    {!props.hideMenuItems &&
                        <div className={`${styles.center} flex flex-row sm:flex-col sm:p-0`} >
                            <Link href="/">
                                <a className={router.pathname === '/' ? `${styles.active_link} sm:mb-16 sm:text-xl lg:text-sm` : `${styles.nonactive_link} sm:mb-16 sm:text-xl lg:text-sm`}>Drive</a>
                            </Link>

                            <Link href="/photos">
                                <a className={router.pathname === '/photos' ? `${styles.active_link} sm:mb-16 sm:text-xl lg:text-sm` : `${styles.nonactive_link} sm:mb-16 sm:text-xl lg:text-sm`}>Photos</a>
                            </Link>

                            <a href="https://send.internxt.com" target="_blank" className={router.pathname === '/send' ? `${styles.active_link} sm:mb-16 sm:text-xl lg:text-sm` : `${styles.nonactive_link} sm:mb-16 sm:text-xl lg:text-sm`}>Send</a>

                            <Link href="/pricing">
                                <a className={router.pathname === '/pricing' ? `${styles.active_link} sm:mb-16 sm:text-xl lg:text-sm` : `${styles.nonactive_link} sm:mb-16 sm:text-xl lg:text-sm`}>Pricing</a>
                            </Link>

                            <Link href="/about">
                                <a className={router.pathname === '/about' ? `${styles.active_link} sm:mb-16 sm:text-xl lg:text-sm` : `${styles.nonactive_link} sm:mb-16 sm:text-xl lg:text-sm`}>About</a>
                            </Link>

                            <a href="https://drive.internxt.com/login" target="_blank" className={`${styles.nonactive_link} sm:mb-16 sm:text-xl lg:hidden xl:hidden`}>Sign in</a>

                            <a href="https://drive.internxt.com/new" target="_blank" className={`${styles.nonactive_link} sm:mb-16 sm:text-xl lg:hidden xl:hidden`}>Get started</a>
                        </div>
                    }

                    <div className={`${styles.links} sm:hidden`}>
                        {props.hideSignIn
                            ? <></>
                            : <a href="https://drive.internxt.com/login" target="_blank" className={`${styles.nonactive_link} m-0 lg:text-sm`}>Sign in</a>}

                        <a
                            {...props.signUpAction ?
                                {
                                    onClick: props.signUpAction,
                                    href: '#'
                                } :
                                {
                                    href: 'https://drive.internxt.com/new',
                                    target: '_blank'
                                }}
                            className={styles.button}>
                            <p className={styles.button_text}>{props.signUpText ? props.signUpText : 'Sign up'}</p>
                        </a>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
