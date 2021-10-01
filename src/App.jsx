import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from 'pages/login';
import Ventas from 'pages/Ventas';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Login}></Route>
          <Route path="/Ventas" exact={true} component={Ventas}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
