import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

let legndsArr = [
  "Bangalore",
  "Bloodhound",
  "Caustic",
  "Gibralter",
  "Lifeline",
  "Mirage",
  "Pathfinder",
  "Wraith",
  "Octane",
  "Wattson",
  "Crypto",
  "Revenant",
  "Loba"
]

let gunsArr = [
  "P2020",
  "RE-45",
  "Wingman",
  "EVA-8 Auto",
  "Peacekeeper",
  "Mastiff",
  "Mozambique",
  "Flatline",
  "Hemlok",
  "R-301",
  "Alternator",
  "R-99",
  "Prowler",
  "Devotion",
  "Spitfire",
  "G7 Scout",
  "Longbow",
  "Triple Take",
  "Kraber"
  
]

let playstylessArr = [
  "Casual",
  "High Mobility",
  "Aggressive",
  "Trappers"
]



class MyHeader extends React.Component {
  render() {
    return (
      <h1>Welcome To My Mini Poll!!</h1>
    )
  }
}




ReactDOM.render(<MyHeader/>,document.getElementById('root'))


class MyForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      gamertag: "",
      playstyle: "",
      favoriteweapon: "",
      favoritelegend: "",
      nullvariable: null
    }
  }

  mysubmitHandler = (event) => {
    let gamertag = this.state.gamertag;
    if(gamertag == "") {
      alert("Gamertag must be valid!")
    }
  }
  mychangeHandler = (event) => {
    let game = event.target.name;
    let play = event.target.value;
    let favweap = event.target.value;
    let favleg = event.target.value;
    this.setState({gamertag: event.target.name})
  }  
  
  render() {
    return (
      <form onSubmit = {this.mysubmitHandler}>
        <p>Hello, what is your gamertag?</p>
        <input type = "text"
        name = "gamertag" placeholder = "Search.."
        onChange = {this.mychangeHandler}/>
        <input type = "submit">
        </input>
        <p>What is your playstyle?</p>
        <select value = {this.state.playstyle}>
          <option value = "Casual">Casual</option>
          <option value = "High Mobility">High Mobility</option>
          <option value =  "Aggressive">Aggressive</option>
          <option value = "Trappers">Trappers</option>
        </select>


        <p>What is your favorite weapon to use?</p>
        <select value = {this.state.favoriteweapon}>
          <option value = "P2020">P2020</option>
          <option value =  "RE-45">RE-45</option>
          <option value =  "Wingman">Wingman</option>
          <option value = "EVA-8 Auto">EVA-8 Auto</option>
          <option value =   "Peacekeeper">Peacekeeper</option>
          <option value = "Mastiff">Mastiff</option>
          <option value = "Mozambique">Mozambique</option>
          <option value = "Flatline">Flatline</option>
          <option value = "Hemlok">Hemlok</option>
          <option value = "R-301">R-301</option>
          <option value = "Alternator">Alternator</option>
          <option value = "R-99">R-99</option>
          <option value = "Prowler">Prowler</option>
          <option value = "Devotion">Devotion</option>
          <option value = "Spitfire">Spitfire</option>
          <option value = "G7 Scout">G7 Scout</option>
          <option value = "Longbow">Longbow</option>
          <option value = "Triple Take">Triple Take</option>
          <option value = "Kraber"></option>
        </select>

        <p>Who is your favorite legend</p>
        <select value = {this.state.favoritelegend}>
          <option value = "Bangalore">Bangalore</option>
          <option value = "Bloodhound">Bloodhound</option>
          <option value = "Caustic">Caustic</option>
          <option value = "Gibraltar">Gibraltar</option>
          <option value = "Lifeline">Lifeline</option>
          <option value = "Mirage">Mirage</option>
          <option value = "Pathfinder">Pathfinder</option>
          <option value = "Wraith">Wraith</option>
          <option value = "Octane">Octane</option>
          <option value = "Wattson">Wattson</option>
          <option value = "Crypto">Crypto</option>
          <option value = "Revenant">Revenant</option>
        </select>

      </form>
    )
  }
}  
  
ReactDOM.render(<MyForm/>, document.getElementById('root'));
  