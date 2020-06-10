import React, { Component } from 'react';
import { Detail } from './components/Detail';
import { Switch , Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound'

import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {
  render() {
    const url = new URL(document.location)
    const hasId = url.searchParams.has('id')
    
    if (hasId) {
      return <Detail id={url.searchParams.get('id')}/>
    }
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component= {Home } />
          <Route path='/detail/:id' component= {Detail} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default App;
