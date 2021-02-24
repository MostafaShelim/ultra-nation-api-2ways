import logo from './logo.svg';
import './App.css';
import Countries from './components/Countries/Countries';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CountryDetails from './components/CountryDetails/CountryDetails';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Countries/>
        </Route>
        <Route path='/country/:countryName'>
          <CountryDetails/>
        </Route>
        <Route path="*"><NotFound/></Route>
      </Switch>
    </Router>
  );
}

export default App;
