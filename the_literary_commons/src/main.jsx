import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import HomePage from './Pages/Books.jsx';
import DonationPage from './Pages/DonationPage.jsx';
import { BrowserRouter, Routes, Route} from "react-router";
import BookDetails from './Pages/BookDetails.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import WelcomePage from './Pages/WelcomePage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/books" element={<HomePage />} />
        <Route path ="/donatepage" element = {<DonationPage/>}/>
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);