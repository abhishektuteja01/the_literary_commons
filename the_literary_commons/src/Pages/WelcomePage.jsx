import BaseTemplate from "./BaseTemplate";
import "../Styles/HomePage.css";

export default function WelcomePage() {
    return (
        <BaseTemplate>
            <div style={{ backgroundColor: "rgb(26, 89, 112)", minHeight: "100vh" }}>
                <div className="homepage-container">
                    <h1 style={{color: "#FFFFFF", marginBottom: 100, font: 1000}}>WELCOME TO THE LITERARY COMMONS</h1>
                    <h5 style={{color: "#FFFFFF"}}>
                        The Literary Commons is a platform for book lovers to share, donate, and exchange books.
                    </h5>
                    <p style={{color: "#FFFFFF"}}>
                        To get started: <br/><br/>  Click on "Books" to view and search all books. <br/> Click on "Donate a Book" to donate a pre-loved book to the library.
                    </p>
                </div>
            </div>
        </BaseTemplate>
    );
}