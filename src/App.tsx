import React from 'react';
import { BrowserRouter, Route, Switch,Redirect} from 'react-router-dom';
import Create from './pages/Create';
import Edit from './pages/Edit';
import Index from './pages/index';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/index" component={Index}/>  
          <Route path="/create" component={Create}/>
          <Route path="/edit" component={Edit}/>    
          <Redirect to="/index" />
        </Switch>
      </BrowserRouter>,
    </div>
  );
}
export default (App)

