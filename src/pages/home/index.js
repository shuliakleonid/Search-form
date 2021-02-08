import React from 'react';
import Container from '../../components/Conteiner';
import Autocomplete from '../../components/Autocomplete';

const Home = () => {
  return (
      <Container>
        {({ searchValue, onSearchChange, articles })=><Autocomplete onSearchChange={onSearchChange} articles={articles} searchValue={searchValue}/>}
      </Container>
  );
};

export default Home;
