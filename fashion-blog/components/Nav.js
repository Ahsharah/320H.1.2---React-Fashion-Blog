import React from 'react';

const Nav = ({ links }) => (
    <nav aria-label="Main Navigation" role="navigation">
        <ul>
            {links.map((link, index) => (
                <li key={index}>
                    <a href={link.url}>{link.text}</a>
                </li>
            ))}
        </ul>
    </nav>
);

export default Nav;