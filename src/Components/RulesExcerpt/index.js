import React from "react"

const RulesExcerpt = (props) => {
    const {ruleTitle, ruleText} = props
    return(
        <div className="rules-excerpt-container">
            <h2> {ruleTitle} </h2>
            <p className="rules-text"> {ruleText} </p>
        </div>
    )
}

export default RulesExcerpt