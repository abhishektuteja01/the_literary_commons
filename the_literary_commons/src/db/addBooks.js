// Used to create test data and update the availability status of books in the database

import { getFirestore, collection, getDocs, updateDoc, doc, addDoc } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";

// Firebase configuration
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

// Sample test data
const sampleReviews = [
  { reviewer: "Alice", text: "Amazing book! Couldn't put it down." },
  { reviewer: "Bob", text: "A great read, highly recommend." },
  { reviewer: "Charlie", text: "Good story but a bit slow in the middle." },
  { reviewer: "David", text: "Fantastic writing and characters!" },
  { reviewer: "Eve", text: "Loved it! A must-read." },
  { reviewer: "Frank", text: "Not my cup of tea, but well-written." },
  { reviewer: "Grace", text: "Very insightful and thought-provoking." },
  { reviewer: "Henry", text: "Enjoyed the twists and turns." },
  { reviewer: "Ivy", text: "A classic! Will read again." },
  { reviewer: "Jack", text: "A solid read, but not the best I've read." },
];

async function updateReviewsForAllBooks() {
  try {
    const booksCollection = collection(db, "books");
    const booksSnapshot = await getDocs(booksCollection);

    // For each book document in the collection...
    for (const bookDoc of booksSnapshot.docs) {
      // Choose a random number of reviews (e.g., between 1 and 3)
      const numReviews = Math.floor(Math.random() * 3) + 1;
      // Shuffle the sampleReviews array and select the first numReviews items
      const shuffledReviews = sampleReviews.sort(() => 0.5 - Math.random());
      const reviewsToAdd = shuffledReviews.slice(0, numReviews);

      const bookRef = doc(db, "books", bookDoc.id);
      await updateDoc(bookRef, { reviews: reviewsToAdd });
      console.log(`Updated book ${bookDoc.id} with reviews:`, reviewsToAdd);
    }

    console.log("All books updated with reviews!");
  } catch (error) {
    console.error("Error updating reviews for books:", error);
  }
}

// Run the function
updateReviewsForAllBooks();