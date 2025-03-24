import BaseTemplate from "./BaseTemplate";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import myDB from "../db/MyFireStore.js";
import {Row, Col} from "react-bootstrap";

export default function BookDetails() {
    const { id } = useParams(); // Get the book ID from the URL
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [updatedBook, setUpdatedBook] = useState({ title: "", author: "", genre: "", condition: "" });
    const [reviewerName, setReviewerName] = useState("");
    const [reviewText, setReviewText] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        async function fetchBook() {
            const fetchedBook = await myDB.getBookById(id);
            if (fetchedBook) {
                setBook(fetchedBook);
                setUpdatedBook(fetchedBook);
            }
            setLoading(false);
        }fetchBook();
    }, [id]);

    const handleChange = (e) => {
        setUpdatedBook({ ...updatedBook, [e.target.name]: e.target.value });
    };

    const handlereview = async () => {
        if (!reviewerName || !reviewText) {
            alert("Please fill out both fields.");
            return;
        }

        const newReview = { reviewer: reviewerName, text: reviewText };
        await myDB.addReview(id, newReview);

        const updated = await myDB.getBookById(id);
        setBook(updated);
        setReviewerName("");
        setReviewText("");
    };

    const handleDelete = async () => {
        await myDB.deleteById(id);
        alert("Book deleted successfully!");
        navigate("/books");
        
    }
    const handleUpdate = async () => {
        await myDB.updateById(id, updatedBook);
        alert("Book details updated successfully!");
    };

    return (
        <BaseTemplate>
            <div style={{ backgroundColor: "rgb(26, 89, 112)"}}>
                <div>
                    <h1 style={{textAlign: "center", color: "#FFFFFF", marginBottom: 40}}>{updatedBook.title}</h1>
                    <Row>
                    <Col className="homepage-container">
                        <h3 style={{ color: "#FFFFFF" }}>Add a Review</h3>
                        <input
                            style={{ marginBottom: 10, textAlign: "center" }}
                            type="text"
                            placeholder="Your Name"
                            value={reviewerName}
                            onChange={(e) => setReviewerName(e.target.value)}
                        />
                        <input
                            style={{ marginBottom: 10, textAlign: "center" }}
                            type="text"
                            placeholder="Your Review"
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                        />
                        <button className="submit-button" style={{ marginTop: 10 }} onClick={handlereview}>Submit Review</button>
                    </Col>
                    <Col className = "homepage-container">

                            <h3 style={{color: "#FFFFFF"}}>Update Details</h3><br />
                            {loading ? (
                                <p>Loading book details...</p>
                            ) : book ? (
                                <div className="book-edit-form">
                                    <div>
                                        <label style={{color: "#ffffff"}}>Title:&nbsp;&nbsp;</label>
                                    </div>
                                    <div>
                                        <input style={{marginBottom: 20, textAlign: "center"}} type="text" name="title" value={updatedBook.title} onChange={handleChange} />
                                    </div>

                                    <div>
                                        <label style={{color: "#ffffff"}}>Author:&nbsp;&nbsp;</label>
                                    </div>
                                    <div>
                                        <input style={{marginBottom: 20, textAlign: "center"}} type="text" name="author" value={updatedBook.author} onChange={handleChange} />
                                        <br />
                                    </div>

                                    <div>
                                        <label style={{color: "#ffffff"}}>Genre:&nbsp;&nbsp;</label>
                                    </div>
                                    <div>
                                        <input style={{marginBottom: 20, textAlign: "center"}} type="text" name="genre" value={updatedBook.genre} onChange={handleChange} />
                                    </div>

                                    <div>
                                        <label style={{color: "#ffffff"}}>Condition:&nbsp;&nbsp;</label>
                                    </div>
                                    <div> 
                                        <input style={{marginBottom: 20, textAlign: "center"}} type="text" name="condition" value={updatedBook.condition} onChange={handleChange} />
                                    </div>

                                    <button className="submit-button" style ={{ marginRight: 16}} onClick={handleUpdate}>Update</button>
                                    <button className="submit-button" style = {{ color: "#FF0000"}} onClick={handleDelete}>Delete</button>
                                    <br />
                                    <button className="submit-button" onClick={() => window.history.back()}>Back</button>
                                </div>
                            ) : (
                                <p>Book not found.</p>
                            )}
                    </Col>
                    
                    <Col className="homepage-container">
                        <h3 style={{ color: "#FFFFFF" }}>Reviews</h3>
                        <textarea
                            style={{
                                width: "75%",
                                height: "500px",
                                padding: "10px",
                                borderRadius: "5px",
                                backgroundColor: "rgb(26, 89, 112)",
                                color: "#ffffff",
                                resize: "none"
                            }}
                            readOnly
                            value={book?.reviews && book.reviews.length > 0 
                                ? book.reviews.map(review => `${review.reviewer}: ${review.text}`).join("\n \n") 
                                : "There are no reviews for this book yet."
                            }
                        />
                    </Col>

                    

                    
                </Row>
                </div>
            </div>
        </BaseTemplate>
    );
}