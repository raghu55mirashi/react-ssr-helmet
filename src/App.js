import './App.css';
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { About } from './components/About'
import { Contact } from './components/Contact'

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>App</title>
        <meta name="description" content="Todos!" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <h1>This is App page</h1>

      <Switch>
        <Route exact path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>

    </div>
  );
}

export default App;

      // <Route exact path="/" component={Contact} />