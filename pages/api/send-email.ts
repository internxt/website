import { NextApiRequest, NextApiResponse } from 'next';
import sendgrid from '@sendgrid/mail';

const { SENDGRID_API_KEY } = process.env;

// API endpoint to allow the client to download send the ebook to the user's email
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'OPTIONS') {
    res.status(200).json({});
  }
  if (req.method === 'POST') {
    const { name, email, templateId, eBook } = req.body;
    sendgrid.setApiKey(SENDGRID_API_KEY);
    const msg = {
      to: email,
      from: {
        email,
        name,
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
          dynamic_template_data: {
            download_url: eBook,
          },
        },
      ],
      template_id: templateId,
      mail_settings: {
        sandbox_mode: {
          enable: true,
        },
      },
    };
    try {
      await sendgrid.send(msg);
      res.status(200).json({
        success: true,
        message: 'Email sent successfully',
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  } else {
    res.status(405).end(); // Method not allowed
  }
}
