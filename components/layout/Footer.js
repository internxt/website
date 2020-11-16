import Image from 'next/image'
import EmailNewsletter from '../EmailNewsletter'
import styles from './Footer.module.css'

const Footer = () => {
    return ( 
        <>
            <div className={styles.first_half}>
                <div className={styles.title_container}>
                    <h1 className={styles.title}>A family of privacy focused services.</h1>

                    <h1 className={styles.title}>Get started free for 30 days.</h1>

                    <div className={styles.image}>
                        <Image src={'/images/1440/Footer/Line.png'} width={68} height={9} />
                    </div>
                </div>

                <div className={styles.get_started_container}>
                    <button className={styles.button}>
                        <p className={styles.p_button}>Get started</p>
                    </button>

                    <p className={styles.learn_more}>Learn more about Internxt plans</p>
                </div>
            </div>

            <div className={styles.second_half}>
                <div className={styles.signup_container}>
                    <p className={styles.keep_updated}>Keep me updated about products, news, tips and offers from Internxt.</p>

                    <EmailNewsletter />              
                </div>

                <div className={styles.line}></div>

                <div className={styles.social_container}>
                    <div className={styles.p_container}>
                        <div className={styles.logo_container}>
                            <Image 
                                src="/images/1440/Footer/Internxt.png"
                                alt="INTERXT logo"
                                width={298}
                                height={32}
                                quality={100}
                            />
                        </div>
                        <p className={styles.p_social}>Copyright &copy; 2020 Internxt Inc.</p>
                        <p className={styles.p_social}>All rights Reserved</p>
                    </div>

                    <div className={styles.p_container}>
                        <h1 className={styles.label}>Products</h1>
                        <p className={styles.p_social}>Internxt Drive</p>
                        <p className={styles.p_social}>Internxt Photos</p>
                        <p className={styles.p_social}>Internxt Send</p>
                        <p className={styles.p_social}>Internxt Token</p>
                        <p className={styles.p_social}>Internxt Core</p>
                    </div>

                    <div className={styles.p_container}>
                        <h1 className={styles.label}>Company</h1>
                        <p className={styles.p_social}>About us</p>
                        <p className={styles.p_social}>Pricing</p>
                        <p className={styles.p_social}>Contact</p>
                        <p className={styles.p_social}>Legals</p>
                    </div>

                    <div className={styles.p_container}>
                        <h1 className={styles.label}>Follow us</h1>
                        <p className={styles.p_social}>Twitter</p>
                        <p className={styles.p_social}>Telegram</p>
                        <p className={styles.p_social}>Github</p>
                    </div>

                    <div className={styles.p_container}>
                        <h1 className={styles.label}>Join</h1>
                        <p className={styles.p_social}>Sign in</p>
                        <p className={styles.p_social}>Get started</p>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Footer;