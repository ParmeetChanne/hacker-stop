import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/index';
import Hacking from './pages/hacking';
import BugBounty from './pages/bugbounty';
import OSCP from './pages/oscp';
import Writeups from './pages/writeups';
import Creators from './pages/creators';
import NotFound from './pages/404'
import mobilePentesting from './pages/mobilepentesting'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/hacking' component={Hacking} />
        <Route path='/bugbounty' component={BugBounty} />
        <Route path='/oscp' component={OSCP} />
        <Route path='/writeups' component={Writeups} />
        <Route path='/creators' component={Creators} />
        <Route path='/mobilepentesting' component={mobilePentesting} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
