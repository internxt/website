import sgMail from '@sendgrid/mail'
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
import fs from 'fs'

export default (req, res) => {
    try {
        const json = JSON.parse(req.body)

        try {
            fs.appendFileSync('token.txt', new Date().toISOString() + '\t' + json.deposit + ' ' + json.currency + '\t' + json.receive_amount + ' inxt\t' + json.receive_addr + '\n');
        } catch {}

        res.statusCode = 200
        res.json({ ok: 1 })
        return;

        const msg = {
            to: 'hello@internxt.com',
            from: 'inxt@internxt.com', // Use the email address or domain you verified above
            subject: 'New Crypto INXT Request',
            text: `Deposit: ${json.deposit},\nCurrency: ${json.currency},\nReceive: ${json.receive_amount}\nCurrecy Receive: INXT\nReceiving Address: ${json.receive_addr}, Internxt Address: ${json.send_to}`,
            html: `<ul><li>Deposit:${json.deposit}</li><li>Currency: ${json.currency}</li><li>Receive: $receive</li><li>Currency Receive: ${json.receive_amount}</li><li>Receiving Address: ${json.receive_addr}</li><li>Internxt Address: ${json.send_to}</li></ul>`,
        };
        sgMail.send(msg).then(() => {
            res.statusCode = 200
            res.json({ ok: 1 })
        }).catch(() => {
            res.statusCode = 500
            res.json({ ok: 0 })
        })
    } catch (err) {
        res.statusCode = 500
        res.json({ ok: 0 })
    }
}

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '1mb'
        }
    }
}