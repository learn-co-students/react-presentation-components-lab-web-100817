// Code SimpleComponentHere Here
import React from 'react';

class SimpleComponent extends React.Component {
  state = {
    mood: 'happy'
  }

  handleClick = () => {
    let updateMood;
    if (this.state.mood === 'happy') {
      updateMood === 'sad'
    } else if (this.state.mood === 'sad') {
      updateMood ==='happy'
    }
    this.setState({
      mood: updateMood
    })
  }
  render(){
    return (
      <div onClick = {this.handleClick} >
      {this.state.mood}
      </div>
    )
  }


}
export default SimpleComponent;


// n the components/SimpleComponent.js file, create a SimpleComponent component.
// The component should be declared as a class (instance of Component) so that it can carry state.
// The component should have a state property called mood that has a default value of happy.
// The component should simply render its current mood state to the page in a div.
// The component should implement a handleClick function that can serve as a callback to the <div>'s click event. When clicked, the component's mood should toggle between happy and sad states.
