import { NextApiRequest, NextApiResponse } from "next";
import { connectDatabase, getAllDocuments, insertDocument } from "../../../helpers/db-util";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const eventId = req.query.eventId;

    let client;

    try {
        client = await connectDatabase();
    } catch (error) {
        res.status(500).json({ message: 'Connecting to the database failed!' });
        return;

    }
    if (req.method === 'POST') {
        const { email, name, text } = req.body;

        if (!email.includes("@") || !name || name.trim() === '' || !text || text.trim() === '') {
            res.status(422).json({
                message: 'Invalid Input'
            })
            return;
        }


        const newComment = {
            email,
            name,
            text,
            eventId,
            id: {}
        };

        let result
        try {
            result = await insertDocument(client, 'comments', newComment);
        } catch (error) {
            res.status(500).json({ message: `Inserting comment failed ${error.message}` });
        }
        if (result) {
            newComment.id = result.insertedId;
        }
        res.status(201).json({ message: 'Added Comment', comment: newComment });

    }

    if (req.method === 'GET') {

        try {
            const documents = await getAllDocuments(
                client,
                "comments",
                { _id: -1 },
                { eventId: eventId }
            );
            res.status(200).json({ message: `Added Comment on ${eventId}`, comments: documents })
        } catch (error) {
            res.status(500).json({ message: 'Getting comments failes' })
        }
    }
    client.close();
}
export default handler;