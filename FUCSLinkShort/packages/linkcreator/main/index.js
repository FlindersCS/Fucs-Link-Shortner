const MongoClient = require('mongodb').MongoClient;

async function main(args) {
    const uri = MONGO_URI;
    const client = new MongoClient(uri);

    let out = ""
    try {
        const database = client.db('linkshortner');
        const collection = database.collection('links');
        const query = { short: args.short };
        const url = await collection.findOne(query);
        console.log("Found: " + url.url + " for " + args.short);
        out = url.url;
    } catch (err) {
        console.log(err);
        out = "https://flinderscs.com";
    } finally {
        client.close();
    }
    return { body: out };
}

module.exports.main = main;