import React from 'react';
import Search from './search';



export default {
  title: 'Pages/Search',
  component: Search,
};

const Template = (args) => <Search {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  location:{
    search:'?query=elon'
  }
};
export const NoData = Template.bind({});
NoData.args = {
  location:{
    search:'?query='
  }
};
