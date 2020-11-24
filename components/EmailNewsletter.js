import styles from './EmailNewsletter.module.css'

const EmailNewsletter = ({ hidden, value }) => {

    const hidden_class = hidden ? styles.hidden : styles.signup_container

    return (
        <div className={`${hidden_class}`}>
            <form
                method="GET"
                action="https://drive.internxt.com/new"
                style={{ display: "flex" }}>
                <input
                    name='email'
                    type='email'
                    placeholder='Your email'
                    className={`${styles.email} sm:hidden lg:w-48 lg:text-sm lg:h-10 `}
                />

                <input
                    name='signup'
                    type='submit'
                    value={value}
                    className={`${styles.button} sm:rounded-3xl sm:h-10 sm:w-28 sm:text-base lg:w-32 lg:h-10 lg:text-sm`}
                />
            </form>
        </div>
    );
}

export default EmailNewsletter;