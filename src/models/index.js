import mongodb from 'mongodb'; 
const MongoClient = mongodb.MongoClient;

var client;

export async function connectDB() { 
    if (!client) client = await MongoClient.connect("mongodb://localhost:27017",{ useNewUrlParser: true });
    return { 
        db: client.db("wedrive"), 
        client: client
    };
}

export async function close() {
    if (client) client.close();
    client = undefined;
}