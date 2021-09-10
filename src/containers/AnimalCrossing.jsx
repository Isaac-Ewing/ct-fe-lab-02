import React, { Component } from 'react';
import AnimalCrossingCharacterList from '../components/characters/AnimalCrossingCharacterList';
import AnimalCrossingCharacter from '../components/characters/AnimalCrossingCharacters';
import { getChars } from '../services/ACApiStuff';

export default class AnimalCrossingContainer extends Component {
    state = {
      characters: []
    }

    componentDidMount() {
        getChars(this.props.match.params.id).then((chars) => this.setState({ characters: chars }));
    }
    render() {
      return this.props.match.params.id ? <AnimalCrossingCharacter id={this.state.characters.id} name={this.state.characters.name} quote={this.state.characters.quote} personality={this.state.characters.personality} /> : <AnimalCrossingCharacterList characters={this.state.characters}/>;
    }
}
