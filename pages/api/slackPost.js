import { initializeApp } from "firebase/app";

import { getDatabase, onValue, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDjeuQ1gqzVe7IZOkKP9OEZ0w9Bs4l06e8",
  authDomain: "callspamblocker-91a96.firebaseapp.com",
  databaseURL:
    "https://callspamblocker-91a96-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "callspamblocker-91a96",
  storageBucket: "callspamblocker-91a96.appspot.com",
  messagingSenderId: "488555835111",
  appId: "1:488555835111:web:fa733c2256c94ad651bc42",
  measurementId: "G-FGX1QE5N6V",
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export default function handler(req, res) {
  const starCountRef = ref(database, "phoneNumber");
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    data.push({ id: 736736327, status: 2 });
    set(starCountRef, data);
    res.status(200).json({ data });
  });
}
