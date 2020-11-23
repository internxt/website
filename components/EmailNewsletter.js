import styles from './EmailNewsletter.module.css'

const EmailNewsletter = ({ value }) => {
    return (
        <div className={styles.signup_container}>
            <form
                method="GET"
                action="https://drive.internxt.com/new"
                style={{ display: "flex" }}>
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
                    className={`${styles.button} lg:w-32 lg:h-10 lg:text-sm`}
                />
            </form>
        </div>
    );
}

export default EmailNewsletter;