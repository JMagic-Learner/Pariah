import React from 'react'
import RulesExcerpt from '../../Components/RulesExcerpt'
const Rules = () => {

  const RulesArray = [
    {
      title: "D&D 5E CORE Rulebooks Only",
      text: "Pariah standalone adventures draw only from D&D Core 5E rulebooks."
    },
    {
      title: "Standard Ability Scores",
      text: "Characters must generate ability scores from the following array: [ 15, 14, 13, 12, 10, 8 ]"
    },
    {
      title: "Limited to two Short Rests",
      text: "Limiting to two short rests per standalone adventure to prevent extended rest abuse"
    },
    {
      title: "Character creation starts at level 3 and is perma-locked at level 3",
      text: "Standalone adventures are aimed at utilizing your character as it is built. Experiment with numerous iterations of character / class builds."
    },
    {
      title: "Character starting wealth is at 500 gold pieces each",
      text: "A little starting gold to round out your character"
    },
    {
      title: "Dungeon Crawler",
      text: "Players are immediately dropped into a dungeon sprawl, with a guaranteed miniboss and final boss"
    },
    {
      title: "Standard Monster Initiatives",
      text: "Monsters are set at standard intiatives of [25 , 20, 15, 10, 5]"
    },
    {
      title: "Only one death saving throw",
      text: "One failed death saving throw and the character is dead."
    }
  ]


  return (
    <div className="Page w-75">
      {RulesArray.map((rules) => {
        return (

          <div className="bg-dark ">
            <br></br>
            <RulesExcerpt ruleTitle={rules.title} ruleText={rules.text} />
          </div>
        )
      })}
    </div>
  )
}

export default Rules