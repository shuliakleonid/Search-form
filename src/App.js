import React from 'react'
import Autocomplete from './components/Autocomplete';
import Container from './components/Conteiner';


const App = () => (
  <Container>
    {({searchValue, onSearchChange, articles})=><Autocomplete articles={articles} searchValue={searchValue} onSearchChange={onSearchChange}/>}
  </Container>
)

export default App;
