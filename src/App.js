import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import LandingPage from './Layout/LandingPage/LandingPage';





function App() {
  return (
    <Router>
      <Switch>
          <Route path="/">
           <LandingPage heading="Tailwind CSS">
           <HomePage></HomePage>
           </LandingPage>  
           <Route path="/Home">
            
          </Route>
          <Route path="/Gallery">
           
          </Route>
          <Route path="/aboutUs">
           
          </Route>        
         
          </Route>
        </Switch>
    </Router>
    
  );
}

export default App;
