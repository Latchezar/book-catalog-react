import React from "react";
import BookDetails from "./BookDetails";
import Loading from "./Loading";
import { ParamByName } from "../services/Extractors";

class Details extends React.Component {
  changeCategory = category => {
    this.props.search(category);
  };

  componentDidMount() {
    if (this.props.location.search) {
      const text = this.props.location.search.split("/").pop();
      this.props.search(text);
    } else {
      this.props.search("JavaScript");
    }
  }

  determineCategory = () => {
    if (this.props.location.search) {
      return ParamByName("category", this.props.location.search);
    } else {
      return "JavaScript";
    }
  };

  setTrue() {
    this.setState({ initialized: true });
  }

  render() {
    const category = this.determineCategory();
    if (category !== this.props.category) {
      this.changeCategory(category);
      return <Loading />;
    } else {
      const books = this.props.books;
      const listItems = books.map(book => (
        <BookDetails bookDetails={book} key={book.id} />
      ));
      if (category !== undefined) {
        if (listItems.length === 0) {
          return (
            <div>
              <h2>Book search for {category}</h2>
              <Loading />
            </div>
          );
        } else {
          return (
            <div>
              <h2>Book search for {category}</h2>
              <div className="row">{listItems}</div>
            </div>
          );
        }
      } else {
        if (listItems.length === 0) {
          return (
            <div>
              <h2>Book search for {category}</h2>
              <Loading />
            </div>
          );
        } else {
          return (
            <div>
              <h2>Book search for JavaScript</h2>
              <div className="row">{listItems}</div>
            </div>
          );
        }
      }
    }
  }
}

export default Details;
