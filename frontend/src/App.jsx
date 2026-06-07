import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './components/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import About from './pages/About';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main container" role="main">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/projects/:id" component={ProjectDetail} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Redirect to="/" />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;