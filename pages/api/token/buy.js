import sgMail from '@sendgrid/mail'

export default (req, res) => {
    res.statusCode = 200
    res.json({ ok: 1 })
}
