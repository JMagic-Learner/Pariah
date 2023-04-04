import React, { useEffect, useState } from "react"
import LoreExcerpt from "../../Components/LoreExcerpt"

const Lore = () => {
    const WorldLore = [
        {
            id: 0,
            title: "Durandis",
            imageUrl: "xxxxxxxx",
            text: "Durandis. Nowhere. Limbo. These are all aliases for a pocket dimension created by the Shards. The Shards forged Durandis from the remains of dead Abominations, using their bones, flesh and souls to craft an artificial plane of existence",
            text2: ""
        },
        {
            id: 1,
            title: "The Shards",
            imageUrl: "xxxxxxxx",
            text: "The Shards were a triumvate of divine bodies. They are the first inheritors of Durandis.",
            text2: "The Shards do not align with traditional values of black and white. Their creeds and methods follow orange and blue, as a Scholar once said. If one of the Shards were to be asked, 'Is the act of killing evil?', they would most likely respond by asking `Is the death of any consequence?'. Ironically, the Shards will never be able to answer a simple question, for they are all dead."
        },
        {
            id: 2,
            title: "The Pariah",
            imageUrl: "xxxxxxxx",
            text: "The Ursurper. The Traitor. The Invader. The God-Slayer. These titles were given to the Pariah, an unknown entity that brought war to Durandis's front doorstep. Nobody knows if the Pariah is a divine being, or a mortal given unfathomable power. What is known by the surviving denizens of Durandis is that the Pariah waged total war on the Shards. The Pariah brought three gifts to Durandis; The Pandemonium - The eventaul decay of sanity, The Faceless - monsters beyond comprehension, and the Shackling - the inability for deceased souls of Durandis to arrive at their final destination",
            text2: "The Pariah was ultimately defeated in the closing battle of the `War in Heaven`. Despite this, the Pariah has perverted the minds of some individuals in Durandis. Those individuals in turn formed the Pariah Cults. Although the Shards have been butchered, the Pariah Cults aim to bring about a second incursion of their patron, the Pariah"
        },
        {
            id: 3,
            title: "The War in Heaven",
            imageUrl: "xxxxxxxx",
            text: "The War in Heaven was as a cataclysmic event that occured around 643 years ago. In truth, 'The War in Heaven' is a misnomer. A war, by definitiion , is a violent and prolongued confrontation between two or more opposing sides. The more accurate name would be 'the Purge'. For in fact, this 'war' was a one sided massacre perpetrated by the Pariah. When the Pariah first arrived in Durandis, its arrival sundered the Wall. The divine magics that held plane-shifting in check were broken, and the Pariah brought it's Faceless legions with it. The Shards did not pay much heed to the Pariah, that is, until the Pariah outright murdered one of their number. By the time the two surviving Shards mustered their might to fight the intruder, the Pariah was already set on scouring Durandis.",
            text2: "The War in Heaven was fought without regard for mortal lives. The weapons of choice were apocalyptic in scope. Cities and nations were turned into funeral pyres"
        },
        {
            id: 4,
            title: "A World without Gods",
            imageUrl: "xxxxxxxx",
            text: "The Shards are dead. The Pariah has been exiled. Despite this, remnants of divine power linger in Durandis. Although divine magic and miracles has been hobbled by the deaths of the Shards, Clerics and Paladins/ and other religious individuals manage to keep the faith. Divine acts are stronger around the God-Tombs, massive temples of worship erected on top of the final resting places of the Shards. The further one travels farther from a God-Tomb, the less likely prayers are answered. ",
            text2: "Clerics and Paladin player characters receive disadvantage on casting respective spells. Clerics and Paladins receive advantage when casting spells within 25 kilometers of a God Tomb. Reviving the dead is impossible, as the Pariah has instigated the Shackling, a supernatural phenomena that causes deceased individuals to either become a shade or a shadow",
        },
        {
            id: 5,
            title: "The Pandemonium",
            imageUrl: "xxxxxxxx",
            text: "When the Pariah first set foot in Durandis, it brought the Pandemonium with it. The Pandemonium is a planar curse that adversely affects magical users, items, and creatures. For living creatures in particular, those with a connection to the arcane immediately went mad when the Pariah tore into the pocket reality of Durandis. Nowadays, mages, wizards, sorcerers, and warlocks are cautious about delving too deep into mystics, lest they suffer the same fate as those 643 years prior. Becuase of this, spells, spellscrolls, and arcane knowledge are rare and far between.",
            text2: "Whenever a Wizard, Sorcerer, Druid, Warlock, or any player character that casts an Arcane spell, if the resulting roll is a 5 or lower, that player takes 1d4(per spell level) pyschic damage."
        },
        {
            id: 6,
            title: "Humanity",
            imageUrl: "xxxxxxxx",
            text: "Of all the races of Durandis, Humanity suffered the most. Their pysche was relatively weak and malleable, allowing the insidious influence of the Pariah to pollute their minds and turn the vast majority of Humanity against the Shards. The Shards in turn used divine ordinance to raze the cities of Humanity to glass and rubble. Although not all of Humanity turned, Humanity's actions and overall abandonment of the Shards earned lasting prejudice by the remaining races of Durandis. Today, Humanity is also derided as the 'Host of Traitors'",
            text2: "Human Racial Traits: ECHOES OF TREACHERY - Once per day, Human PC's can choose to take 2d6 psychic damage, opening their mind to the lingering whispers of the Pariah. The Human PC can reroll natural 1s for a duration of a combat encounter. This racial ability can be activated after a natural 1 has already been rolled."
        },
        {
            id: 7,
            title: "Dwarves",
            imageUrl: "xxxxxxxx",
            text: "The Dwarven race are not strangers to war. Before the 'War in Heaven', numerous Dwarven clans waged ritual crusades against each other for the entertainment of the Shards. Their expertise in warfare highlighted them as the first race for extermination by the Pariah. The Faceless legions assaulted dwarven holds on all levels of Durandis, tearing holes in long established frontlines. Dwarven warmasters were stubborn, but they eventually realized that they were fighting a losing war. Clanholds were toppled, razed, and sometimes threw into a gravity well with dwarven clansmen still fighting Faceless. The dwarves were forced to flee to central Durandis. Dwarves of all kind long for the day that they can reclaim their homelands.'",
            text2: "Dwarven Racial Trait: REMEMBER OUR LEGACY - Dwarven PC's gain advantage on History skill checks when recalling facts related to the War in Heaven, Dwarven Holds, culture, language, magics, and technology."
        },
        {
            id: 8,
            title: "Elves",
            imageUrl: "xxxxxxxx",
            text: "The Elves were one of the first races created by the Shards. This fact did not go unnoticed by the Pariah. The Pariah shattered a portion of the Moon, causing it to crash down upon the original birthplace of the Elven race, The Moonlight Obelisk. With the loss of the Moonlight Obelisk, the anguished dead of the Elven race could not reach their final destination in the afterlife. The cycle of rebirth and reincarnation of the Elven race came to an end. With no new elven souls forged from the Obelisk, it is now said that for the last 643 years that the elven race is in it's final twilight",
            text2: "Elven Racial Trait: THE WILL TO LIVE - Elven PC's gain advantage on death saving throws. Since there is no hope of reincarnation, all Elves aspire to live."
        },
        {
            id: 9,
            title: "Halfings",
            imageUrl: "xxxxxxxx",
            text: "The War in Heaven caused a rift in Halfling communities. For the vast existence of Durandis, Halfing communities tried to steer clear of the Shards, wary of their machinations. When the Pariah brought chaos to Durandis, many of the halfling communities tried to parlay with the outsider. Unfortunately, the concept of mercy was alien to the Pariah. The Halflings faced an ultimatum, fight at the behest of the Shards and become fodder in the war against the Faceless, or meet certain extinction.",
            text2: "Halfling Racial Trait: QUICK LEARNERS - At Level 6, 12, 18, Halfling's PCs can learn an extra feat."
        },
        {
            id: 10,
            title: "Shades",
            imageUrl: "xxxxxxxx",
            text: "When the Pariah was finally defeated, the mortal races quickly learned to thier horror the final gift that the Pariah left them; the Shackling. The deceased either turned into malevent Shadows or managed to maintian their sanity to manifest as a Shade. The Shades are not true undead, but rather a incomplete mirror of thier living selves. In the daylight, the form of a shade wavers, bordering on reverting to an incorporeal form.",
            text2: "A player character can choose to be a Shade. The player character at ability score creation suffers a -3 to their Constituion ability score in addition to thier original race ability bonuses. In turn, the Shade gains 5 Cold Resistance, and 5 Resist to Bludgeoning, Slashing, and Piercing damage. Shades can utilize thier racial abiltity: WRAITHFORM - The player character becomes incorporeal for 2 minutes once per day."
        },
        {
            id: 11,
            title: "Faceless",
            imageUrl: "xxxxxxxx",
            text: "Monsters from beyond. The Faceless are the boogeymen of legend. According to accounts 643 years ago, the Faceless were nearly immortal. They bore no facial features, towered over the Elves, stronger than Dwarves, and bore translucent, pale skin that pulsed with a unsettling ripple. They did not burn, did not sleep, and did not stop killing. The Faceless are divided into castes, from the lowly Grimnyr to the dreaded Heralds",
            text2: "The eventual banishment of the Pariah also exiled the Faceless with it. Despite this, there are rumours of Faceless appearing in the absolute edges of Durandis"
        },
        {
            id: 12,
            title: "Godfall",
            imageUrl: "xxxxxxxx",
            text: "Godfall, the doomed birthplace of the elves. Originally known as Irie Syral, this blasted city is a littered with shards of the moon. Horrifically, the energy of the Pariah pervades this place, leading to a mass concentration of Faceless",
            text2: "Elves yearn to retake this city from Faceless remannts. Dead trees, and desolate lands surround Godfall. The crater from the impact of the shattered moon has left a lake where the original Moonlight obelisk used to reside."
        },
        {
            id: 13,
            title: "Avard",
            imageUrl: "xxxxxxxx",
            text: "Avard, the city of Humanity. When the Pariah breached this world, Avard was turned into a hellscape of civil war. Human turncoats formed the Pariah Cults, and waged an continent wide insurrection while the Pariah decimated the Western continents. Loyalist forces were eventually routed, forced into a fighting retreat as both the Pariah Cults and the Faceless assaulted them. Loyalist forces choose to flee north toward Vos Tyr, abandoning the metropolis free city of Jerat. ",
            text2: "Nowadays, Avard is a shell of it's former self. Burnt city walls, and crumbling infrastructure paint a bleak outlook. The remaining loyalists struggle to maintain diplomatic relations with the rest of Durandis, as humanity is percieved as the Host of Traitors. It's relationship with it's sister city, Jerat, was forever sundered in the War in Heaven. The multitude of races in Jerat that had to fight tooth and nail to survive the Pariah only remember that Humanity at large chose to turn their backs. Humans in Avard are trying to dispell racial emnity via the profileration of human adventuring corps"
        },
        {
            id: 14,
            title: "Hartlock",
            imageUrl: "xxxxxxxx",
            text: "Hartlock was a sleepy fishing village known for hunting Borealis whales. It suddenly became the place for refugees fleeing the carnage in the Western and Eastern continents during the War in Heaven. In the late stages of the War in Heaven, it served as a staging point for military reconquest of the Western continent. The veterans who survived returned to Hartlock, forming a militant society focused on martial prowess and practical applications of military strategy. Comprised of a multitude of races, Hartlock hosts one of the most premier military acadamies in Durandis, Volyr",
            text2: "Hartlock is primarily comprised of humans. There were few elves that managed to flee to Hartlock. While there is some prejudice against Humanity, Hartlock's military vanguard forces earned some redemption for Humanity. The current leader of Hartlock is a aging Vanguard captain named Percival Clint"
        },
        {
            id: 15,
            title: "Jerat",
            imageUrl: "xxxxxxxx",
            text: "Jerat was the southern jewel of Durandis. Positioned south of Avard and west of Il Phos Kvyr, Jerat was a strategic gateway for merchandise flowing into and out of the Western continent. Before and after the War in Heaven, Jerat was home to a multitude of races. Dwarven smiths, Elven soothsayers, Human politicians and other individuals worked thier trades up to the Pariah's appearnce. When the Pariah broke the fortress city of Il Phos Kyvr, the Faceless incoming assault razed Jerat to the ground. Jerat lost centuries of craft knowledge.",
            text2: "Jerat is now rebuilding and securing it's soveriegn borders. Loyalist humans who stayed in defense of Jerat sport ritualistic tattoos, proving thier ancestral allegiance to Jerat in the dark days of the War. Elves and dwarves who managed to flee from the Il Phos Kvyr also chose to make their stand at Jerat. There is an arcane revival movement in Jerat, filled with mages coveting a return to the era where the Pandemonium did not exist. Currently, there are rumours of a land war brewing between Avard and Jerat, as old grudges are resurfacing via politicians pointing fingers at each other"
        },
        {
            id: 15,
            title: "Il Phos Kyvr",
            imageUrl: "xxxxxxxx",
            text: "Il Phos Kvyr. It used to be known as the most dominant and impenentrable dwarven fortress in Durandis. Now, it is a dune blasted necropolis, filled with the lurching undead. 9 Dwarven clans once ruled Il Phos Kvyr. Of the original nine, four dwarven clans survive to this day; Muer , Glinthelm, Suryanr, and Volheart. The five other clans perished in defense of Il Phos Kvyr, as they tried to hold the line against the initial onslaught of the Faceless. Il Phos Kvyr also proved a pivotal moment in dwarven-elven relations, as the dwarves buried their old greivances with the decimated Elves to allow them to pass under the gates of Il Phos Kyvr",
            text2: "Il Phos Kvyr is the focus of the Dwarven reclamation movement. Currently, there are multiple clan camps on the eastern side of Il Phos Kvyr. These clan holds send expeditionary forces into the fortress hold of Il Phos Kvyr to retrieve dwarven artifacts, heirlooms and pieces of history. Il Phos Kvyr is a labryithian keep, stretching deep underground. When the Pariah arrived at Il Phos Kvyr, a lich lieutenant of a particular Pariah Cult raised the sacred remains of dwarven heroes long gone in the Kvyr crypts, leading to a suprise assault from the surface (Faceless) and from below",
        },

    ]
    
    const [selectedLore, setSelectedLore] = useState([
        {
            id: 0,
            title: "Durandis",
            imageUrl: "xxxxxxxx",
            text: "Durandis, a world conceived from the dreams of a dying god. Over the millennia, various races came into existence from the god's fevered dreams. They say that serene dreams usher in ages of peace, while the god's nightmares manifests wars, famines and cataclysms",
            text2: "Durandis is fading. The Shards of the Aspect are dead, and there is a general sense of lost purpose. It has been 643 years since the end of the Pariah, and yet Durandis has yet to heal. Dead cities lay scattered amongst Durandis, littered with the white-cystalized remains of the Faceless. The dead cannot rest in peace, as the Shackling prevents the final destination.  Magical artifacts are rare and dangerous, as the Pandemonium made it even riskier to study the arcane. Durandis is a in a state of half-life, it's people trying their hardest to regain what was lost in the War in Heaven."
        }
    ])




    const Open = (title1) => {
        console.log("We have clicked on a lore entry")
        let selectT = WorldLore.filter((item) => item.title === title1)
        setSelectedLore(selectT)
    }



    return (
        <div className="Lorepage Page">
            <div className="d-flex">
                <div className="sideMenu bg-dark">
                    <h2> Entries </h2>
                    {WorldLore.map((lore) => {
                        return (
                            <button className="entry" onClick={() => Open(lore.title)}> {lore.title} </button>
                        )
                    })}
                </div>
                <LoreExcerpt propLore={selectedLore} />
            </div>
        </div>
    )
}

export default Lore