import React, { Component } from 'react';
import { connect } from 'react-redux'
import { formatTimestamp } from '../../utils/Utils'
import { Link } from 'react-router-dom'
import * as actions from '../../actions/commentActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'


class SinglePost extends Component {
  componentDidMount() {
    this.props.fetchCommentForPost(this.props.post.id)
  }

  render() {
    const { post, comments, votePost } = this.props

    return (
      <div>
        {post && (
          <div className="post">
            <div className="post-description">
              <Link to={`/${post.category}/${post.id}`}>
                <div className="post-title"><h3>{post.title}</h3></div>
              </Link>
              <div className="post-body"><p>{post.body}</p></div>

              <div className="post-likes">
              <button onClick={() => {
                  votePost(post.id, "upVote")
                }} >
                <FontAwesomeIcon icon={faThumbsUp}/>
              </button>
              <button onClick={() => {
                  votePost(post.id, "downVote")
                }} >
                <FontAwesomeIcon icon={faThumbsDown} />
              </button>
              </div>
              <div className="post-likes-comments">
                {post.voteScore} votes {comments && comments ? comments.length : 0} comments
              </div>
            </div>
            <div>
              <div className="post-author"><p><strong>Category: </strong> {post.category}</p></div>
              <div className="post-author"><p><strong>Author: </strong> {post.author}</p></div>
              <div className="post-author"><p><strong>Time: </strong> {formatTimestamp(post.timestamp)}</p></div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

function mapStateToProps({ comments }, { post }) {
  return {
    comments: comments[post.id],
  }
}

export default connect(mapStateToProps, actions)(SinglePost)
