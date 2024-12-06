// firebase.js
import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

// Your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDyCU2B68rQhJDn6EetcA9_GYbKhDJcRrk",
    authDomain: "yunghavy-4429b.firebaseapp.com",
    databaseURL: "https://yunghavy-4429b-default-rtdb.firebaseio.com",
    projectId: "yunghavy-4429b",
    storageBucket: "yunghavy-4429b.appspot.com",
    messagingSenderId: "663750018590",
    appId: "1:663750018590:web:2fdd536510dd5eaf2e100f",
    measurementId: "G-T66KV0456L"
  };

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage, ref, listAll, getDownloadURL };
