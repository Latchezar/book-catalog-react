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
          <a className="nav-link active" href={this.props.url}>
            {this.props.text}
          </a>
        </li>
      );
    } else {
      return (
        <li>
          <a className="nav-link" href={this.props.url}>
            {this.props.text}
          </a>
        </li>
      );
    }
  }
}

export default MenuListItem;
