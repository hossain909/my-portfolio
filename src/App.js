import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import About from './components/Home/About/About';
import Blogs from './components/Home/Blogs/Blogs';
import Home from './components/Home/Home/Home';
import Projects from './components/Home/Projects/Projects';
import Resume from './components/Resume/Resume';
import Footer from './components/Shared/Footer/Footer';
import MainNav from './components/Shared/MainNav/MainNav';
import "./index.css";
function App() {
  return (
    <Router>
      <MainNav></MainNav>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/projects">
          <Projects></Projects>
        </Route>
        <Route path="/blogs">
          <Blogs></Blogs>
        </Route>
        <Route path="/resume">
          <Resume></Resume>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
