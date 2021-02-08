import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const App = () => (
    <Router>
      <Switch>
        <Route exact path='/' render={() => <div>Home Page</div>}/>
        <Route path='/search' render={() => <div>Search Page</div>}/>
        <Route  render={() => <div>Not Found Page</div>}/>
      </Switch>
    </Router>



    // <Container>
    //   {({searchValue, onSearchChange, articles})=><Autocomplete articles={articles} searchValue={searchValue} onSearchChange={onSearchChange}/>}
    // </Container>
)

export default App;
