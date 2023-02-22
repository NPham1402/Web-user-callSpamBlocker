import { MongoClient } from "mongodb";
export default function handler(req, res) {
  console.log(req.query.id);
  const client = new MongoClient(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db("SpamingNumber");
  db.collection("PhoneNumber")
    .find({})
    .toArray()
    .then((value) => {
      res.send(value);
    });
}
