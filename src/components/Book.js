import React from "react";
import noimage from "../noimage.png";
import Loading from "./Loading";
import { ParamByName } from "../services/Extractors";

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: undefined
    };
  }

  makeFetch(id) {
    const url = "https://www.googleapis.com/books/v1/volumes/" + id;
    fetch(url)
      .then(response => response.json())
      .then(responseJson => this.setState({ book: responseJson }));
  }

  checkBook(books, id) {
    if (books.length === 0) {
      return this.state.book;
    } else {
      return books.filter(b => b.id === id)[0];
    }
  }

  componentDidMount() {
    const books = this.props.books;
    const id = ParamByName("id", this.props.location.search);
    const book = this.checkBook(books, id);
    if (book === undefined) {
      this.makeFetch(id);
    } else {
      this.setState({
        book: book
      });
    }
  }

  render() {
    const book = this.state.book;
    console.log(book);
    if (book === undefined) {
      return <Loading />;
    } else {
      try {
        return (
          <div className="row">
            <div className="col-md-6">
              <img src={book.volumeInfo.imageLinks.thumbnail} alt={noimage} />
            </div>
            <div className="col-md-6">
              <p>Title: {book.volumeInfo.title}</p>
              <p>Pages: {book.volumeInfo.pageCount}</p>
            </div>
          </div>
        );
      } catch (error) {
        console.log(error);
        return (
          <div className="row">
            <div className="col-md-6">
              <img src={noimage} alt={noimage} />
            </div>
            <div className="col-md-6">
              <p>Title: {book.volumeInfo.title}</p>
              <p>Pages: {book.volumeInfo.pageCount}</p>
            </div>
          </div>
        );
      }
    }
  }
}

export default Book;
