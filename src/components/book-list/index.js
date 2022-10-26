import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bookAddedToCart, booksLoaded } from "../../redux";
import BookListItem from "../book-list-item";
import { WithService } from "../hoc-helpers";
import "./styles.module.scss";

const BookList = ({ books, booksLoaded, addBook, service }) => {
  useEffect(() => {
    service.getBooks().then((data) => booksLoaded(data));
  }, []);

  return (
    <ul>
      {books.map((el) => {
        return (
          <li key={`book-${el.id}`}>
            <BookListItem addBook={addBook} book={el} />
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = ({bookList}) => {
  return {
    books: bookList.books,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    booksLoaded: (newBooks) => dispatch(booksLoaded(newBooks)),
    addBook: (bookId) => dispatch(bookAddedToCart(bookId)),
  };
};

export default WithService(
  connect(mapStateToProps, mapDispatchToProps)(BookList)
);
