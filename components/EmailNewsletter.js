import styles from './EmailNewsletter.module.css'

const EmailNewsletter = () => {
    return ( 
        <div className={styles.signup_container}>
            <form style={{display: "flex"}}>
                <input
                    name='email'
                    type='email'
                    placeholder='Your email'
                    className={styles.email}
                />

                <input
                    name='signup'
                    type='submit'
                    value="Sign up"
                    className={styles.button}
                />
            </form>
        </div>
     );
}
 
export default EmailNewsletter;