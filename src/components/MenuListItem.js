import React from "react";
import { Link } from "react-router-dom";

class MenuListItem extends React.Component {
  navClick = () => {
    this.props.search(this.props.text);
  };

  render() {
    const shouldBeActive = this.props.isActive;
    if (shouldBeActive) {
      return (
        <li>
          <Link
            className="nav-link active"
            to={"/category?category=" + this.props.text}
          >
            {this.props.text}
          </Link>
        </li>
      );
    } else {
      return (
        <li>
          <Link
            className="nav-link"
            to={"/category?category=" + this.props.text}
          >
            {this.props.text}
          </Link>
        </li>
      );
    }
  }
}

export default MenuListItem;
