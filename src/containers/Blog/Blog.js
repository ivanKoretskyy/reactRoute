import React, { Component } from "react";
// import axios from 'axios';
import axios from "../../axios";

import Post from "../../components/Post/Post";
import NewPost from "../NewPost/NewPost";
import Posts from "../Posts/Posts";
import "./Blog.css";
import { Route, Link, NavLink, Switch } from "react-router-dom";

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
          <Route path="/new-post" component={NewPost} exact />
          <Route path="/posts" component={Posts} />
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
