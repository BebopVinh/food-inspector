import React from 'react'

export default function Recipe(props) {
   debugger
   return (
      <div>
         {/* <span>
            <img src={`${r.image}`} />
            <p>Name: {r.label}</p>
            <ul className="recipe-info-list">
               <li>Health-Labels: {r.healthLabels.join(", ")}</li>
               <li>Cautions: {r.cautions}</li>
               <ul className="ingredients-list">
                  {renderIngredients(r.ingredients)}
               </ul>
            </ul>
         </span> */}

      </div>
   )
}

const renderIngredients = (ingredients) => {
   return (ingredients.map(ing => {
      const setStyle = {}
      if (ing.text.toLowerCase().includes("")) {
         setStyle.color = "red"
      } else {
         setStyle.color = "black"
      }
      return <li style={setStyle}> {ing.text} </li>
   })
   )
}