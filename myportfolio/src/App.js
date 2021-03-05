import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import CV from "./components/CV";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './app.css'

const  App = () =>{
  return (
   <Router>
   <div className="app">
   <NavBar />
   <Switch>
   <Route exact path="/" component={Home} />
   <Route path="/about" component={About} />
   <Route path="/skills" component={Skills} />
   <Route path="/cv" component={CV} />
   <Route path="/contact" component={Contact} />
   </Switch>
   <Footer />
   </div>
   </Router>
  );
}

export default App;
