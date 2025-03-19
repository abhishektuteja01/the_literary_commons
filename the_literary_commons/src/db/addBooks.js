// Import Firebase dependencies
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore/lite";

// Firebase configuration (same as in your `MyFireStore.js`)
const firebaseConfig = {
  apiKey: "AIzaSyChewNij6icScPJCBp8uB_9QRU7RLvvqQ8",
  authDomain: "theliterarycommons.firebaseapp.com",
  projectId: "theliterarycommons",
  storageBucket: "theliterarycommons.firebasestorage.app",
  messagingSenderId: "339469816910",
  appId: "1:339469816910:web:f15f6fab23c65cf9911f1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// List of books to add
const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic", condition: "Excellent" },
  { title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance", condition: "Good" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic", condition: "Like New" },
  { title: "Moby-Dick", author: "Herman Melville", genre: "Adventure", condition: "Worn" },
  { title: "Brave New World", author: "Aldous Huxley", genre: "Dystopian", condition: "Good" },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Fiction", condition: "Fair" },
  { title: "Crime and Punishment", author: "Fyodor Dostoevsky", genre: "Philosophical", condition: "Used" },
  { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", condition: "Like New" },
  { title: "War and Peace", author: "Leo Tolstoy", genre: "Historical", condition: "Good" },
  { title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", genre: "Philosophical", condition: "Used" },
  { title: "Frankenstein", author: "Mary Shelley", genre: "Horror", condition: "Fair" },
  { title: "Dracula", author: "Bram Stoker", genre: "Horror", condition: "Good" },
  { title: "The Picture of Dorian Gray", author: "Oscar Wilde", genre: "Philosophical", condition: "Like New" },
  { title: "Fahrenheit 451", author: "Ray Bradbury", genre: "Dystopian", condition: "Excellent" },
  { title: "Les Misérables", author: "Victor Hugo", genre: "Historical", condition: "Used" },
  { title: "The Odyssey", author: "Homer", genre: "Epic", condition: "Worn" },
  { title: "The Iliad", author: "Homer", genre: "Epic", condition: "Fair" },
  { title: "The Count of Monte Cristo", author: "Alexandre Dumas", genre: "Adventure", condition: "Good" },
  { title: "The Alchemist", author: "Paulo Coelho", genre: "Philosophical", condition: "Like New" },
  { title: "The Road", author: "Cormac McCarthy", genre: "Post-Apocalyptic", condition: "Used" },
  { title: "Jane Eyre", author: "Charlotte Brontë", genre: "Classic", condition: "Good" },
  { title: "Wuthering Heights", author: "Emily Brontë", genre: "Classic", condition: "Excellent" },
  { title: "One Hundred Years of Solitude", author: "Gabriel García Márquez", genre: "Magical Realism", condition: "Like New" },
  { title: "The Grapes of Wrath", author: "John Steinbeck", genre: "Classic", condition: "Fair" },
  { title: "Dune", author: "Frank Herbert", genre: "Science Fiction", condition: "Good" },
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", genre: "Fantasy", condition: "Excellent" },
  { title: "Catch-22", author: "Joseph Heller", genre: "Satire", condition: "Used" },
  { title: "The Sun Also Rises", author: "Ernest Hemingway", genre: "Classic", condition: "Like New" },
  { title: "The Stranger", author: "Albert Camus", genre: "Philosophical", condition: "Worn" },
  { title: "Slaughterhouse-Five", author: "Kurt Vonnegut", genre: "Science Fiction", condition: "Good" }
];

// Function to add books to Firestore
const addBooksToFirestore = async () => {
  try {
    const booksCollection = collection(db, "books");
    for (const book of books) {
      await addDoc(booksCollection, book);
      console.log(`Added book: ${book.title}`);
    }
    console.log("All books added successfully!");
  } catch (error) {
    console.error("Error adding books:", error);
  }
};

// Run the function
addBooksToFirestore();