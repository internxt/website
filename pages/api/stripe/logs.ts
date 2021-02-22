import { NextApiRequest, NextApiResponse } from "next";
import fs from 'fs'

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const auth = req.headers.authorization
        const usrpwd = Buffer.from(auth.split(" ")[1], 'base64').toString()

        if (usrpwd !== process.env.SECRET_AUTH) {
            throw Error()
        }

        const result = fs.readFileSync('logs.txt');
        res.status(200).send(result.toString())
    } catch {
        res.setHeader('WWW-Authenticate', 'Basic realm="Password", charset="UTF-8"');
        res.status(401).send('Unauthorized');
    }
}