import { Component } from "react";
import "./style.css";

import { Post } from "../Post";

export class Posts extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="posts">
        {posts.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </div>
    );
  }
}
