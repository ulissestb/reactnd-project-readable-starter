import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatTimestamp } from '../../utils/Utils'
import { Link } from 'react-router-dom'
import * as commentActions from '../../actions/commentActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt, faEdit, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

class PostComment extends Component {

  onCommentDelete = (comment) => {
    let parentId = comment.parentId
    this.props.deleteComment(comment.id, () => {
      this.props.history.push(`/post/${parentId}`)
      this.props.fetchCommentForPost(comment.parentId)      
    })
  }

  render() {
    return (
      <div>
        {this.props.comments.map(comment => (
          <div className="comment" key={comment.id}>
            <div>
              <p>{comment.body}</p>
              <div className="comment-author"><p> by <b>{comment.author}</b> at {formatTimestamp(comment.timestamp)}</p></div>
              <div className="post-likes">
              <button>
                <FontAwesomeIcon icon={faThumbsUp} onClick={() => {
                  this.props.voteComment(comment.id, comment.parentId, "upVote")
                }}
                />
              </button>
              <button>
                <FontAwesomeIcon icon={faThumbsDown}onClick={() => {
                  this.props.voteComment(comment.id, comment.parentId, "downVote")
                }}
                />
              </button>
                {comment.voteScore} Votes
                </div>
            </div>
            <div className="button-action">
              <Link to={`/${this.props.category}/${comment.parentId}/${comment.id}/edit`}>
                <button><FontAwesomeIcon icon={faEdit}/>Edit</button>
              </Link>
              <button onClick={() => this.onCommentDelete(comment)}><FontAwesomeIcon icon={faTrashAlt} /> Delete</button>
              
            </div>
          </div>
        ))}
      </div>
    )
  }
}

function mapStateToProps({ posts }) {
  return { posts }
}

export default connect(mapStateToProps, commentActions)(PostComment)
