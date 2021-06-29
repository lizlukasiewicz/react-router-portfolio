
import './App.css';

import Home from './components/Home'
import Blog from './components/Blog'
import About from './components/About'
import Projects from './components/Projects'
import Header from './components/Header'

import {
  BrowserRouter as Router, // alias BrowserRouter as Router
  Route,
  //Switch
  // Link
} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <h1>Not another Sopranos fanpage</h1><p>(<strong>warning:</strong> spoilers galore)</p>
      <Router>
      <Header />

      <Route exact path="/" component={Home} />
      <Route path="/blog" component={Blog} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />

      </Router>
    </div>
  );
}

export default App;
