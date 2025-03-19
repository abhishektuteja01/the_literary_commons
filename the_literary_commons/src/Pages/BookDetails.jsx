import BaseTemplate from "./BaseTemplate";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import myDB from "../db/MyFireStore.js";

export default function BookDetails() {
    const { id } = useParams(); // Get the book ID from the URL
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [updatedBook, setUpdatedBook] = useState({ title: "", author: "", genre: "", condition: "" });
    const navigate = useNavigate();
    useEffect(() => {
        async function fetchBook() {
            const fetchedBook = await myDB.getBookById(id);
            if (fetchedBook) {
                setBook(fetchedBook);
                setUpdatedBook(fetchedBook); // Initialize inputs with current data
            }
            setLoading(false);
        }

        fetchBook();
    }, [id]);

    const handleChange = (e) => {
        setUpdatedBook({ ...updatedBook, [e.target.name]: e.target.value });
    };

    const handleDelete = async () => {
        await myDB.deleteById(id);
        alert("Book deleted successfully!");
        navigate("/");
        
    }
    const handleUpdate = async () => {
        await myDB.updateById(id, updatedBook);
        alert("Book details updated successfully!");
    };

    return (
        <BaseTemplate>
            <div style={{ backgroundColor: "rgb(26, 89, 112)", minHeight: "100vh" }}>
                <div className="homepage-container">
                    <h1>Book Details</h1>
                    <br />
                    {loading ? (
                        <p>Loading book details...</p>
                    ) : book ? (
                        <div className="book-edit-form">
                            <div>
                                <label style={{color: "#ffffff"}}>Title:&nbsp;&nbsp;</label>
                            </div>
                            <div>
                                <input style={{marginBottom: 20}} type="text" name="title" value={updatedBook.title} onChange={handleChange} />
                            </div>

                            <div>
                                <label style={{color: "#ffffff"}}>Author:&nbsp;&nbsp;</label>
                            </div>
                            <div>
                                <input style={{marginBottom: 20}} type="text" name="author" value={updatedBook.author} onChange={handleChange} />
                                <br />
                            </div>

                            <div>
                                <label style={{color: "#ffffff"}}>Genre:&nbsp;&nbsp;</label>
                            </div>
                            <div>
                                <input style={{marginBottom: 20}} type="text" name="genre" value={updatedBook.genre} onChange={handleChange} />
                            </div>

                            <div>
                                <label style={{color: "#ffffff"}}>Condition:&nbsp;&nbsp;</label>
                            </div>
                            <div> 
                                <input style={{marginBottom: 20}} type="text" name="condition" value={updatedBook.condition} onChange={handleChange} />
                            </div>

                            <button className="submit-button" style ={{ marginRight: 16}} onClick={handleUpdate}>Update</button>
                            <button className="submit-button" style = {{ color: "#FF0000"}} onClick={handleDelete}>Delete</button>
                            <br />
                            <button className="submit-button" onClick={() => window.history.back()}>Back</button>
                        </div>
                    ) : (
                        <p>Book not found.</p>
                    )}
                </div>
            </div>
        </BaseTemplate>
    );
}