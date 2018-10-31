import React, { Component } from "react";
// import axios from 'axios';
import axios from "../../axios";

import Post from "../../components/Post/Post";
import FullPost from "../FullPost/FullPost";
import NewPost from "../NewPost/NewPost";
import Posts from "../Posts/Posts";
import "./Blog.css";
import { Route, Link } from 'react-router-dom';

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
              <li><Link to="/">Home</Link></li>
              <li><Link to={{
                pathname: 'new-post',
                hash: '#submit',
                search: 'twise=true'
              }}>New Post</Link></li>
            </ul>
          </nav>
        </header>
        <Route path='/' component={Posts} exact />
        <Route path='/new-post' component={NewPost} exact />
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
