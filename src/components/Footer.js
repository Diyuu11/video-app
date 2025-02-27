// Footer.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
         

          {/* Navigation Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
            <Link to="/privacy-policy" className="text-white">
                  Privacy Policy
                </Link>
           
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <a href="https://www.facebook.com" target="_blank" className="text-white mr-3" aria-label="Facebook" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i> Facebook
            </a>
            
            <a href="https://www.twitter.com" target="_blank" className="text-white mr-3" aria-label="Twitter" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            
            <a href="https://www.instagram.com" target="_blank" className="text-white" aria-label="Instagram" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            
          </div>
        </div>
        <div className="text-center mt-3">
          <p>&copy; 2024 Video App. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
