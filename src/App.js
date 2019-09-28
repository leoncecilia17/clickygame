import React, { Component } from "react";
import DogCard from "./components/DogCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import dogs from "./dogbreeds.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    dogs
  };

  removeDog = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const dogs = this.state.dogs.filter(dog => dog.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ dogs });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Dog Breed Clicky Game</Title>
        {this.state.dogs.map(dog => (
          <DogCard
            removeDog={this.removeDog}
            id={dog.id}
            key={dog.id}
            breed={dog.breed}
            image={dog.image}
            temperament={dog.temperament}
            group={dog.group}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
