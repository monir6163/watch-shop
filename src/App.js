import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Components/About/About';
import AllProducts from './Components/AllProducts/AllProducts';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Registation/Register';
import AuthProvider from './Context/AuthProvider';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';

function App() {
  AOS.init({
    delay: 200,
  })
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/Products">
              <AllProducts></AllProducts>
            </Route>
            <PrivateRoute exact path="/placeorder/:orderID">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
