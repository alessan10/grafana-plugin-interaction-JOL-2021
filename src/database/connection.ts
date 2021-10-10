import { MongoClient } from "mongodb"

const url = 'mongodb://127.0.0.1:27017'
const dbname = 'jol'
let db

const dbConnectionResult = MongoClient.connect(url, (err, client) =>{
    if (err) return console.log(err)

    db = client?.db(dbname)
    console.log(`Connected MongoDB: ${url}`)
    console.log("Connected to DBname: ", db?.databaseName) //to be sure that DBname comes from the db and not from local variable
    //console.log("client:",client)
    //db?.createCollection('temperatures') //works fine but that's not its position!
    // return db
});

export default dbConnectionResult