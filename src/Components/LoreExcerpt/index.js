import React, { useEffect } from 'react'

const LoreExcerpt = (props) => {
    const { propLore} = props

    return(
    <div className="sideMenu2 bg-dark"> 
        <h2> Lore - {propLore[0].title}</h2>
        <div className="excerpt-image"> </div>
        <div className="excerpt-text"> 
             <p className="text-justify"> {propLore[0].text}  </p>
         </div>
         <hr></hr>
         <div className="excerpt-text"> 
             <p className="text-justify"> {propLore[0].text2}  </p>
         </div>
    </div>
    )
}

export default LoreExcerpt