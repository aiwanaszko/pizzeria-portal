import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';


function App() {
  return (
    <div className="App">
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
        <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
        </Switch>
      </MainLayout>
      </BrowserRouter>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
