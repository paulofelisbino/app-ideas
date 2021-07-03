/**
 * @format
 */

import 'react-native';
import React from 'react';
import Home from '@/Home';
import {fireEvent, render} from '@testing-library/react-native';

it('renders correctly', () => {
  render(<Home />);
});

it('converts input text to pizza icon', () => {
  const {getByTestId} = render(<Home />);

  const input = getByTestId('input');
  fireEvent.changeText(input, 'word');

  const output = getByTestId('output');
  expect(output.props.children).toBe('🍕');
});

it('outputs one pizza icon per word', () => {
  const {getByTestId} = render(<Home />);

  const input = getByTestId('input');
  fireEvent.changeText(input, 'word1 word2 word3 b');

  const output = getByTestId('output');
  expect(output.props.children).toBe('🍕 🍕 🍕 🍕');
});
