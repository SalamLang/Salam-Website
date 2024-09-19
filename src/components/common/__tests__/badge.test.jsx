'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import Badge from '../Badge';

it('renders correctly', () => {
  const tree = renderer
    .create('<Badge className="primary">آنلاین کار کن</Badge>').toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer
    .create('<Badge className="primary medium full">آنلاین کار کن</Badge>').toJSON();
  expect(tree).toMatchSnapshot();
});
