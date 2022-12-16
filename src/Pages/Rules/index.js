import React from 'react'
import RulesExcerpt from '../../Components/RulesExcerpt'
const Rules = () => {

  const RulesArray = [

    {
      title: "Divine Power is waning",
      text: "Spellcasters who draw power from divine sources limit the number of cantrips cast per encounter to (Spellcasting Ability Mod + Proficiency + Level)"
    },
    {
      title: "Death is a one-way Street",
      text: 'The death of the Old Gods took many of the divine miracles with them. Resurrection through divine rituals and spells cannot be used or chosen as spells'
    },
    {
      title: "Magical Items are rare",
      text: 'The War In Heaven has decimated cities and wiped out centuries of knowledge. Magic Items are extremely prized and rare. People would kill to possess an magical relic from before the War in Heaven'
    },
    {
      title: "Pandemonium's ecology is decimated",
      text: "Dry, cracked earth. Dying forests, expanding wastelands. There are pockets of healthy wildlife, but those areas are limited to around the God-Tombs.The lack of natural resources has allowed Rangers, Wayfinders, and individuals in tune with the natural world to carve out a niche for finding, nurturing, and guarding what little remains"
    },
    {
      title: "Verticality",
      text: "The layers of Pandemonium are scaled vertically. Entire economies and businesses revolve around transversing the layers. Adventurers, Raiders, Bandits are expected to climb, jump, scale numerous vertical challenges in Pandemonium"
    },
    {
      title: "Psychic Trauma",
      text: "Players have one additional Death Save category called Insanity. Players who take psychic damage must make a Wisdom Saving Throw DC 12 or fill in a Insanity Save. When all three Insanity Saves are marked, the player character is rendered catatonic, their mind absolutely broken beyond repair of divine, natural or magical means." 
    }
  ]


  return (
    <div className="rulesPage Page w-75">
      {RulesArray.map((rules) => {
        return (
          <div className="bg-dark ">
            <RulesExcerpt ruleTitle={rules.title} ruleText={rules.text} />
          </div>
        )
      })}
    </div>
  )
}

export default Rules