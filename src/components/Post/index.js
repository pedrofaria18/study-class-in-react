import { Component } from "react";
import './style.css'

export class Post extends Component {
  render() {
    const { cover, title, body } = this.props.post;
    return (
      <div className="post">
        <img src={cover} alt={title} />
        <div className="post-content">
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      </div>
    );
  }
}
