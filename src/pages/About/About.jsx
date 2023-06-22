import React from 'react';
import "./About.css";
import aboutnew from "../../images/aboutnew.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutnew} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>
                        The purpose of a library management system is to operate a library with efficiency and at reduced costs. The system being entirely automated streamlines all the tasks involved in operations of the library. The activities of book purchasing, cataloging, indexing, circulation recording and stock checking are done by the software. Such software eliminates the need for repetitive manual work and minimizes the chances of errors.

The library management system software helps in reducing operational costs. Managing a library manually is labor intensive and an immense amount of paperwork is involved. An automated system reduces the need for manpower and stationery. This leads to lower operational costs.

The system saves time for both the user and the librarian. With just a click the user can search for the books available in the library. The librarian can answer queries with ease regarding the availability of books. Adding, removing or editing the database is a simple process. Adding new members or cancelling existing memberships can be done with ease.

Stock checking and verification of books in the library can be done within a few hours. The automated system saves a considerable amount of time as opposed to the manual system.</p>
            <p className='fs-17'>The library management system software makes the library a smart one by organizing the books systematically by author, title and subject. This enables users to search for books quickly and effortlessly.

Students need access to authentic information. An advanced organized library is an integral part of any educational institution. In this digital age a web based library management system would be ideal for students who can access the library’s database on their smartphones.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
