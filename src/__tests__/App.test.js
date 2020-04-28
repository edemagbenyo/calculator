import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';


test('renders learn react link', () => {
  const { container } = render(<App />);

  expect(container.childElementCount).toBe(1);
});
