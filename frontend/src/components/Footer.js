import React from 'react';

const Footer = () => {
  return (
    <footer className="page-footer transparent">
      <div className="footer-copyright black">
        <div className="container">
          &copy; {new Date().getFullYear()} Golightly+
          <a className="right" href="https://golightlyplus.com/contact/">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
