import React, {useEffect, useState} from "react"
import LoreExcerpt from "../../Components/LoreExcerpt"

const Lore = () => {
    const WorldLore = [
        {
            id:0,
            title: "Purgatory",
            imageUrl: "xxxxxxxx",
            text: "Purgatory. Nowhere. Limbo. These are all aliases for a pocket dimension created by the Old Gods. The Olds Gods forged Purgatory from the remains of dead Abominations, using their bones, flesh and souls to craft an artificial plane of existence. Unlike other conventional worlds like Faerun, Eberron, Purgatory was designed vertically. Massive floating landmasses form a vertical continent, with waterfalls cascading from one level to the next. The collective formation of these landmasses are known as `Layers`. Purgatory is surrounded by a gray vortex called the 'Wall' that prevents planar travel in and out of Purgatory ",
            text2: ""
        },
        {
            id:1,
            title: "The Old Gods",
            imageUrl: "xxxxxxxx",
            text: "The Old Gods were a triumvate of divine bodies. They are the originators of Purgatory. Nobody really knows if the Old Gods were originally here, or are exiles from another universe. Before the 'War in Heaven', the Old Gods actively interferred with Purgatory. To them, Purgatory was a grand experiment of sorts. Implementing new races, lifeforms, technologies, magics, before finally erasing everything in a reset. The Old Gods sometimes keep interesting specimens aside, phasing them out of the reset and placing them back in the normal time-space constraints of Purgatory.",
            text2: "The Old Gods do not align with traditional values of black and white. Their creeds and methods follow orange and blue, as a Scholar once said. If one of the Old Gods were to be asked, 'Is the act of killing evil?', they would most likely respond by asking `Is the death of any consequence?'. Ironically, the Old Gods will never be able to answer a simple question, for they are all dead."
        },
        {
            id:2,
            title: "The Pariah",
            imageUrl: "xxxxxxxx",
            text: "The Ursurper. The Traitor. The Invader. The God-Slayer. These titles were given to the Pariah, an unknown entity that brought war to Purgatory's front doorstep. Nobody knows if the Pariah is a divine being, or a mortal given unfathomable power. What is known by the surviving denizens of Purgatory is that the Pariah waged total war on the Old Gods. The Pariah brought three gifts to Purgatory; The Pandemonium - The eventaul decay of sanity, The Faceless - monsters beyond comprehension, and the Shackling - the inability for deceased souls of Purgatory to arrive at their final destination",
            text2: "The Pariah was ultimately defeated in the closing battle of the `War in Heaven`. Despite this, the Pariah has perverted the minds of some individuals in Purgatory. Those individuals in turn formed the Pariah Cults. Although the Old Gods have been butchered, the Pariah Cults aim to bring about a second incursion of their patron, the Pariah"
        },
        {
            id:3,
            title: "The War in Heaven",
            imageUrl: "xxxxxxxx",
            text: "The War in Heaven was as a cataclysmic event that occured around 643 years ago. In truth, 'The War in Heaven' is a misnomer. A war, by definitiion , is a violent and prolongued confrontation between two or more opposing sides. The more accurate name would be 'the Purge'. For in fact, this 'war' was a one sided massacre perpetrated by the Pariah. When the Pariah first arrived in Purgatory, its arrival sundered the Wall. The divine magics that held plane-shifting in check were broken, and the Pariah brought it's Faceless legions with it. The Old Gods did not pay much heed to the Pariah, that is, until the Pariah outright murdered one of their number. By the time the two surviving Old Gods mustered their might to fight the intruder, the Pariah was already set on scouring Purgatory.",
            text2: "The War in Heaven was fought without regard for mortal lives. The weapons of choice were apocalyptic in scope. There wasn't a question of whether or not one should obliterate an entire civiliation, the Old Gods and Pariah just did. One day there might be a city-state, the next minute there was a massive crater. The mortals in purgatory were trapped between the Old Gods and the Pariah, with the Old Gods using the mortal races as expendable fodder against the Faceless. The planar population of Purgatory was reduced to two-fifths of what it originally was when the Pariah was finally cast down. Entire generations of knowledge, magical expertise, and technology were erased admist the carnage. The upper levels of Purgatory were shattered into many fragments, their populations, fauna, and ecosystems absolutely wiped out by divine energies. To this day, the scars left by the War in Heaven have not healed"
        },
        {
            id:4,
            title: "A World without Gods",
            imageUrl: "xxxxxxxx",
            text: "The Old Gods are dead. The Pariah has been exiled. Despite this, remnants of divine power linger in Purgatory. Although divine magic and miracles has been hobbled by the deaths of the Old Gods, Clerics and Paladins/ and other religious individuals manage to keep the faith. Divine acts are stronger around the God-Tombs, massive temples of worship erected on top of the final resting places of the Old Gods. The further one travels farther from a God-Tomb, the less likely prayers are answered. ",
            text2: "Clerics and Paladin player characters receive disadvantage on casting respective spells when in (Lower) Purgatory. Clerics and Paladins receive advantage when casting spells within 25 kilometers of a God Tomb. Reviving the dead is impossible, as the Pariah has instigated the Shackling, a supernatural phenomena that causes deceased individuals to either become a shade or a shadow",
        },
        {
            id:5,
            title: "The Pandemonium",
            imageUrl: "xxxxxxxx",
            text: "When the Pariah first set foot in Purgatory, it brought the Pandemonium with it. The Pandemonium is a planar curse that adversely affects magical users, items, and creatures. For living creatures in particular, those with a connection to the arcane immediately went mad when the Pariah tore into the pocket reality of Purgatory. Nowadays, mages, wizards, sorcerers, and warlocks are cautious about delving too deep into mystics, lest they suffer the same fate as those 643 years prior. Becuase of this, spells, spellscrolls, and arcane knowledge are rare and far between. This also makes it highly lucrative for raiding parties to search the Wastelands for what little that remains of arcane knowledge.",
            text2: "Whenever a Wizard, Sorcerer, Druid, Warlock, or any player character that casts an Arcane spell, if the resulting roll is a 5 or lower, that player takes 1d4(per spell level) pyschic damage."
        },
        {
            id:6,
            title: "Humanity",
            imageUrl: "xxxxxxxx",
            text: "Of all the races of Purgatory, Humanity suffered the most. Their pysche was relatively weak and malleable, allowing the insidious influence of the Pariah to pollute their minds and turn the vast majority of Humanity against the Old Gods. The Old Gods in turn used divine ordinance to raze the cities of Humanity to glass and rubble. Although not all of Humanity turned, Humanity's actions and overall abandonment of the Old Gods earned lasting prejudice by the remaining races of Purgatory. Today, Humanity is also derided as the 'Host of Traitors'",
            text2: "Human Racial Traits: ECHOES OF TREACHERY - Once per day, Human PC's can choose to take 2d6 psychic damage, opening their mind to the lingering whispers of the Pariah. The Human PC can reroll natural 1s for a duration of a combat encounter. This racial ability can be activated after a natural 1 has already been rolled."
        },
        {
            id:7,
            title: "Dwarves",
            imageUrl: "xxxxxxxx",
            text: "The Dwarven race are not strangers to war. Before the 'War in Heaven', numerous Dwarven clans waged ritual crusades against each other for the entertainment of the Old Gods. Their expertise in warfare highlighted them as the first race for extermination by the Pariah. The Faceless legions assaulted dwarven holds on all levels of Purgatory, tearing holes in long established frontlines. Dwarven warmasters were stubborn, but they eventually realized that they were fighting a losing war. Clanholds were toppled, razed, and sometimes threw into a gravity well with dwarven clansmen still fighting Faceless. The dwarves were forced to flee to central Purgatory. Dwarves of all kind long for the day that they can reclaim their homelands.'",
            text2: "Dwarven Racial Trait: REMEMBER OUR LEGACY - Dwarven PC's gain advantage on History skill checks when recalling facts related to the War in Heaven, Dwarven Holds, culture, language, magics, and technology."
        },
        {
            id:8,
            title: "Elves",
            imageUrl: "xxxxxxxx",
            text: "The Elves were one of the first races created by the Old Gods. In fact, of the three Resets that have occured in Purgatory's existence, it is rumoured the the Elven race were actually one of the original set of races created by the Old Gods. This apparent favoritism by the Old Gods did not go unnoticed by the Pariah. The Pariah brought an layer of Purgatory crashing down upon the original birthplace of the Elven race, The Moonlight Obelisk. The resulting impact dislodged the underyling floating continent, causing a domino effect to rain death and destruction upon (Lower) Purgatory. With the loss of the Moonlight Obelisk, the anguished dead of the Elven race could not reach their final destination in the afterlife. The cycle of rebirth and reincarnation of the Elven race came to an end. With no new elven souls forged from the Obelisk, it is now said that for the last 643 years that the elven race is in it's final twilight",
            text2: "Elven Racial Trait: THE WILL TO LIVE - Elven PC's gain advantage on death saving throws. Since there is no hope of reincarnation, all Elves aspire to live."
        },
        {
            id:9,
            title: "Halfings",
            imageUrl: "xxxxxxxx",
            text: "The War in Heaven caused a rift in Halfling communities. For the vast existence of Purgatory, Halfing communities tried to steer clear of the Old Gods, wary of their machinations. When the Pariah brought chaos to Purgatory, many of the halfling communities tried to parlay with the outsider. Unfortunately, the concept of mercy was alien to the Pariah. The Halflings faced an ultimatum, fight at the behest of the Old Gods and become fodder for the Faceless, or meet certain extinction.",
            text2: "Halfling Racial Trait: QUICK LEARNERS - At Level 4, 8, 12, 16, and 20, Halfling's PCs can learn an extra feat."
        },
        {
            id:10,
            title: "Shades",
            imageUrl: "xxxxxxxx",
            text: "When the Pariah was finally defeated, the mortal races quickly learned to thier horror the final gift that the Pariah left them; the Shackling. The deceased either turned into malevent Shadows or managed to maintian their sanity to manifest as a Shade. The Shades are not true undead, but rather a incomplete mirror of thier living selves. In the daylight, the form of a shade wavers, bordering on reverting to an incorporeal form.",
            text2: "A player character can choose to be a Shade. The player character at ability score creation suffers a -3 to their Constituion ability score in addition to thier original race ability bonuses. In turn, the Shade gains 5 Cold Resistance, and 5 Resist to Bludgeoning, Slashing, and Piercing damage. Shades can utilize thier racial abiltity: WRAITHFORM - The player character becomes incorporeal for 5 minutes once per day."
        },
        {
            id:11,
            title: "Other Worlders",
            imageUrl: "xxxxxxxx",
            text: "The Pariah shattered the Wall, a divine barrier vortex preventing planar travel in and out of Purgatory. While this enabled the Pariah to call forth the Faceless, it also allowed the Old Gods to summon heroes from beyond the veil. In fact, once could say that the most pivotal battles were fought by Other Worlders, individuals teleported into Purgatory to fight the War in Heaven on the Old God's behalf. Due to the nature of their existence, some rules of Purgatory did not conform to Other Worlders. This 'wild-card' trait allowed Other Worlders to outmanuever and suprise the Pariah, who assumed that all original beings other than itself must abide by Purgatory rules. After the War in Heaven, Other Worlders began to slowly bleed back into their original realities. Some Other Worlders left behind powerful artifacts, imbued with magic from foriegn universes",
            text2: "Other Worlders are a in-built lore mechanic that allows players to explain their erratic attendance in adventures."
        },
        {
            id:12,
            title: "Layers",
            imageUrl: "xxxxxxxx",
            text: "Purgatory originally had 7 layers. Maryth , Cor'ui'El, The Badlands, The Periphery, The Sol Valleys, Hjel'tur, and Elsuyr are the respetive layers from lowest to highest, with the highest being the domain of the Gods. Hjel'tur was the layer of Elven people, which was shattered in the War in Heaven. The resulting damage laid waste to the Sol Valleys, anniliating half of the layer and destabilizing the gravity anchor that held the Sol Valley in place. The bottom three Layers had entire landmasses collapse into the eye of the Wall. The Periphery is no more, as it was the layer where the first of the Old Gods were murdered. In its place, the rubble of the Periphery separates (Upper) amd (Lower) Purgatory. THe expanse of floating rubble is known as `The Stairway`",
            text2: "Travel between layers usually consist of airships, airborne creatures, or simply climbing floating remnants of layers. Adventurer guilds have wayfinders, individuals who specialize in stringing together floating rock formations, allowing travellers to climb their way up and down layers."
        },
        {
            id:13,
            title: "Faceless",
            imageUrl: "xxxxxxxx",
            text: "Monsters from beyond. The Faceless are the boogeymen of legend. According to accounts 643 years ago, the Faceless were nearly immortal. They bore no facial features, towered over the Elves, stronger than Dwarves, and bore translucent, pale skin that pulsed with a unsettling ripple. They did not burn, did not sleep, and did not stop killing. The Faceless are divided into castes, from the lowly Grimnyr to the dreaded Heralds",
            text2: "The eventual banishment of the Pariah also exiled the Faceless with it. Despite this, there are rumours of Faceless appearing in the absolute edges of Purgatory"
        },
    
    ]
    const [selectedLore, setSelectedLore] = useState([
        {
            id:0,
            title: "Purgatory",
            imageUrl: "xxxxxxxx",
            text: "Purgatory. Nowhere. Limbo. These are all aliases for a pocket dimension created by the Old Gods. The Olds Gods forged Purgatory from the remains of dead Abominations, using their bones, flesh and souls to craft an artificial plane of existence. Unlike other conventional worlds like Faerun, Eberron, Purgatory was designed vertically. Massive floating landmasses form a vertical continent, with waterfalls cascading from one level to the next. The collective formation of these landmasses are known as `Layers`. Purgatory is surrounded by a gray vortex called the 'Wall' that originally prevents planar travel in and out of Purgatory ",
            text2: "Purgatory is a dying plane of existence. The Old Gods are dead, and there is a general sense of lost purpose. It has been 643 years since the end of the Pariah, and yet Purgatory has yet to heal. Dead cities lay scattered amongst purgatory, littered with the white-cystalized remains of the Faceless. The dead cannot rest in peace, as the Shackling prevents the final destination. The divine energies that created Purgatory are slowly unraveling, causing some landmasses to sink to a lower level of Purgatory. Magical artifacts are rare and dangerous, as the Pandemonium made it even riskier to study the arcane. Purgatory is a in a state of half-life, it's people trying their hardest to regain what was lost in the War in Heaven."
        }  
    ])




    const Open =(title1) => {
        console.log("We have clicked on a lore entry")
        let selectT = WorldLore.filter((item)=> item.title === title1)
        setSelectedLore(selectT)
    }



    return(
        <div className="Lorepage Page">
        <div className="d-flex">
           <div className="sideMenu bg-dark"> 
              <h2> Entries </h2>
              {WorldLore.map((lore)=>{
                return(
                  <button className="entry" onClick={()=>Open(lore.title)}> {lore.title} </button>
                )
              })}
           </div>
           <LoreExcerpt propLore={selectedLore}/>
        </div>
        </div>
    )
}

export default Lore