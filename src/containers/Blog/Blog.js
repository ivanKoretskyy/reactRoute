import React, { Component } from "react";
// import axios from 'axios';
import axios from "../../axios";

import Post from "../../components/Post/Post";

// we want to lazy load this
// import NewPost from "../NewPost/NewPost";
import Posts from "../Posts/Posts";
import "./Blog.css";
import { Route, Link, NavLink, Switch, Redirect } from "react-router-dom";
import asyncComponent from "../../hoc/AsyncComponent";
const AsyncNewPost = asyncComponent(() => {
  return import("../NewPost/NewPost");
});

class Blog extends Component {
  state = {
    selectedPostId: null,
    error: false
  };

  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/posts" exact activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post"
                  }}
                  exact
                  activeClassName="active"
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route path="/new-post" component={AsyncNewPost} exact />
          <Route path="/posts" component={Posts} />
          <Redirect from="/" to="/posts" exact />
          <Route render={() => <h1>Page Not found</h1>} />
        </Switch>
        {/* <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section> */}
      </div>
    );
  }
}

export default Blog;
