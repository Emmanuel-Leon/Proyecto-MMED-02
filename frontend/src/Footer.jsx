import React from 'react'
import './App.css'
import { BrowserRouter as  Link } from 'react-router-dom';

export default function Footer() {
  
  return (


  <div className="pyfoot">
    <ul>
      <Link> <a href="#" className="nav-item">Home</a></Link> 
      <Link> <a href="#" className="nav-item">Features</a> </Link>
      <Link> <a href="#" className="nav-item">Pricing</a> </Link>
      <Link> <a href="#" className="nav-item">FAQs</a> </Link>
      <Link> <a href="#" className="nav-item">About</a> </Link>
    </ul>
    <hr className='line01'/>
    <p className="nav-item" >&copy; 2024 Company, Inc</p>
  </div>



  )
}
