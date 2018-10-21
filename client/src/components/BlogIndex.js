import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import BlogHeader from './blogheader';
import { fetchAll } from '../actions';
import './BlogIndex.css';

class BlogIndex extends Component {
  componentDidMount() {
    this.props.fetchAll();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <div key={post.sys.id} className="paper">
          <div className="imgContainer">
            <img
              className="previewImg"
              src={post.fields.heroImage.fields.file.url}
              alt=""
            />
          </div>
          <div>
            <h2>{post.fields.title}</h2>
            <hr />
            <p>
              {post.fields.description.slice(0, 65)}
              ...
            </p>
            {post.sys.updatedAt.slice(0, 10)}/
            <Link
              to={{
                pathname: `/blog/${post.sys.id}`,
                state: { post }
              }}
            >
              Read More
            </Link>
          </div>
        </div>
      );
    });
  }

  render() {
    // console.log(this.props.posts);
    return (
      <div className="App">
        <BlogHeader />
        <div>
          <div className="blog">
            <div className="littletag">BLOG</div>
            <div className="blogposts">{this.renderPosts()}</div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(
  mapStateToProps,
  { fetchAll }
)(BlogIndex);

// <li key={post.sys.id}>
//   <h1>{post.fields.title}</h1>
// </li>
