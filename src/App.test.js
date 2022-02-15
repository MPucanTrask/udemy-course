// import React from 'react';
import { unmountComponentAtNode } from 'react-dom';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const MOCK_DATA = [
  {
    id: 1,
    email: 'test.test@reqres.in',
    first_name: 'Test',
    last_name: 'Testing',
    avatar: 'https://test.in/img/faces/1-image.jpg',
  },
  {
    id: 2,
    email: 'foo.bar@reqres.in',
    first_name: 'Foo',
    last_name: 'Bar',
    avatar: 'https://foo.in/img/faces/1-image.jpg',
  },
];

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(MOCK_DATA),
}));

describe('Test custom hook', () => {
  describe('useFormField', () => {
    it('Then the correct average should be returned', () => {

    });
  });
});
