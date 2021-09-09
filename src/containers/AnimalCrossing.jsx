import React, { Component } from 'react';
import AnimalCrossingCharacterList from '../components/characters/AnimalCrossingCharacterList';
import { getChars } from '../services/ACApiStuff';

export default class AnimalCrossingContainer extends Component {
    state = {
      characters: []
    }

    componentDidMount() {
      getChars().then((chars) => this.setState({ characters: chars }));
    }
    render() {
      return <AnimalCrossingCharacterList characters={this.state.characters}/>;
    }
}
