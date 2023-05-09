import React from "react"

const RulesExcerpt = (props) => {
    const { ruleTitle, ruleText, rulesCost, rulesType } = props
    return (
        <div className="rules-excerpt-container">
            <div className="HorizontalContainer">
                <h1 className="EmphasizedTitle h4">{ruleTitle} </h1>
                <h1 className="EmphasizedTitle h5">{rulesCost} {rulesType} </h1>
                <p> {ruleText} </p>
            </div>
        </div>
    )
}

export default RulesExcerpt