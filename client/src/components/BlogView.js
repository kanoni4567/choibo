import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Markdown } from 'react-showdown';
import { fetchPost } from '../actions';
import BlogHeader from './BlogHeader';
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
        <BlogHeader />
        <div>
          <div className="blog">
            <div className="littletag">BLOG</div>
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
