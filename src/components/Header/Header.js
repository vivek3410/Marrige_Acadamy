import React    from "react";
import template from "./Header.jsx";
// import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Header;
