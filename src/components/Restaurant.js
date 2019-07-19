import React, { Component } from 'react'

export class Restaurant extends Component {
   render() {
      const r = this.props.restaurant
      return (
         <div>
            <a href={`${r.url}`}>{r.name}</a>
         </div>
      )
   }
}

export default Restaurant
