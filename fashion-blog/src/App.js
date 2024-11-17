import React from 'react';
import './App.css'
import Header from './components/Header';
import Nav from './components/Nav';
import Article from './components/Article';
import Footer from './components/Footer';

const App = () => {
    const navLinks = [
        { text: "Women's", url: "#" },
        { text: "Men's", url: "#" },
        { text: "On the Street", url: "#" },
        { text: "The Catwalk", url: "#" },
        { text: "AdWatch", url: "#" },
        { text: "About", url: "#" }
    ];

    const articles = [
        {
            date: "11/12/20",
            title: "On the Street in Brooklyn",
            image: "blog-image-1.jpg",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed dapibus nulla. Vestibulum eu est massa. Sed sagittis vehicula rutrum. Aenean tempor elit at felis suscipit, et maximus quam pellentesque. Sed fermentum diam quis orci faucibus condimentum...",
        },
        {
            date: "11/11/20",
            title: "Vintage in Vogue",
            image: "blog-image-2.jpg",
            content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo...",
        }
    ];

    return (
        <div className="app">
          <Header />
          <Nav links={navLinks} />
          <main>
            {articles.map((article, index) => (
              <Article key={index} {...article} />
            ))}
          </main>
          <Footer links={navLinks} />
        </div>
      );
};

export default App