'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import {Badge} from '../Badge';

it('renders primary badge correctly', () => {
  const tree = renderer
    .create(<Badge intent="primary">آنلاین کار کن</Badge>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders primary badge with medium size and full rounded correctly', () => {
  const tree = renderer
    .create(<Badge intent="primary" size="medium" rounded="full">آنلاین کار کن</Badge>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders success badge correctly', () => {
  const tree = renderer
    .create(<Badge intent="success">کوتاه بودن</Badge>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders warning badge correctly', () => {
  const tree = renderer
    .create(<Badge intent="warning">زیبا بودن</Badge>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders danger badge correctly', () => {
  const tree = renderer
    .create(<Badge intent="danger">فارسی بودن</Badge>).toJSON();
  expect(tree).toMatchSnapshot();
});
