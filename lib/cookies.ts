import { GetServerSidePropsContext } from "next";

const Cookies = require('cookies')
const moment = require('moment')
const url = require('url')
const queryString = require('querystring')

function parseUri(ctx: GetServerSidePropsContext) {
    const query = url.parse(ctx.req.url).query;
    const parsedQuery = queryString.parse(query);
    return parsedQuery;
}

function setReferralCookie(ctx: GetServerSidePropsContext): void {

    const parsedUri = parseUri(ctx);

    if (!parsedUri.ref) {
        return;
    }

    const referral_id = parsedUri.ref;

    const expires = moment().add(2, 'days').toDate()
    const cookies = new Cookies(ctx.req, ctx.res);

    cookies.set('REFERRAL', referral_id, {
        domain: process.env.NODE_ENV === 'production' ? '.internxt.com' : 'localhost',
        expires: expires,
        overwrite: true,
        httpOnly: false
    });

    // httpOnly must be false in order to be accesible by JavaScript
}

function setPublicCookie(ctx: GetServerSidePropsContext, name: string, value: string): void {
    const cookies = new Cookies(ctx.req, ctx.res);

    const expires = moment().add(2, 'days').toDate()

    cookies.set(name, value, {
        domain: process.env.NODE_ENV === 'production' ? '.internxt.com' : 'localhost',
        expires: expires,
        overwrite: true,
        httpOnly: false
    });
}

export default {
    parseUri,
    setReferralCookie,
    setPublicCookie
}