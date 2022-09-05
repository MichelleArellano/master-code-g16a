import React from 'react';
import "../styles/CharacterItem.css";

class CharacterItem extends React.Component {
  render () {
    return (
      <div className="CharacterCard"  style={{
        backgroundImage: `url(${this.props.character.image})`
      }} 
      >
        <div className="CharacterCard__name-container">
          {this.props.character.name}
        </div>
      </div>
    )
  }
}

export default CharacterItem;