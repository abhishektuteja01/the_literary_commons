# Functional Programming Principles in The Literary Commons

This document identifies where core Functional Programming (FP) principles are applied in the codebase of "The Literary Commons" project, provides examples, and includes hypothetical violations (break examples) for better understanding.

---

## 1. Pure Functions
**Definition:** A pure function returns the same result given the same inputs and has no side effects.

### Example (Books.jsx):
```js
const filteredBooks = books.filter((book) =>
  book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
  book.author.toLowerCase().includes(searchQuery.toLowerCase())
);
```
**Found in:** `Books.jsx`

This function only depends on input and does not mutate state or cause side effects.

### Break Example:
```js
function impureFilter(books) {
  books.push({ title: "New Book" }); // mutates input
  return books;
}
```

---

## 2. Immutability
**Definition:** Do not modify objects directly; instead, create and return new versions.

### Example (BookDetails.jsx):
```js
const handleChange = (e) => {
  setUpdatedBook({ ...updatedBook, [e.target.name]: e.target.value });
};
```
**Found in:** `BookDetails.jsx`

Here, a new object is created and passed to the state updater.

### Break Example:
```js
updatedBook[e.target.name] = e.target.value; // direct mutation
```

---

## 3. First-Class Functions
**Definition:** Functions are treated as values and can be passed as arguments, returned, and assigned.

### Example (Books.jsx):
```js
onClick={() => navigate(`/book/${book.id}`)}
```
**Found in:** `Books.jsx`, `BookDetails.jsx`

Arrow function passed as a handler shows function-as-value usage.

### Break Example:
```js
onClick={navigate(`/book/${book.id}`)} // immediately invoked, not passed
```

---

## 4. Higher-Order Functions
**Definition:** Functions that take other functions as input or return functions.

### Example (Books.jsx):
```js
books.map((book) => (
  <div key={book.id}>...</div>
))
```
**Found in:** `Books.jsx`, `BookDetails.jsx`, `MyFireStore.js`

### Break Example:
```js
const renderBooks = [];
for (let i = 0; i < books.length; i++) {
  renderBooks.push(books[i]); // imperative, not functional
}
```

---

## 5. Declarative over Imperative
**Definition:** Express logic of computation without describing control flow.

### Example (Books.jsx):
```js
{filteredBooks.map((book) => (
  <div key={book.id} className="book-card">...</div>
))}
```
**Found in:** JSX rendering of `Books.jsx`, `BookDetails.jsx`

Describes what should happen instead of how.

### Break Example:
```js
for (let i = 0; i < books.length; i++) {
  const el = document.createElement('div');
  el.textContent = books[i].title;
  document.body.appendChild(el);
}
```

---

## Array Method Usage

### `.map()`
- Found in: `Books.jsx`, `BookDetails.jsx`
```js
books.map((book) => (<div key={book.id}>{book.title}</div>))
book.reviews.map(review => `${review.reviewer}: ${review.text}`)
```

### `.filter()`
- Found in: `Books.jsx`
```js
books.filter((book) => book.title.includes(searchQuery))
```

### `.join()`
- Found in: `BookDetails.jsx`
```js
.join("\n \n")
```

---

## Design Patterns in Use

### 1. Module Pattern
```js
function MyFireStoreDB() {
  const myDB = {};
  return myDB;
}
```
**Found in:** `MyFireStore.js`
Encapsulates logic and returns an object of methods.

### 2. Singleton Pattern
```js
const myDB = MyFireStoreDB();
export default myDB;
```
**Found in:** `MyFireStore.js`
Only one instance of `myDB` is used across the app.

### 3. Factory Pattern
```js
const booksList = booksSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
```
**Found in:** `MyFireStore.js`
Consistently formats Firestore docs into usable objects.

---

These examples illustrate how the project adheres to key FP concepts and uses familiar patterns to keep the code clean, predictable, and modular.