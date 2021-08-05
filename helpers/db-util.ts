import { MongoClient } from 'mongodb';

interface DocumentProps {
    email?: string;
    name?: string;
    text?: string;
    eventId?: string | string[];
    id?: {}
}

export async function connectDatabase() {
    const client = await MongoClient.connect(`${process.env.MONGODB_CLIENT}`)

    return client;
}

export async function insertDocument(client: MongoClient, collection: string, document: DocumentProps) {
    const db = client.db();
    const result = await db.collection(collection).insertOne(document);

    return result;
}
export async function getAllDocuments(client: MongoClient, collection: string, sort: {}, filter = {}) {
    const db = client.db()

    const documents = await db
        .collection(collection)
        .find(filter)
        .sort(sort)
        .toArray()

    return documents
}