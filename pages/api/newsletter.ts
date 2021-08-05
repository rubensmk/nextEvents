import { NextApiRequest, NextApiResponse } from "next";
import { connectDatabase, insertDocument } from "../../helpers/db-util";


async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const userEmail = req.body.email;
        let client;

        if (!userEmail || !userEmail.includes("@")) {
            res.status(422).json({ message: "Invalid email address." });
            return;
        }

        try {
            client = await connectDatabase();
        } catch (error) {
            res.status(500).json({ message: 'Connect to the database failed!.' })
            return;
        }

        try {
            await insertDocument(client, 'newsletter', { email: userEmail })
            client.close();
        } catch (error) {
            res.status(500).json({ message: 'Inserting data failed!.' })
            return;

        }
        res.status(201).json({ message: 'Signed Up!' })

    }
}

export default handler;