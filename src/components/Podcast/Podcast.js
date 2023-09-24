import React    from "react";
import template from "./Podcast.jsx";

class Podcast extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Podcast;
