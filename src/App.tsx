import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import Article from './containers/Article';
import NavbarComponent from './components/NavbarComponent';
import SearchAndSort from './containers/SearchAndSort';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/search' exact component={SearchAndSort} />
          <Route path='/news/:newsId' exact component={Article} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
