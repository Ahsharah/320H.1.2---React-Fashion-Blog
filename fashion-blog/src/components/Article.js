import React from 'react';

const Article = ({ date, title, image, content }) => (
    <article>
        <h3>{date}</h3>
        <h2>{title}</h2>
        <img src={image} alt={title} />
        <p>{content}</p>
        <a href="#" className="continues">Continues...</a>
    </article>
);

export default Article;