import { initializeApp } from "firebase/app";

import { getDatabase, onValue, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};
const app = initializeApp(firebaseConfig);

const database = getDatabase(
  app,
  "https://blockhone-d9932.asia-southeast1.firebasedatabase.app/"
);
const databaseCallSPamBlocker = getDatabase(
  app,
  "https://callspamblocker-91a96-default-rtdb.asia-southeast1.firebasedatabase.app/"
);
export { database, databaseCallSPamBlocker };
