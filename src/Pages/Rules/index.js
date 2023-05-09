import React from 'react'
import RulesExcerpt from '../../Components/RulesExcerpt'
export const Rules = () => {

  const RulesArray = [
    {
      title: "HACKING PROGRAM: PING",
      cost: "1",
      type: "Covert",
      text: "Ping the network for a response. If successfull, you learn the structure of the root directory."
    },
    {
      title: "HACKING PROGRAM: ECHO",
      cost: "2, Continous",
      type: "Overt",
      text: "Actively ping the network for a response per second. If successfull, you learn the structure of all directories."
    },
    {
      title: "HACKING PROGRAM: BEACON",
      cost: "1",
      type: "Covert",
      text: "Insert a logBeacon that alerts you to the user id , time, and folder directory that last accessed where the beacon was inserted."
    },
    {
      title: "HACKING PROGRAM: AVALANCHE",
      cost: "4, Continous",
      type: "Overt",
      text: "Flood the sub directory with repetivive actions. If succesfull, all sub networks within that directory are disabled"
    },
    {
      title: "HACKING PROGRAM: SNAPSHOT",
      cost: "1",
      type: "Covert",
      text: "Take control of a security camera for 1 second. If succesfull, you receive a captured image from that camera feed."
    },
    {
      title: "HACKING PROGRAM: BOOLEAN",
      cost: "2, Continous",
      type: "Covert",
      text: "Change the boolean condition from 0 to 1 and vice versa (ie Door/ Open Close, Lights / On - Off/ etc)"
    },
    {
      title: "HACKING PROGRAM: OVERLOAD",
      cost: "3",
      type: "Overt",
      text: "Cause 1d8 + Tech mod damage to a electrical component connected to that directory."
    },
    {
      title: "HACKING PROGRAM: TRAWL",
      cost: "4",
      type: "Overt",
      text: "Attempt to gather password login infomation. If succesfull, obtain a combination of randomized letters/ symbols, and numbers from the referee for you to later decode."
    }
  ]
  return (
    <div className="Page w-75">
      <h1 className="EmphasizedTitle"> Hacking [EXTRA] </h1>
      <p className="h6"> Hacking is an extra set of rules to flesh out non-direct interactions regarding electronic warfare</p>
      <p className="h6"> Electronic warfare in Death In Space is done oldschool, analog style. Runners, cybercrawlers, and subnet breachers have to jack in to a nearby open port to access systems.</p>
      <p className="h6"> Before we begin discussing how to hack, we need to discuss the hacking framework and GUI that should be provided by the referee in a game session.</p>

      <section className="d-flex flex-row">
        <section className="Right-Column">
          <ul className="h6" >
            <p className="h6"> Basic Framework </p>
            <li> To begin hacking, an individual must manually jack in thier hacking device </li>
            <li> Hacking devices have RAM capacity, which dictates which programs are active at a time </li>
            <li> Hacking devices start with a RAM capacity of 3 RAM, and can be upgraded to max capacity of 7 </li>
          </ul>
        </section>
        <section className="Left-Column">
          <ol className="h6" >
            <p className="h6"> Hacking in Action </p>
            <li> After jacking in, players have the choice of utlizing covert, or overt programs </li>
            <li> Covert programs are minimal in effect, but they avoid firewall / countermeasure detection </li>
            <li> Overt programs are active attempts by the player against firewall / countermeasure detection </li>
          </ol>
        </section>

      </section>
      <h1 className="EmphasizedTitle"> GUI Interface </h1>
      <section>
        <img src={require("../../Assets/Images/GUI.jpg")} style={{ width: "50%", height: "50%" }} />
      </section>
      <h1 className="EmphasizedTitle"> Overt Checks - Opposed Checks </h1>
      <li className="h6"> If the player chooses to use Overt programs, the player must succeed on a TEC check.</li>
      <li className="h6"> In addition, the player's TEC check must also succeed against an opposing TEC check made by the referee, to represent firewall breach protocols and other active net defenses.</li>
      <li className="h6"> Failing the TEC check expends the RAM for the duration of session until recharged. </li>
      <li className="h6"> Failing the TEC check does not alert active net defense systems  </li>
      <li className="h6"> Rolling a TEC check result lower than the opposed referree roll does alert active net defense systems to the player's attempted (succesfull, or unsuccesfull) breach.  </li>
      <hr></hr>
      <h1 className="EmphasizedTitle"> Expenditure of RAM </h1>
      <li className="h6"> RAM expends battery power of the hacking device</li>
      <li className="h6"> RAM costs marked `continous` occupy that much ram on your hacking device until you decide to no longer use that program. Continous programs no longer in use refund 1/2 (rounded down) of the RAM initially used to upkeep the program.</li>
      <li className="h6"> RAM does not recover until the hacking device is jacked into an appropriate PSU</li>
      <li className="h6"> A device at 0 RAM is effectively unusable </li>
      {RulesArray.map((rules) => {
        return (

          <div className="bg-dark ">
            <br></br>
            <RulesExcerpt ruleTitle={rules.title} ruleText={rules.text} rulesCost={rules.cost} rulesType={rules.type} />
          </div>
        )
      })}
    </div>
  )
}

