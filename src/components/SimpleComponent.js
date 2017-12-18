// Code SimpleComponentHere Here
import React, {componenet} from 'react'

class SimpleComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mood: "happy"
    }
  }

  handleClick = (event) => {
    const newMood = this.state.mood === 'happy' ? 'sad' : 'happy';
    this.setState ({
      mood: newMood
    })

  }

  render(){
    return(
      <div onClick= {this.handleClick}>{this.state.mood}</div>
    )
  }
}

export default SimpleComponent
