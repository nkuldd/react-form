import React from 'react';
import { BrowserRouter, Route, Switch,Redirect} from 'react-router-dom';
import Create from './pages/Create';
import Edit from './pages/Edit';
import Index from './pages/index';
import { Provider} from 'react-redux';
import store from './store/store'
// class App extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//         // store的挂载
//        <Provider store={store}>
//         <div className="App">
//           <BrowserRouter>
//           <Switch>
//             <Route path="/index" component={Index}/>  
//             <Route path="/create" component={Create}/>
//             <Route path="/edit" component={Edit}/>    
//             <Redirect to="/index" />
//           </Switch>
//         </BrowserRouter>,
//         </div>
//       </Provider>
//     );
//   }
// }
function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}
export default (App)

