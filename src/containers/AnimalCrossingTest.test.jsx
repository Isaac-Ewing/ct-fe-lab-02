import React from 'react';
import { render, screen } from '@testing-library/react';
import AnimalCrossingContainer from './AnimalCrossing';

describe('Animal Crossing Container', () => {
  it('renders a list of villagers', async () => {
    render(<AnimalCrossingContainer />);
    const ul = await screen.findByRole('list', { name: 'characters' });

    expect(ul).toMatchSnapshot();
    
  });
});
