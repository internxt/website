import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { GoogleSpreadsheet } from 'google-spreadsheet';

const SPREADSHEET_ID = '16KKMYDbLtgcvSyRu5SFf6oNSfBulaUAj5HhzuFKFEks';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const credentialsPath = path.join(process.cwd(), 'credentials', 'service-account.json');

  try {
    if (!fs.existsSync(credentialsPath)) {
      return res.status(404).json({ message: 'No credentials file found' });
    }
    const creds = JSON.parse(fs.readFileSync(credentialsPath, 'utf-8'));
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID, creds);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];

    const { gclid, name, value, currency, timestamp } = req.body;

    await sheet.addRow({
      'Google Click ID': gclid,
      'Conversion Name': name,
      'Conversion Time': timestamp || new Date().toISOString(),
      'Conversion Value': value,
      'Conversion Currency': currency || 'EUR',
    });

    return res.status(200).json({ message: 'Event saved to Google Sheets' });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to send event', error: String(error) });
  }
}
