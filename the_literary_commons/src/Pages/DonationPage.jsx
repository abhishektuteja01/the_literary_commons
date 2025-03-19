import { useState } from "react";
import myDB from "../db/MyFireStore.js";
import BaseTemplate from "./BaseTemplate.jsx";
import '../Styles/HomePage.css';

export default function DonationPage() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [condition, setCondition] = useState("");

  const handleSubmit = async () => {
    myDB.addBook(title, author, genre, condition);
  
    setTitle("");
    setAuthor("");
    setGenre("");
    setCondition("");}
  return (
    <BaseTemplate>
      <div style={{ backgroundColor: "rgb(26, 89, 112)", minHeight: "100vh" }}>
        <div className="homepage-container">
        <h3 style={{ marginBottom: "40px", color: "#ffffff"}}>Donate a Book</h3>
          <h6 style={{ color: "#ffffff" }}>Title</h6>
          <input 
            type="text"
            className="search-bar" 
            placeholder="Eg. The Great Gatsby"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <h6 style={{ color: "#ffffff" }}>Author</h6>
          <input 
            type="text"
            className="search-bar"  
            placeholder="Eg. Jane Doe"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <br />
          <h6 style={{ color: "#ffffff" }}>Genre</h6>
          <input 
            type="text"
            className="search-bar"  
            placeholder="Eg. Fiction, Non-Fiction, Mystery"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
          <br />
          <h6 style={{ color: "#ffffff" }}>Condition</h6>
          <input 
            type="text" 
            className="search-bar" 
            placeholder="Eg. Like New, Good, Fair, Poor"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
          />
          <button className="submit-button" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </BaseTemplate>
)}
