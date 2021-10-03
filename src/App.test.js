import { render, screen } from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom';
import React from 'react';

test('renders without crashing', () => {
  render(<App />);
  const textElement = screen.getByText(/country/i);
  expect(textElement).toBeInTheDocument();
});

// test('renders learn react link', () => {
//   render(<App />);
//   const textElement = screen.getByText(/Select/i);
//   expect(textElement).toBeInTheDocument();
// });
