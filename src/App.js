import React from 'react'
import Container from './components/conteiner';
import Autocomplete from './components/autocomplete';


const  App=() => (
  <Container>
    {({searchValue, onSearchChange, articles})=><Autocomplete articles={articles} onSearchChange={onSearchChange} seachValue={searchValue}/>}
  </Container>
)
export default App;
