import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/home';
import Search from './pages/search/search';
import NotFound from './pages/not-found/notFound';

const App = () => (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/search' component={Search}/>
        <Route  component={NotFound}/>
      </Switch>
    </Router>



    // <Container>
    //   {({searchValue, onSearchChange, articles})=><Autocomplete articles={articles} searchValue={searchValue} onSearchChange={onSearchChange}/>}
    // </Container>
)

export default App;
