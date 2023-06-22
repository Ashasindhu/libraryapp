import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context.';
import './index.css';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import { Auth0Provider } from '@auth0/auth0-react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="http://dev-oulcmmis67ifinqx.us.auth0.com"
    clientId="VvaQuPFbCxYfAg3uCbXxEeVcvx3KOz11"
     authorizationParams={{
      redirect_uri: window.location.origin
     }}
     
  >
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />}>
          <Route path = "about" element = {<About />} />
          <Route path = "book" element = {<BookList />} />
          <Route path = "/book/:id" element = {<BookDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
  </Auth0Provider>
);

