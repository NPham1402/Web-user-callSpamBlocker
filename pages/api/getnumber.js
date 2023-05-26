// import { MongoClient } from "mongodb";
// export default function handler(req, res) {
//   const client = new MongoClient(process.env.MONGODB_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
//   const db = client.db("SpamingNumber");
//   db.collection("PhoneNumber")
//     .find({})
//     .limit(6)
//     .toArray()
//     .then((value) => {
//       res.send(value);
//     });
// }
