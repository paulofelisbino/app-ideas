/**
 * @format
 */

import 'react-native';
import React from 'react';
import Home from '@/pages/Home';
import {fireEvent, render} from '@testing-library/react-native';

it('renders correctly', () => {
  render(<Home navigation={{navigate: 'a'}} />);
});

it('converts binary to decimal', () => {
  const {getByTestId} = render(<Home navigation={{navigate: 'a'}} />);

  const input = getByTestId('input');
  fireEvent.changeText(input, '10');

  const output = getByTestId('output');
  expect(output.props.children).toBe('2');
});

it('show an error if input has anything but 0 or 1', () => {
  const {getByTestId} = render(<Home navigation={{navigate: 'a'}} />);

  const input = getByTestId('input');
  fireEvent.changeText(input, '1a');

  const error = getByTestId('error');
  expect(error.props.children).toBe('Only 0 or 1 allowed!');

  const output = getByTestId('output');
  expect(output.props.children).toBe('');
});

it('does nothing if input is empty', () => {
  const {getByTestId, queryByTestId} = render(
    <Home navigation={{navigate: 'a'}} />,
  );

  const input = getByTestId('input');
  fireEvent.changeText(input, '');

  const error = queryByTestId('error');
  expect(error).toBe(null);

  const output = queryByTestId('output');
  expect(output).toBe(null);
});
