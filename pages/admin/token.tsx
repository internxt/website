import React from 'react'
import Cookies from 'cookies'
import moment from 'moment'
import jsonwebtoken from 'jsonwebtoken'
import fs from 'fs'
import url from 'url'
import queryString from 'querystring'

export default function AdminToken(props) {
  return <div>
    {props.isAuth ? <>
      <form method="post">
        <input type="submit" name="clear" value="Clear log" />
      </form>
      <pre>{props.data}</pre>
    </> : <>Unauthorized</>}
  </div>;
}

export async function getServerSideProps(ctx) {
  const cookies = new Cookies(ctx.req, ctx.res);

  const savedToken = cookies.get('token');

  let isAuth = true;
  let data = null;

  try {
    const login = ctx.req.headers.authorization

    if (login) {
      const usrpwd = Buffer.from(login.split(" ")[1], 'base64').toString()
      if (usrpwd !== process.env.SECRET_AUTH) {
        throw Error('Invalid password');
      }

      const token = jsonwebtoken.sign({ user: 'INXT' }, process.env.JWT_DRIVE_SERVER)
      const expires = moment().add(1, 'hour').toDate()

      cookies.set('token', token, {
        domain: process.env.NODE_ENV === 'production' ? '.internxt.com' : 'localhost',
        expires,
        httpOnly: false
      });
    } else if (savedToken) {
      const isValidToken = jsonwebtoken.verify(savedToken, process.env.JWT_DRIVE_SERVER)
      if (!isValidToken) {
        throw Error('Invalid token');
      }
    } else {
      throw Error('Auth required');
    }


    const shouldDelete = ctx.req.method.toLowerCase() === 'post';

    if (shouldDelete) {
      fs.truncateSync('token.txt');
    }

    if (fs.existsSync('token.txt')) {
      data = fs.readFileSync('token.txt').toString()
    }
  } catch (e) {
    isAuth = false;
    console.log('Unauthorized', e.message)
    ctx.res.setHeader('WWW-Authenticate', 'Basic realm="Password", charset="UTF-8"');
    ctx.res.statusCode = 401;
  }

  return {
    props: { isAuth, data }
  }
}