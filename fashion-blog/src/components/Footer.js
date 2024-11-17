import React from 'react';

const Footer = ({ links }) => (
    <footer>
        <nav aria-label="Footer Navigation" role="navigation">
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.url}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </nav>
        <p className="copyright">&copy; 2013 Valet Industries, Inc</p>
    </footer>
);

export default Footer;