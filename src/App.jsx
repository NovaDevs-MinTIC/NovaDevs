import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from 'pages/Login';
import RegistroVentas from 'pages/RegistroVentas';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Login}></Route>
          <Route path="/RegistroVentas" exact={true} component={RegistroVentas}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
