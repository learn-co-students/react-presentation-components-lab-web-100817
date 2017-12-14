// Code SimpleComponentHere Here
import React from 'react';
import PropTypes from 'prop-types';

class SimpleComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      mood: "happy"
    }
  }

changeMood = () => {
  const newMood = this.state.mood === "happy" ? "sad" : "happy";

  this.setState({
    mood: newMood
  })
}

  render() {
    console.log(this.state.mood)
    return (
      <div onClick={this.changeMood}>
      {this.state.mood}
      </div>
    )
  }
}


SimpleComponent.propTypes = {
  mood: PropTypes.string
}

SimpleComponent.defaultProps = {
  mood: 'happy'
}

export default SimpleComponent;
