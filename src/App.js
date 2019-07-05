import React, { Fragment } from 'react';
import './App.css';
import LoginPage from './Component/LoginPage'
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom'
import Dashboard from "./Component/DashBoard"

const isAuthenticate = () => {
  const token = sessionStorage.getItem('token');
  if (token) {
    return true;
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    isAuthenticate()
      ? <Component {...props} />
      : <Redirect to='/' />
  )} />
)


function App() {
  return (
    <Fragment >
      <Router>
        <div>
          <Switch>

          <Route exact path="/" component={LoginPage} />
          <PrivateRoute path="/dashboard" component={Dashboard} >
    
           
          </PrivateRoute>
          <Route render={() => <div> not found </div>}/>
          </Switch>
        </div>
      </Router>

      {/* <Router>
        
        <Dashboard >

          <Switch>
            <Route exact path="/"  render={
              () => <div> First page</div> } />

            <Route path="/test" render={
              () => <div> second page </div> } />

            <Route render={() => <h3>Not Found</h3>} />
          </Switch>
        </Dashboard>
      </Router> */}
    </Fragment>
  );
}

export default App;


const Test = () => {
  return (
    <div>tetsting</div>
  )
}