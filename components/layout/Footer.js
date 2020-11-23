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
                    <p className={`${styles.keep_updated} lg:text-xl lg:w-120`}>Keep me updated about products, news, tips and offers from Internxt.</p>

                    <EmailNewsletter value="Subscribe" />              
                </div>

                <div className={styles.line}></div>

                <div className={`${styles.social_container} lg:pb-12`}>
                    <div className={styles.p_container}>
                        <div className={`${styles.logo} lg:w-32`}>
                            <Image 
                                src="/images/1440/Footer/Internxt.png"
                                alt="INTERXT logo"
                                width={153}
                                height={16}
                                quality={100}
                            />
                        </div>

                        <p className={`${`${styles.p_social} lg:text-xs`} lg:text-xs`}>Copyright &copy; 2020 Internxt</p>
                        <p className={`${`${styles.p_social} lg:text-xs`} lg:text-xs`}>All rights Reserved</p>
                    </div>

                    <div className={styles.p_container}>
                        <h1 className={`${styles.label} lg:text-sm`}>Products</h1>
                        <p className={`${styles.p_social} lg:text-xs`}>Internxt Drive</p>
                        <p className={`${styles.p_social} lg:text-xs`}>Internxt Photos</p>
                        <p className={`${styles.p_social} lg:text-xs`}>Internxt Send</p>
                        <p className={`${styles.p_social} lg:text-xs`}>Internxt Token</p>
                        <p className={`${styles.p_social} lg:text-xs`}>Internxt Core</p>
                    </div>

                    <div className={styles.p_container}>
                        <h1 className={`${styles.label} lg:text-sm`}>Company</h1>
                        <p className={`${styles.p_social} lg:text-xs`}>About us</p>
                        <p className={`${styles.p_social} lg:text-xs`}>Pricing</p>
                        <p className={`${styles.p_social} lg:text-xs`}>Contact</p>
                        <p className={`${styles.p_social} lg:text-xs`}>Legals</p>
                    </div>

                    <div className={styles.p_container}>
                        <h1 className={`${styles.label} lg:text-sm`}>Follow us</h1>
                        <p className={`${styles.p_social} lg:text-xs`}>Twitter</p>
                        <p className={`${styles.p_social} lg:text-xs`}>Telegram</p>
                        <p className={`${styles.p_social} lg:text-xs`}>Github</p>
                    </div>

                    <div className={styles.p_container}>
                        <h1 className={`${styles.label} lg:text-sm`}>Join</h1>
                        <p className={`${styles.p_social} lg:text-xs`}>Sign in</p>
                        <p className={`${styles.p_social} lg:text-xs`}>Get started</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;