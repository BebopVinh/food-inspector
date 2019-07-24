import React, { Component } from 'react'

export class Restaurant extends Component {

   renderMenus = (sections) => {
      return sections.map(section => {
         return <div key={section.position}>
            <h4>{section.section_name}</h4>
            <ul className="menu-items-list">
               {section.menu_items.map(item => <li>{item.name}</li>)}
            </ul>
            <br/>
         </div>
      })
   }

   render() {
      const r = this.props.restaurant
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
