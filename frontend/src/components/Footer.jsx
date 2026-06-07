import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-inner">
                <div>
                  <p>&copy; {new Date().getFullYear()} Reethu P. All rights reserved.</p>
                </div>
                <div>
                  <p>Contact: <a href="mailto:230374.it@rmkec.ac.in">230374.it@rmkec.ac.in</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;