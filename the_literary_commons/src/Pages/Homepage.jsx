import React, { useState, useEffect } from "react";
import BaseTemplate from "./BaseTemplate.jsx";
import myDB from '../db/MyFireStore.js';
import '../Styles/HomePage.css';

export default function HomePage() {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchBooks() {
      try {
        const bookData = await myDB.getBooks();
        setBooks(bookData);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    }
    fetchBooks();
  }, []);

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      setSearchQuery(event.target.value.toLowerCase());
    }
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <BaseTemplate>
              <div style={{ backgroundColor: "rgb(26, 89, 112)", minHeight: "100vh" }}>
        <div className="homepage-container">
          <input 
            type="text" 
            placeholder="Search books by title or author" 
            className="search-bar"
            onKeyDown={handleSearch}
          />
          <br />
          <h2 style={{ color: "#ffffff" }}>Books</h2>
          <div className="book-list-container">
            <div className="book-list">
              {filteredBooks.length > 0 ? (
                filteredBooks.map((book) => (
                  <div key={book.id} className="book-card">
                    <h3>{book.title}</h3>
                    <p><strong>Author:</strong> {book.author}</p>
                    <p><strong>Genre:</strong> {book.genre}</p>
                    <p><strong>Condition:</strong> {book.condition}</p>
                  </div>
                ))
              ) : (
                <p>No books found</p>
              )}
            </div>
            </div>
          </div>
        </div>
    </BaseTemplate>
  );
}