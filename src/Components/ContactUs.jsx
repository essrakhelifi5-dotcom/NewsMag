import React from "react";

function ContactUs() {
  return (
    <div className="container my-5">
      <h2 className="mb-4">Contact Us</h2>

      <p className="mb-2">
        If you have any questions, feel free to reach out to us!
      </p>

      <ul className="list-unstyled">
        <li className="mb-2">
          <strong>Email:</strong> contact@newsmag.com
        </li>
        <li className="mb-2">
          <strong>Phone:</strong> +1 234 567 890
        </li>
      </ul>

      <p className="text-muted small">We usually respond within 24 hours.</p>
    </div>
  );
}

export default ContactUs;
