import React from 'react';
import MyComponent from './MyComponent';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran♀","Nidorina","Nidoqueen","Nidoran♂","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew",
      ],
      appName: 'React Search Bar',
      list: undefined,
    }
  }
  searchData(e) {
    var queryData = [];
    if(e.target.value != '') {
      this.state.data.forEach(function(person) {

          if(person.toLowerCase().indexOf(e.target.value)!=-1) {
            if(queryData.length < 10) {
              queryData.push(person);
            }
          }
      });
    }
    this.setState({list: queryData});
  }
  render() {
    return(
      <div>
        <MyComponent />
        
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return(
      <div>
        <h1>{this.props.name}</h1>
      </div>
    )
  }
}

class SearchBar extends React.Component {
  render() {
    return(
      <div>
        <input onChange={this.props.search} placeholder="Search Pokemon"/>
      </div>
    )
  }
}

class SearchResult extends React.Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.data.map(function(value) {
              return <Item key={value} val={value} />
          })}
        </ul>
      </div>
    )

  }

}

class Item extends React.Component {
  render() {
    return(
      <li>
        {this.props.val}
      </li>
    )
  }

}
export default App;