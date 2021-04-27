import sgMail from '@sendgrid/mail';
import fs from 'fs';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req, res) => {
  try {
    const json = JSON.parse(req.body);

    try {
      fs.appendFileSync('token.txt', `${new Date().toISOString()}\t${json.deposit} ${json.currency}\t${json.receive_amount} inxt\t${json.receive_addr}\n`);
    } catch {
      // no op
    }

    res.statusCode = 200;
    res.json({ ok: 1 });
  } catch (err) {
    res.statusCode = 500;
    res.json({ ok: 0 });
  }
};

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
};
