import * as mongodb from 'mongodb'

// export class MongoHelper{
//     public static client: mongodb.MongoClient;

//     public static connect(url: string){
//         return new Promise((resolve, reject) => {
//             mongodb.MongoClient.connect(url, (err, client: mongodb.MongoClient) => {
//                 if (err){
//                     reject(err);
//                 }else{
//                     MongoHelper.client = client;
//                 }
//             });
//         });
//     }
// }

const connection = mongodb.MongoClient.connect('mongodb://localhost:27017/jol', function(err, db){
    if (err){
        throw err;
    }
    // db.collection('temperatures').find().toArray(function(err, result) {
    //     if (err) {
    //         throw err;
    //     }
    // });
    console.log(`connected to database ${db}`);
});

export default connection

// var MongoClient = require('mongodb').MongoClient;

// MongoClient.connect('mongodb://localhost:27017/animals', function(err, db) {
//   if (err) {
//     throw err;
//   }
//   db.collection('mammals').find().toArray(function(err, result) {
//     if (err) {
//       throw err;
//     }
//     console.log(result);
//   });
// });
