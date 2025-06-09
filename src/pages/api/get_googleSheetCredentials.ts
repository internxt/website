import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const credentialsDir = path.join(process.cwd(), 'credentials');
  const filePath = path.join(credentialsDir, 'service-account.json');

  if (req.method === 'POST') {
    try {
      if (!fs.existsSync(credentialsDir)) {
        fs.mkdirSync(credentialsDir, { recursive: true });
      }
      fs.writeFileSync(filePath, JSON.stringify(req.body, null, 2));
      return res.status(200).json({ message: 'Credentials saved successfully' });
    } catch (error) {
      return res.status(500).json({ message: 'Failed to save credentials', error: String(error) });
    }
  }

  if (req.method === 'GET') {
    try {
      if (!fs.existsSync(filePath)) {
        return res.status(404).json({ message: 'No credentials file found' });
      }
      const data = fs.readFileSync(filePath, 'utf-8');
      const json = JSON.parse(data);
      return res.status(200).json(json);
    } catch (error) {
      return res.status(500).json({ message: 'Failed to read credentials', error: String(error) });
    }
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}
