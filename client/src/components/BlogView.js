import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import _ from 'lodash';
import { Markdown } from 'react-showdown';
// import { fetchAll } from '../actions';
import { fetchPost } from '../actions';
import './BlogIndex.css';

class BlogView extends Component {
  // componentDidMount() {
  //   this.props.fetchAll();
  // }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  renderPostView() {
    if (this.props.current_post) {
      return (
        <div>
          <h3 className="blogviewtitles">{this.props.current_post.title}</h3>
          <Markdown markup={this.props.current_post.body} />
        </div>
      );
    }
  }

  render() {
    // console.log(this.props.current_post);
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <h3 className="App-title">Choiblog</h3>
          </Link>
        </header>
        <div>
          <div className="blog">
            <h3>BLOG</h3>
            <div className="blogview">{this.renderPostView()}</div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.current_post;
}

export default connect(
  mapStateToProps,
  { fetchPost }
)(BlogView);

// export default BlogView;
