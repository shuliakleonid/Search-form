import React from 'react';
import ListItem from './index';

export default {
  title: 'Component/SearchItem',
  component: ListItem,
};

const Template = (args) => <ListItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: 'https://en.wikipedia.org',
  label: 'Test data for demo ',
};

