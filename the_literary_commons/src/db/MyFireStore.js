// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore/lite";

function MyFireStoreDB() {
  const myDB = {};
  const firebaseConfig = {
    apiKey: "AIzaSyChewNij6icScPJCBp8uB_9QRU7RLvvqQ8",
    authDomain: "theliterarycommons.firebaseapp.com",
    projectId: "theliterarycommons",
    storageBucket: "theliterarycommons.firebasestorage.app",
    messagingSenderId: "339469816910",
    appId: "1:339469816910:web:f15f6fab23c65cf9911f1f"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  myDB.getBooks = async () => {
    // Initialize Firebase
    

    const booksSnapshot = await getDocs(collection(db, 'books'));
    const booksList = booksSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return booksList;
  };

  myDB.addBook = async (title, author, genre, condition) => {
    if (!title || !author || !genre || !condition) {
      alert("Please fill in all fields!");
      return;
    }

    try {
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);
      const booksCollection = collection(db, "books");
      await addDoc(booksCollection, { title, author, genre, condition });
      alert("Book added successfully!");
    } catch (error) {
      console.error("Error adding book:", error);
      alert("Failed to add book. Please try again.");
    }
  }
  return myDB;
  
}

const myDB = MyFireStoreDB();
export default myDB;  