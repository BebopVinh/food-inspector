import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Comments from './Comments'

export class Restaurant extends Component {

   state = {
      comments: [],
      content: ""
   }

   renderMenus = (sections) => {
      return sections.map(section => {
         return <div key={section.position}>
            <h4>{section.section_name}</h4>
            <ul className="menu-items-list">
               {section.menu_items.map(item => {
                  //Slugging item's name to fetch from Edamam Recipe API
                  const itemName = item.name.toLowerCase().replace(/ /g, "-")
                  return <Link to={{
                     pathname: `/recipes/${itemName}`
                  }}>{item.name} <br/></Link>
               })}
            </ul>
            <br/>
         </div>
      })
   }



   render() {
      const r = this.props.location.state.restaurant
      return (
         <div>
            <h3>{r.restaurant_name}</h3>
            <ul>
               {this.renderMenus(r.menus[0].menu_sections)}
            </ul>
         </div>
      )
   }
}

export default Restaurant
