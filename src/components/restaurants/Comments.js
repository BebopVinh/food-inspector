import React, { Component } from 'react'

export class Comments extends Component {

   renderComments = (comments) => {
      return comments.map(comment => {
         console.log("from comments component: ", comment)
         return <li>{comment.content}</li>
      })
   }

   render() {
      return (
         <ul>
            {this.renderComments(this.props.comments)}
         </ul>
      )
   }
}

export default Comments
