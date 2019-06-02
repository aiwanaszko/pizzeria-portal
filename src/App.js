import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Dashboard from './components/views/Dashboard/Dashboard';
import Kitchen from './components/views/Kitchen/Kitchen';
import Ordering from './components/views/Ordering/Ordering';
import Order from './components/views/Order/Order';
import NewOrder from './components/views/NewOrder/NewOrder';
import Booking from './components/views/Booking/Booking';
import Event from './components/views/Event/Event';


function App() {
  return (
    <div className="App">
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={Dashboard} />
        <Route path={process.env.PUBLIC_URL + '/login'} component={Login} />
        <Route path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
        <Route path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
        <Route path={process.env.PUBLIC_URL + '/ordering'} component={Ordering} />
        <Route path={process.env.PUBLIC_URL + '/ordering/order/:id'} component={Order} />
        <Route path={process.env.PUBLIC_URL + '/ordering/new'} component={NewOrder} />
        <Route path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={Booking} />
        <Route path={process.env.PUBLIC_URL + '/tables/event/:id'} component={Event} />
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
