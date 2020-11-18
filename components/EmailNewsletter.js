import styles from './EmailNewsletter.module.css'

const EmailNewsletter = ({ value }) => {
    return ( 
        <div className={styles.signup_container}>
            <form style={{display: "flex"}}>
                <input
                    name='email'
                    type='email'
                    placeholder='Your email'
                    className={`${styles.email} lg:w-48 lg:text-sm lg:h-10`}
                />

                <input
                    name='signup'
                    type='submit'
                    value={value}
                    className={`${styles.button} lg:w-32 lg:h-10 lg:text-base`}
                />
            </form>
        </div>
     );
}
 
export default EmailNewsletter;