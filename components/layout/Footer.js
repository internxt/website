import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Accordion, Card, Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import styles from './Footer.module.css';
import EmailNewsletter from '../EmailNewsletter';

const Footer = (props) => {
  const router = useRouter();
  const { locale } = router;

  return (
    <footer>
      <div className={`${styles.first_half} sm:p-0 sm:py-20 lg:h-84`}>
        <div className={styles.title_container}>
          <h1 className={`${styles.title} sm:text-4xl lg:text-4xl`}>
            {router.pathname === '/lifetime' ? props.descriptions.lifetimeTitle1 : props.descriptions.title1}
          </h1>

          <h1 className={`${styles.title} sm:text-4xl lg:text-4xl`}>
            {router.pathname === '/lifetime' ? props.descriptions.lifetimeTitle2 : props.descriptions.title2}
          </h1>

          <div className={`${styles.image} sm:mx-0`}>
            <Image src="/images/1440/Footer/Line.webp" width={68} height={9} />
          </div>
        </div>

        <div className={`${styles.get_started_container} lg:mt-10`}>

          <a
            {...props.signUpAction
              ? {
                onClick: props.signUpAction,
                href: '#',
              }
              : {
                href: 'https://drive.internxt.com/new',
                target: '_blank',
              }}
            className={`${styles.button} ${styles.text_button} sm:text-base lg:text-sm lg:h-8 lg:w-32`}
          >
            {router.pathname === '/lifetime' ? 'Claim now!' : props.descriptions.button}
          </a>

          <Link href="/pricing">
            <a className={router.pathname === '/lifetime' ? 'hidden' : `${styles.learn_more} sm:text-base lg:text-xss lg:mt-1`}>
              {props.descriptions.link}
            </a>
          </Link>
        </div>
      </div>

      <div className={`${styles.second_half} sm:pb-16`}>
        <div className={`${styles.signup_container} sm:flex-col sm:w-full sm:pl-6 sm:items-start`}>
          <p className={`${styles.keep_updated} sm:text-xl sm:min-w-0 sm:w-9/12 lg:text-xl lg:min-w-0 lg:w-100 lg:flex-none `}>
            {props.descriptions.keep_updated}
          </p>

          <div className="sm:hidden">
            <EmailNewsletter value={props.descriptions.newsletter} descriptions={props.cardDescriptions} />
          </div>

          <form
            method="GET"
            action="https://drive.internxt.com/new"
            className=" hidden sm:flex sm:mt-8"
          >
            <input
              name="email"
              type="email"
              placeholder={props.descriptions.placeholder}
              className={`${styles.email2} sm:h-10 sm:w-56 lg:w-48 lg:text-sm lg:h-10 `}
            />

            <input
              name="signup"
              type="submit"
              value={props.descriptions.button2}
              className={`${styles.button2} sm:h-10 sm:w-28 sm:text-base lg:w-32 lg:h-10 lg:text-sm`}
            />
          </form>
        </div>

        <div className={`${styles.line} sm:hidden`} />

        <div className={`${styles.social_container} sm:hidden sm:w-11/12 sm:justify-around lg:pb-12`}>
          <div className={`${styles.p_container}`}>
            <div className="sm:w-24 lg:w-28 xl:w-36 xl:mt-2">
              <Image
                src="/images/1440/Footer/Internxt.webp"
                alt="INTERXT logo"
                width={153}
                height={16}
                quality={100}
              />
            </div>

            <p className={`${styles.p_social} hover:opacity-100 sm:text-base lg:text-xs mt-6`}>
              {props.descriptions.copyright}
            </p>
            <p className={`${styles.p_social} hover:opacity-100 sm:text-base lg:text-xs`}>
              {props.descriptions.rights}
            </p>
          </div>

          <div className={`${styles.p_container} sm:hidden`}>
            <h1 className={`${styles.label} lg:text-sm`}>
              {props.descriptions.label1}
            </h1>

            <Link href="/drive">
              <a className={`${styles.p_social} lg:text-xs`}>
                Internxt Drive
              </a>
            </Link>

            <Link href="/photos">
              <a className={`${styles.p_social} lg:text-xs`}>
                Internxt Photos
              </a>
            </Link>

            <a
              href="https://send.internxt.com/"
              target="_blank"
              className={`${styles.p_social} lg:text-xs`}
              rel="noreferrer"
            >
              Internxt Send
            </a>

            <Link href="/token">
              <a className={`${styles.p_social} lg:text-xs`}>
                Internxt Token
              </a>
            </Link>

            <Link href="https://www.couponupto.com/" target="_blank">
              <a className={`${styles.p_social} lg:text-xs`}>
                Cuponupto
              </a>
            </Link>
          </div>

          <div className={`${styles.p_container} sm:hidden`}>
            <h1 className={`${styles.label} lg:text-sm`}>
              {props.descriptions.label2}
            </h1>

            <Link href="/about">
              <a className={`${styles.p_social} lg:text-xs`}>
                {props.descriptions.info1}
              </a>
            </Link>

            <Link href="/pricing">
              <a className={`${styles.p_social} lg:text-xs`}>
                {props.descriptions.info2}
              </a>
            </Link>

            <a
              href="https://help.internxt.com/"
              target="_blank"
              className={`${styles.p_social} lg:text-xs`}
              rel="noreferrer"
            >
              {props.descriptions.info3}
            </a>

            <Link href="/legal">
              <a className={`${styles.p_social} lg:text-xs`}>
                Legal
              </a>
            </Link>

            {
              locale === 'en'
                ? (
                  <a
                    href="/es"
                    className={`${styles.p_social} lg:text-xs`}
                  >
                    {props.descriptions.info6}
                  </a>
                )
                : (
                  <Link href="/">
                    <a className={`${styles.p_social} lg:text-xs`}>
                      {props.descriptions.info6}
                    </a>
                  </Link>
                )
            }
          </div>

          <div className={styles.p_container}>
            <h1 className={`${styles.label} lg:text-sm`}>
              {props.descriptions.label3}
            </h1>

            <div className={styles.followus_container}>
              <img
                className={styles.logo}
                src="/images/1440/Footer/twitter.webp"
                alt=""
              />
              <a
                href="https://twitter.com/Internxt"
                target="_blank"
                className={`${styles.p_social} lg:text-xs`}
                rel="noreferrer"
              >
                Twitter
              </a>
            </div>

            <div className={styles.followus_container}>
              <img
                className={styles.logo}
                src="/images/1440/Footer/medium.webp"
                alt=""
              />
              <a
                href="https://blog.internxt.com/"
                target="_blank"
                className={`${styles.p_social} lg:text-xs`}
                rel="noreferrer"
              >
                Blog
              </a>
            </div>

            <div className={styles.followus_container}>
              <img
                className={styles.logo}
                src="/images/1440/Footer/github.svg"
                alt=""
              />
              <a
                href="https://github.com/internxt"
                target="_blank"
                className={`${styles.p_social} lg:text-xs`}
                rel="noreferrer"
              >
                Github
              </a>
            </div>
          </div>
          
          <div className={`${styles.p_container} sm:hidden`}>
            <h1 className={`${styles.label} lg:text-sm`}>
              {props.descriptions.label4}
            </h1>
            <a
              href="https://drive.internxt.com/login"
              target="_blank"
              className={`${styles.p_social} lg:text-xs`}
              rel="noreferrer"
            >
              {props.descriptions.info4}
            </a>
            <a
              href="https://drive.internxt.com/new"
              target="_blank"
              className={`${styles.p_social} lg:text-xs`}
              rel="noreferrer"
            >
              {props.descriptions.info5}
            </a>
          </div>
        </div>

        <Accordion className="lg:hidden xl:hidden">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                {props.descriptions.label1}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Link href="/drive">
                  <a className={styles.faqtext}>
                    Internxt Drive
                  </a>
                </Link>

                <Link
                  className="mt-4"
                  href="/photos"
                >
                  <a className={styles.faqtext}>
                    Internxt Photos
                  </a>
                </Link>

                <Link
                  className="mt-4"
                  href="https://send.internxt.com/"
                >
                  <a className={styles.faqtext}>
                    Internxt Send
                  </a>
                </Link>

                <Link
                  className="mt-4"
                  href="/token"
                >
                  <a className={styles.faqtext}>
                    Internxt Token
                  </a>
                </Link>

                <Link
                  className="mt-4"
                  href="/core"
                >
                  <a className={styles.faqtext}>
                    Internxt Core
                  </a>
                </Link>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                {props.descriptions.label2}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Link href="/about">
                  <a className={styles.faqtext}>
                    {props.descriptions.info1}
                  </a>
                </Link>

                <Link href="/legal">
                  <a className={styles.faqtext}>
                    Legal
                  </a>
                </Link>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                {props.descriptions.label3}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <a
                  href="https://twitter.com/Internxt"
                  className={`${styles.faqtext} lg:text-xs`}
                >
                  Twitter
                </a>
                <a
                  href="https://blog.internxt.com/"
                  className={`${styles.faqtext} lg:text-xs`}
                >
                  Blog
                </a>
                <a
                  href="https://github.com/internxt"
                  className={`${styles.faqtext} lg:text-xs`}
                >
                  Github
                </a>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="3">
                {props.descriptions.label4}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <a
                  href="https://drive.internxt.com/login"
                  className={`${styles.faqtext} m-0 lg:text-sm`}
                >
                  {props.descriptions.info4}
                </a>
                <a
                  href="https://drive.internxt.com/new"
                  className={`${styles.faqtext}`}
                >
                  {props.descriptions.info5}
                </a>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <div className="sm:w-80" />
        </Accordion>

        <div className="hidden sm:flex sm:flex-col sm:w-full sm:px-6">
          <div className="sm:w-40 mt-16">
            <Image
              src="/images/1440/Footer/Internxt.webp"
              alt="INTERXT logo"
              width={153}
              height={16}
              quality={100}
            />
          </div>

          <p className={`${styles.p_social} sm:text-base sm:text-xs mt-6`}>
            {props.descriptions.copyright}
          </p>
          <p className={`${styles.p_social} sm:text-base sm:text-xs`}>
            {props.descriptions.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
