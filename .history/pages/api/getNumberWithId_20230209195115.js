import { MongoClient } from "mongodb";
export default function handler(req, res) {
  console.log(req.params.id);
  const client = new MongoClient(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db("SpamingNumber");
  db.collection("PhoneNumber")
    .find({})
    .limit(6)
    .toArray()
    .then((value) => {
      res.send(value);
    });
}
