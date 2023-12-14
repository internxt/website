import { NextApiRequest, NextApiResponse } from 'next';
import sendgrid from '@sendgrid/mail';

const { SENDGRID_API_KEY } = process.env;

// API endpoint to allow the client to download the app from any component without getServerSideProps
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'OPTIONS') {
    res.status(200).json({});
  }
  if (req.method === 'POST') {
    const { email, template_id } = req.body;
    sendgrid.setApiKey();
    const msg = {
      to: email,
      from: {
        email: this.configService.get('mailer.from'),
        name: this.configService.get('mailer.name'),
      },
      subject: '',
      text: 'send link',
      html: 'send link',
      personalizations: [
        {
          to: [
            {
              email,
            },
          ],
          dynamic_template_data: context,
        },
      ],
      template_id: template_id,
      mail_settings: {
        sandbox_mode: {
          enable: this.configService.get('mailer.sandbox'),
        },
      },
    };
    await sendgrid.send(msg);
  } else {
    res.status(405).end(); // Método no permitido
  }
}
