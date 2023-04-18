import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const firstBook = {
  title: "The Last Thing He Told Me: A Novel",
  author: "Laura Dave",
  img: "./images/book-1.jpg",
};

const secondBook = {
  title:
    "You Can't Joke About That: Why Everything Is Funny, Nothing Is Sacred, and We're All in This Together",
  author: "Kat Timpf",
  img: "./images/book-2.jpg",
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
};

const Book = ({ title, author, img }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
