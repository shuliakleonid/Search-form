import React from 'react';
import Container from '../../components/Conteiner';
import Autocomplete from '../../components/Autocomplete';
import './styles.scss'
const Home = () => {
  return (
      <div className='home-page-container'>
        <img src="./google_logo.svg" alt="logo"/>
      <Container>
        {({ searchValue, onSearchChange, articles })=><Autocomplete onSearchChange={onSearchChange} articles={articles} searchValue={searchValue}/>}
      </Container>
      </div>
  );
};

export default Home;
