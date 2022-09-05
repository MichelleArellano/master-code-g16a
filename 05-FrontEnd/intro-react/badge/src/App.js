import React from 'react';
import Navbar from './components/Navbar';
import Badge from './components/Badge';
import BadgeForm from './components/BadgeForm';
import CharacterItem from './components/CharacterItem';
import axios from 'axios'

const props = {
  firstName: 'Octavio',
  lastName: 'Lopez',
  jobTitle: 'Frontend',
  username: 'octavio123'
}

class App extends React.Component {
  state = {
    characters: [],
    form: { 
      firstName: "",
      lastName: ""
    }
  }
  componentDidMount() {
    console.log("componentDidMount")
    this.fetchApi()
  }

  componentDidUpdate() {
    console.log("componentDidUpdate")
  }
  componentWillUnmount() {
    console.log("componentWillUnmount")
  }

  fetchApi = () => {
    axios.get("https://rickandmortyapi.com/api/character").then(res => {
      const characters = res.data.results;

      this.setState({
        ...this.state,
        characters
      })

    })
  }
  handleChange = e => {
 
    //Modificamos el estado
    this.setState({
      form: { 
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }
  
  render(){
    console.log(this.state)
    return (
      <>
        <Navbar/>
        <Badge data={props} state={this.state}/>
        <BadgeForm handleChange={this.handleChange}/>
        <div className="container">
          <div className="App">
            <ul className="row">
              <li className="col-6 col-md-3">
                {
                  this.state.characters.map(character => (<CharacterItem character={character} key={character.id}/>)
                    )
                }
                
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
  
}

export default App;