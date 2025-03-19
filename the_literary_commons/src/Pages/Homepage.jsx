import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BaseTemplate from "./BaseTemplate.jsx";
import myDB from "../db/MyFireStore.js";
import "../Styles/HomePage.css";

export default function HomePage() {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

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

  const handleAvailabilityToggle = async (book) => {
    const newAvailability = book.availability === "Available" ? "Borrowed" : "Available";
    await myDB.updateById(book.id, { availability: newAvailability });

    // Update local state after Firestore update
    setBooks((prevBooks) =>
      prevBooks.map((b) => (b.id === book.id ? { ...b, availability: newAvailability } : b))
    );
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
          placeholder="Search books..." 
          className="search-bar"
          onKeyDown={handleSearch}
        />
        <br />
        <h2>Books</h2>
        <div className="book-list-container">
          <div className="book-list">
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <div 
                  key={book.id} 
                  className="book-card" 
                  onClick={() => navigate(`/book/${book.id}`)}
                  style={{ cursor: "pointer" }}
                >
                  <h3>{book.title}</h3>
                  <p><strong>Author:</strong> {book.author}</p>
                  <p><strong>Genre:</strong> {book.genre}</p>
                  <p><strong>Condition:</strong> {book.condition}</p>

                  <button
                    className="availability-button"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent navigating to details page on button click
                      handleAvailabilityToggle(book);
                    }}
                    style={{
                      backgroundColor: book.availability === "Available" ? "white" : "black",
                      color: book.availability === "Available" ? "black" : "white",
                      padding: "10px",
                      border: "1px solid black",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    {book.availability === "Available" ? "Borrow" : "Borrowed"}
                  </button>
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