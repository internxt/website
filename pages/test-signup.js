import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Layout from '../components/layout/Layout';
import TextInput from '../components/components/TextInput';
import PasswordInput from '../components/components/PasswordInput';
import PrimaryButton from '../components/components/PrimaryButton';
import { signup } from '../lib/auth';

const Privacy = ({ navbarLang, lang }) => {
  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.target.elements;
    signup({ email: form.email.value, password: form.password.value });
  };
  return (
    <Layout title={'Test Signup'} lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} />

      <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-1">
        <div className="mb-20 flex w-96 flex-col items-center space-y-6 rounded-2xl bg-white px-8 py-10 shadow-subtle-hard">
          <img className="h-16 w-16 rounded-xl shadow-subtle" src="./favicon.ico" draggable={false} />

          <h1 className="text-2xl font-medium">Sign up to Internxt</h1>

          <form className="flex w-full flex-col space-y-3" onSubmit={onSubmit}>
            <label className="space-y-0.5">
              <span className="text-sm">Email</span>
              <TextInput name="email" placeholder="Your email adress" type="email" required />
            </label>

            <label className="space-y-0.5">
              <span className="text-sm">Password</span>
              <PasswordInput name="password" placeholder="Password" required />
            </label>

            <PrimaryButton type="submit" label="Sign up" />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);

  return {
    props: {
      lang,
      navbarLang,
    },
  };
}

export default Privacy;
