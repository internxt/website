import Image from 'next/image'
import EmailNewsletter from '../EmailNewsletter'
import styles from './Footer.module.css'
import Link from 'next/link'

const Footer = () => {
    return ( 
        <footer>
            <div className={styles.first_half}>
                <div className={styles.title_container}>
                    <h1 className={`${styles.title} lg:text-4xl`}>A family of privacy focused services.</h1>

                    <h1 className={`${styles.title} lg:text-4xl`}>Start free with 2GB.</h1>

                    <div className={styles.image}>
                        <Image src={'/images/1440/Footer/Line.png'} width={68} height={9} />
                    </div>
                </div>

                <div className={`${styles.get_started_container} lg:mt-10`}>
                    
                    <a href="http://drive.internxt.com/new" className={`${styles.button} ${styles.text_button} lg:text-sm lg:h-8 lg:w-32`}>Get started</a>
                    
                    <Link href="/prices">
                        <a className={`${styles.learn_more} lg:text-xss lg:mt-1`}>Learn more</a>
                    </Link>
                </div>
            </div>

            <div className={styles.second_half}>
                <div className={styles.signup_container}>
                    <p className={`${styles.keep_updated} sm:min-w-0 lg:text-xl lg:w-120`}>Keep me updated about products, news, tips and offers from Internxt.</p>

                    <EmailNewsletter value="Subscribe" />              
                </div>

                <div className={styles.line}></div>

                <div className={`${styles.social_container} lg:pb-12`}>
                    <div className={styles.p_container}>
                        <div className={`${styles.logo} lg:w-28 xl:w-36 xl:mt-2`}>
                            <Image 
                                src="/images/1440/Footer/Internxt.png"
                                alt="INTERXT logo"
                                width={153}
                                height={16}
                                quality={100}
                            />
                        </div>

                        <p className={`${styles.p_social} lg:text-xs mt-6`}>Copyright &copy; 2020 Internxt</p>
                        <p className={`${styles.p_social} lg:text-xs`}>All rights Reserved</p>
                    </div>

                    <div className={`${styles.p_container} sm:hidden`}>
                        <h1 className={`${styles.label} lg:text-sm`}>Products</h1>

                        <Link href="/drive">
                            <a className={`${styles.p_social} lg:text-xs`}>Internxt Drive</a>
                        </Link>

                        <Link href="/photos">
                            <a className={`${styles.p_social} lg:text-xs`}>Internxt Photos</a>
                        </Link>

                        <Link href="/send">
                            <a className={`${styles.p_social} lg:text-xs`}>Internxt Send</a>
                        </Link>

                        <Link href="/token">
                            <a className={`${styles.p_social} lg:text-xs`}>Internxt Token</a>
                        </Link>

                        <Link href="/core">
                            <a className={`${styles.p_social} lg:text-xs`}>Internxt Core</a>
                        </Link>
                    </div>

                    <div className={`${styles.p_container} sm:hidden`}>
                        <h1 className={`${styles.label} lg:text-sm`}>Company</h1>

                        <Link href="/about">
                            <a className={`${styles.p_social} lg:text-xs`}>About us</a>
                        </Link>

                        <Link href="/prices">
                            <a className={`${styles.p_social} lg:text-xs`}>Pricing</a>
                        </Link>

                        <a href="mailto:hello@internxt.com" target="_blank" className={`${styles.p_social} lg:text-xs`}>Contact</a>
                        
                        <Link href="/legals">
                            <a className={`${styles.p_social} lg:text-xs`}>Legals</a>
                        </Link>
                    </div>

                    <div className={styles.p_container}>
                        <h1 className={`${styles.label} lg:text-sm`}>Follow us</h1>
                        <a href="https://twitter.com/Internxt" target="_blank" className={`${styles.p_social} lg:text-xs`}>Twitter</a>
                        <a href="https://medium.com/internxt" target="_blank" className={`${styles.p_social} lg:text-xs`}>Medium</a>
                        <a href="https://github.com/internxt" target="_blank" className={`${styles.p_social} lg:text-xs`}>Github</a>
                    </div>

                    <div className={styles.p_container}>
                        <h1 className={`${styles.label} lg:text-sm`}>Join</h1>
                        <a href="https://drive.internxt.com/login" target="_blank" className={`${styles.p_social} lg:text-xs`}>Sign in</a>
                        <a href="https://drive.internxt.com/new" target="_blank" className={`${styles.p_social} lg:text-xs`}>Get started</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;