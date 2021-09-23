import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import jsonwebtoken from 'jsonwebtoken'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const sessionId = <string>req.query.sid;
    const isTest = !!sessionId.match(/^cs_test_/);

    const KEY = !isTest ? process.env.STRIPE_PRIVATE_KEY : process.env.STRIPE_PRIVATE_KEY_TEST
    const stripe = new Stripe(KEY, { apiVersion: '2020-08-27' });

    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if(session && session.payment_status === 'paid') {
        // const customer = await stripe.customers.retrieve(<string>session.customer);

        const token = jsonwebtoken.sign({
            email: session.customer_details.email
        }, process.env.JWT_DRIVE_SERVER, { expiresIn: '14d' });

        res.status(200).send({ token: token, email: session.customer_details.email })
    }
    else {
        res.status(401).send({msg: 'Unauthoraized'});
    }
}