import React from 'react';
import styles from './EmailNewsletter.module.css';

const EmailNewsletter = ({ hidden, value, descriptions }) => {
  const description = descriptions.filter((desc) => desc.id === 'EmailNewsletter');

  const hiddenClass = hidden ? styles.hidden : styles.signup_container;

  return (
    <div className={`${hiddenClass}`}>
      <form
        data-code="r3s4c1"
        method="post"
        target="_blank"
        rel="noopener"
        action="https://app.mailerlite.com/webforms/submit/r3s4c1"
        style={{ display: 'flex' }}
      >
        <input type="hidden" name="ml-submit" value="1" />
        <input
          name="fields[email]"
          type="email"
          placeholder={description[0].placeholder}
          className={`${styles.email} sm:hidden lg:w-48 lg:text-sm lg:h-10 `}
          required
        />

        <input
          name="signup"
          type="submit"
          value={value}
          className={`${styles.button} sm:rounded-3xl sm:h-10 sm:w-28 sm:text-base lg:w-32 lg:h-10 lg:text-sm xl:w-auto xl:px-6`}
        />
      </form>
    </div>
  );
};

export default EmailNewsletter;
