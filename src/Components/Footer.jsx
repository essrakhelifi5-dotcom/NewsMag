import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-dark text-white mt-auto py-4"
      style={{ color: "white" }}
    >
      <div className="container">
        <div className="row">
          {/* Colonne À propos */}
          <div className="col-md-4 mb-3">
            <h5 className="mb-3">
              <span className="badge bg-light text-dark">NewsMag</span>
            </h5>
            <p className="small">
              Your trusted source for the latest news from around the world.
              Stay informed with real-time updates across multiple categories.
            </p>
          </div>

          {/* Colonne Catégories */}
          <div className="col-md-4 mb-3">
            <h6 className="mb-3">Categories</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <span className="text-white small">Technology</span>
              </li>
              <li className="mb-2">
                <span className="text-white small">Business</span>
              </li>
              <li className="mb-2">
                <span className="text-white small">Sports</span>
              </li>
              <li className="mb-2">
                <span className="text-white small">Entertainment</span>
              </li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h6 className="mb-3">Information</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/contact"
                  className="text-white text-decoration-none small"
                >
                  Contact Us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/about"
                  className="text-white text-decoration-none small"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary my-3" />

        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 small">
              © {currentYear} NewsMag. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="mb-0 small">
              Bringing reliable news to informed minds
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
