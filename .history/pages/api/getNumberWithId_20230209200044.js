import { MongoClient } from "mongodb";
import { useRouter } from "next/router";
export default function handler(req, res) {
  const router = useRouter();
  console.log(router.query);
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
