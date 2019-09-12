import React from "react";

class SearchForm extends React.Component {
  render() {
    const action = "/category/";
    return (
      <form
        className="form-inline my-2 my-lg-0"
        id="search-form"
        action={action}
      >
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          name="category"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default SearchForm;
