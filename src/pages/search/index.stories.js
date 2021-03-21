import React from 'react';
import Search from './search';
import moxios from 'moxios'

moxios.install();
moxios.stubRequest('https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=dfdsd&limit=10', {
  status: 200,
  response: '["dfdsd",["DFDS Seaways","DFDS","DFDS Seaways France","DFDVD","DFDVD II","DFBSD","Dudsday","DFDS Seaways (Freight Division)","DFDS Canal Tours","Dad (disambiguation)"],["","","","","","","","","",""],["https://en.wikipedia.org/wiki/DFDS_Seaways","https://en.wikipedia.org/wiki/DFDS","https://en.wikipedia.org/wiki/DFDS_Seaways_France","https://en.wikipedia.org/wiki/DFDVD","https://en.wikipedia.org/wiki/DFDVD_II","https://en.wikipedia.org/wiki/DFBSD","https://en.wikipedia.org/wiki/Dudsday","https://en.wikipedia.org/wiki/DFDS_Seaways_(Freight_Division)","https://en.wikipedia.org/wiki/DFDS_Canal_Tours","https://en.wikipedia.org/wiki/Dad_(disambiguation)"]]'
})
export default {
  title: 'Pages/Search',
  component: Search,
};

const Template = (args) => <Search {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  location: {
    search: '?query=dfdsd'
  }
};
export const NoData = Template.bind({});
NoData.args = {
  location: {
    search: '?query='
  }
};
