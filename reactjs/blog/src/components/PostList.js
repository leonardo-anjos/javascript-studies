import React from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {

  render() {
    console.log(this.props.posts)
    return <div>PostList</div>
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map(post => {
      return(
        <div className="item" key={post.id}></div>
      );
    })
  } 

}

const mapStateToProps = state => {
  return { posts: state.posts }
}

export default connect(
  null,
  { fetchPosts }
)(PostList);