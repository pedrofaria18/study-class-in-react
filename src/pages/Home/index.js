import "./style.css";
import { Component } from "react";

import { Posts } from "../../components/Posts";
import { loadPosts } from "../../utils/loadPosts";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2,
    searchValue: "",
  };

  async componentDidMount() {
    const { postsPerPage, page } = this.state;
    const fullPosts = await loadPosts();
    this.setState({
      posts: fullPosts.slice(page, postsPerPage),
      allPosts: fullPosts,
    });
  }

  loadMorePosts = () => {
    const { posts, allPosts, page, postsPerPage } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);
    this.setState({
      posts: posts,
      page: nextPage,
    });
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      searchValue: value,
    });
  };

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = !!searchValue
      ? allPosts.filter((post) =>
          post.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      : posts;

    return (
      <section className="container">
        <Input value={searchValue} handleChange={this.handleChange} placeHolder="Type your search" />
        {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
        {filteredPosts.length === 0 && <h1> No posts found </h1>}
        <div className="buttonContainer">
          {!searchValue && (
            <Button
              disabled={noMorePosts}
              text="Load More Posts"
              onClick={this.loadMorePosts}
            />
          )}
        </div>
      </section>
    );
  }
}
