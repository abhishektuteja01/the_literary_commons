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
const books = [
  { title: "The Silent Storm", author: "Emily Richards", genre: "Drama", condition: "New" },
  { title: "Echoes of the Past", author: "James Oliver", genre: "Historical Fiction", condition: "Like New" },
  { title: "Mystic Falls", author: "Sophia Grant", genre: "Fantasy", condition: "Good" },
  { title: "The Last Cipher", author: "David West", genre: "Thriller", condition: "Used" },
  { title: "A Tale of Two Souls", author: "Anna Caldwell", genre: "Romance", condition: "Fair" },
  { title: "Beyond the Horizon", author: "Liam Carter", genre: "Adventure", condition: "Worn" },
  { title: "The Cosmic Voyage", author: "Nathaniel Drake", genre: "Science Fiction", condition: "New" },
  { title: "Secrets in the Fog", author: "Charlotte Monroe", genre: "Mystery", condition: "Like New" },
  { title: "The Art of Deception", author: "Oliver Greene", genre: "Crime", condition: "Good" },
  { title: "Distant Shores", author: "Isabella Harper", genre: "Romance", condition: "Used" },
  { title: "Whispers of the Wind", author: "Lucas Evans", genre: "Drama", condition: "Fair" },
  { title: "Fragments of Memory", author: "Sophia Adams", genre: "Historical Fiction", condition: "Worn" },
  { title: "Parallel Worlds", author: "William Clarke", genre: "Science Fiction", condition: "New" },
  { title: "Beneath the Surface", author: "Harper Lee", genre: "Thriller", condition: "Like New" },
  { title: "Gates of Eternity", author: "Samuel Peterson", genre: "Fantasy", condition: "Good" },
  { title: "The Time Traveler's Dilemma", author: "Olivia Knight", genre: "Science Fiction", condition: "Used" },
  { title: "Fallen Kingdoms", author: "Benjamin Woods", genre: "Fantasy", condition: "Fair" },
  { title: "Code Red", author: "Victoria Ellis", genre: "Thriller", condition: "Worn" },
  { title: "Under the Crimson Sky", author: "Michael Foster", genre: "Drama", condition: "New" },
  { title: "Lost in Translation", author: "Eleanor Sinclair", genre: "Romance", condition: "Like New" },
  { title: "Echo Chamber", author: "Jonathan Reid", genre: "Mystery", condition: "Good" },
  { title: "Infernal Secrets", author: "Catherine Moore", genre: "Horror", condition: "Used" },
  { title: "Shadows of the Past", author: "Matthew Turner", genre: "Historical Fiction", condition: "Fair" },
  { title: "Digital Nightmare", author: "Ryan Walker", genre: "Science Fiction", condition: "Worn" },
  { title: "The Eternal Watch", author: "Rachel Adams", genre: "Fantasy", condition: "New" },
  { title: "Winds of Change", author: "Henry Bennett", genre: "Drama", condition: "Like New" },
  { title: "Memoirs of the Unknown", author: "Grace Anderson", genre: "Mystery", condition: "Good" },
  { title: "Beyond Reality", author: "Ethan Williams", genre: "Science Fiction", condition: "Used" },
  { title: "Through the Fire", author: "Sophia Campbell", genre: "Thriller", condition: "Fair" },
  { title: "Labyrinth of Lies", author: "George Harrison", genre: "Mystery", condition: "Worn" },
  { title: "Fading Footprints", author: "Jessica Coleman", genre: "Historical Fiction", condition: "New" },
  { title: "Broken Vows", author: "Nathan Scott", genre: "Romance", condition: "Like New" },
  { title: "Secrets of the Ancients", author: "Olivia Bennett", genre: "Fantasy", condition: "Good" },
  { title: "Midnight Shadows", author: "Liam Edwards", genre: "Crime", condition: "Used" },
  { title: "Neon Nights", author: "Chloe Morgan", genre: "Cyberpunk", condition: "Fair" },
  { title: "The Lost Expedition", author: "Christopher Nolan", genre: "Adventure", condition: "Worn" },
  { title: "Whispers in the Dark", author: "Amelia Foster", genre: "Horror", condition: "New" },
  { title: "Echo of the Void", author: "Daniel Brooks", genre: "Science Fiction", condition: "Like New" },
  { title: "Stormchasers", author: "Emily Taylor", genre: "Adventure", condition: "Good" },
  { title: "The Forbidden City", author: "Robert Davis", genre: "Historical Fiction", condition: "Used" },
  { title: "The Final Countdown", author: "Victoria Harris", genre: "Thriller", condition: "Fair" },
  { title: "The Vanishing Point", author: "Benjamin Clark", genre: "Mystery", condition: "Worn" },
];

// Function to add books to Firestore
async function addBooksToFirestore() {
  try {
    const booksCollection = collection(db, "books");

    for (const book of books) {
      const availability = Math.random() < 0.2 ? "Borrowed" : "Available";

      await addDoc(booksCollection, { ...book, availability });
      console.log(`Added book: ${book.title} (Availability: ${availability})`);
    }

    console.log("All test books added successfully!");
  } catch (error) {
    console.error("Error adding books:", error);
  }
}

// Run the function
addBooksToFirestore();