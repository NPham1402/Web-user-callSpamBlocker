import { MongoClient, ObjectId } from "mongodb";
import { useRouter } from "next/router";
export default function handler(req, res) {
  const _id = req.headers.id;
  const client = new MongoClient(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db("SpamingNumber");
  db.collection("PhoneNumber")
    .findOne({ _id: new ObjectId(_id) })
    .then((value) => {
      res.send(value);
    });
}
