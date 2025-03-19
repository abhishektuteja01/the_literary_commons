// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, getDoc, doc, updateDoc, deleteDoc } from "firebase/firestore/lite";

function MyFireStoreDB() {
  const myDB = {};
  const firebaseConfig = {
    apiKey: "AIzaSyChewNij6icScPJCBp8uB_9QRU7RLvvqQ8",
    authDomain: "theliterarycommons.firebaseapp.com",
    projectId: "theliterarycommons",
    storageBucket: "theliterarycommons.firebaseapp.com",
    messagingSenderId: "339469816910",
    appId: "1:339469816910:web:f15f6fab23c65cf9911f1f"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  myDB.getBooks = async () => {
    const booksSnapshot = await getDocs(collection(db, 'books'));
    const booksList = booksSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return booksList;
  };

  // Function to fetch a single book by ID
  myDB.getBookById = async (id) => {
    try {
      const bookRef = doc(db, "books", id);
      const bookSnap = await getDoc(bookRef);
      return bookSnap.exists() ? { id: bookSnap.id, ...bookSnap.data() } : null;
    } catch (error) {
      console.error("Error fetching book details:", error);
      return null;
    }
  };

  // Function to update a book by ID
  myDB.updateById = async (id, updatedData) => {
    try {
      const bookRef = doc(db, "books", id);
      await updateDoc(bookRef, updatedData);
      console.log("Book updated successfully!");
      return { success: true, message: "Book updated successfully!" };
    } catch (error) {
      console.error("Error updating book:", error);
      return { success: false, message: "Failed to update book." };
    }
  };

  myDB.deleteById = async (id) => {
    try {
      const bookRef = doc(db, "books", id);
      await deleteDoc(bookRef);
      console.log("Book deleted successfully!");
      return { success: true, message: "Book deleted successfully!" };
    } catch (error) {
      console.error("Error deleting book:", error);
      return { success: false, message: "Failed to delete book." };
    }
  }

  // Function to add a new book with "Available" status
  myDB.addBook = async (title, author, genre, condition) => {
    if (!title || !author || !genre || !condition) {
      console.error("All fields are required.");
      return { success: false, message: "All fields are required." };
    }

    try {
      const booksCollection = collection(db, "books");
      await addDoc(booksCollection, {
        title,
        author,
        genre,
        condition,
        availability: "Available" // Default availability status
      });

      console.log("Book added successfully!");
      return { success: true, message: "Book added successfully!" };
    } catch (error) {
      console.error("Error adding book:", error);
      return { success: false, message: "Failed to add book." };
    }
  };

  return myDB;
}

const myDB = MyFireStoreDB();
export default myDB;