# The Literary Commons 📚

**The Literary Commons** is a community-driven platform designed to facilitate the donation, discovery, and borrowing of books. Built using React and Firebase, the platform encourages readers to share their collections, explore books by genre or author, and leave reviews for the community.

---

## 🚀 Features

- 📖 Donate books by entering title, author, genre, and condition.
- 🔍 Browse and search for books using filters.
- 📦 Mark books as borrowed or returned.
- ✍️ Leave and view reviews for each book.
- 🧠 View detailed information and update book entries.
- ☁️ Data is persisted using Firestore on the frontend (no backend server).
- 🔄 Dynamic routing with React Router and persistent URLs.
- 🔐 Fully client-side deployed on Firebase Hosting.

---

## 🛠️ Tech Stack

- **Frontend:** React with Hooks
- **Routing:** React Router
- **State Management:** useState, useEffect
- **Database:** Firestore (Firebase)
- **Deployment:** Firebase Hosting
- **Styling:** CSS, Bootstrap

---

## 📁 Project Structure

```
the_literary_commons/
├── src/
│   ├── db/
│   │   ├── MyFireStore.js       # Firestore interaction module
│   │   └── addBooks.js          # Script to populate sample data
│   ├── Pages/
│   │   ├── BaseTemplate.jsx     # Page layout with navbar and footer
│   │   ├── BookDetails.jsx      # Single book details view and editor
│   │   ├── Books.jsx            # Homepage with book search/listing
│   │   ├── DonationPage.jsx     # Book donation form
│   │   └── WelcomePage.jsx      # Landing page
│   ├── Styles/
│   │   └── HomePage.css         # Homepage-specific styles
│   └── main.jsx                 # Entry point and routing setup
├── firebase.json                # Firebase hosting config
├── index.html                   # Base HTML file for Vite
├── package.json                 # Project dependencies and scripts
├── vite.config.js               # Vite bundler configuration
└── README.md                    # Project documentation
```

---

## 🧪 Usage Instructions

### 📦 Install dependencies
```bash
npm install
```

### 🔨 Run the app locally
```bash
npm run dev
```

### 🔥 Build for production
```bash
npm run build
```

### 🌐 Deploy to Firebase
```bash
firebase deploy
```

---

## 🧩 Project Modules

- `HomePage` – Displays all books with search and filter capabilities.
- `DonationPage` – Form to donate new books.
- `BookDetails` – Detailed book view with update and review options.
- `MyFireStore.js` – Module handling all Firestore data interactions.
- `BaseTemplate` – Layout wrapper with NavBar and Footer.

---

## 🔗 Resources

- **GitHub Repository:** _[https://theliterarycommons.web.app/]_
- **Figma Mockups:** _[https://www.figma.com/design/y1zEKwltMuQQTUcwoimJHq/The-Literary-Commons?node-id=0-1&t=M1hnUh1hNlHHuqSh-1]_
- **Lucidchart Modules Diagram:** _[https://lucid.app/lucidchart/b2fa5783-b588-45e1-a7d7-d12d169067f6/edit?invitationId=inv_73781a5b-6e62-471f-8838-653222681788]_
- **Live Website:** _[https://theliterarycommons.web.app/]_
- **Youtube Video:** _[https://youtu.be/5tUMih0N1RA]_
- 
---

## 🪪 License

This project is licensed under the [MIT License](LICENSE).

---

## ✨ Contributors

- Abhishek Tuteja (Developer & Designer)

---

## 🤖 ChatGPT Usage Disclosure

Throughout the development of this project, ChatGPT (GPT-4) was used as a coding assistant to enhance productivity and explore design ideas. Below is a transparent breakdown of its involvement:

### 🔍 Model Used
- **Model:** ChatGPT (GPT-4)
- **Platform:** chat.openai.com

---

### 🧾 Areas Where ChatGPT Was Used

#### 1. 📄 Writing the README.md File
- **Prompt Given:**  
  "Now the next step is to change this readme file. I want you to include everything regarding the code, leave a place for GitHub, figma, lucid chart and website link..."
- **Response Summary:**  
  Generated a structured README with appropriate sections, deployment instructions, and placeholders.

#### 2. 🎨 CSS Styling and Layout
- **Prompt Given:**  
  "How to change the background color of the whole homepage including the navbar and everything till the bottom or like add a wallpaper behind?"
- **Response Summary:**  
  Provided CSS targeting `body`, `html`, and container classes to apply full-height styling and background.

#### 3. 🔍 Adding Search Bar Functionality
- **Prompt Given:**  
  "How do I add a search bar in jsx?"
- **Response Summary:**  
  Suggested JSX with `useState` and `onKeyDown` to handle dynamic search filtering by title and author.

#### 4. 🗣️ Implementing Review Section in BookDetails
- **Prompt Given:**  
  "I want to retrieve all the IDs from collection and add a column reviews and then add random reviews on them. Now in book details under Reviews, I want to show each review and then a function to add reviews just below all the reviews part."
- **Response Summary:**  
  Provided logic to update Firestore with a `reviews` array, render reviews in a `<textarea>`, and use an input section with `addReview()` to submit new entries.

#### 5. 🗣️ Creating a section in README.md for GenAI Usage
- **Prompt Given:**  
  "Now in the end after all of it, let's add a detailed disclaimer of how I used chatgpt. I want to include the model I used, prompt I gave and the response chatgpt gave. I want to include that I used chatgpt for readme.md, the css part, how to add a search box, and ways to include a review section to the books detail page."
- **Response Summary:**  
  Provided this section which I added to README.md.
---
