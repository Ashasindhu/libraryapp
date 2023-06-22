import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book .</h2><br />
                <p className='header-text fs-18 fw-3'>Search here for the book of your choice based on fields like Book name,Author name,Genre,Year of publishing etc.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header