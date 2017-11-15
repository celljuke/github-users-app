import 'react-native';
import React from 'react';
import Search from './search';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <Search />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
