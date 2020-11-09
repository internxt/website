import Link from 'next/link'
import EmailNewsletter from '../EmailNewsletter'
import styles from './Footer.module.css'

const Footer = () => {
    return ( 
        <>
            <div className={styles.first_half}>
                <div className={styles.title_container}>
                    <text className={styles.title}>A family of privacy focused services.</text>

                    <text className={styles.title}>Get started free for 30 days.</text>

                    <text>esto es la imagen</text>
                </div>

                <div className={styles.get_started_container}>
                    <button className={styles.button}>
                        <text className={styles.text_button}>Get started</text>
                    </button>

                    <text className={styles.learn_more}>Learn more about Internxt plans</text>
                </div>
            </div>

            <div className={styles.second_half}>
                <div className={styles.signup_container}>
                    <div style={{flex: 0.5}}>
                        <text className={styles.keep_updated}>Keep me updated about products, news, tips and offers from Internxt.</text>
                    </div>

                    <div style={{flex: 0.5}}>
                        <EmailNewsletter />
                    </div>                    
                </div>

                <div className={styles.line}></div>

                <div className={styles.social_container}>
                    <div className={styles.text_container}>
                        <text className={styles.logo}>INTERNXT</text>
                        <text className={styles.text_social}>Copyright &copy; 2020 Internxt Inc.</text>
                        <text className={styles.text_social}>All rights Reserved</text>
                    </div>

                    <div className={styles.text_container}>
                        <text className={styles.label}>Products</text>
                        <text className={styles.text_social}>Internxt Drive</text>
                        <text className={styles.text_social}>Internxt Photos</text>
                        <text className={styles.text_social}>Internxt Send</text>
                        <text className={styles.text_social}>Internxt Token</text>
                        <text className={styles.text_social}>Internxt Core</text>
                    </div>

                    <div className={styles.text_container}>
                        <text className={styles.label}>Company</text>
                        <text className={styles.text_social}>About us</text>
                        <text className={styles.text_social}>Pricing</text>
                        <text className={styles.text_social}>Contact</text>
                        <text className={styles.text_social}>Legals</text>
                    </div>

                    <div className={styles.text_container}>
                        <text className={styles.label}>Follow us</text>
                        <text className={styles.text_social}>Twitter</text>
                        <text className={styles.text_social}>Telegram</text>
                        <text className={styles.text_social}>Github</text>
                    </div>

                    <div className={styles.text_container}>
                        <text className={styles.label}>Join</text>
                        <text className={styles.text_social}>Sign in</text>
                        <text className={styles.text_social}>Get started</text>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Footer;