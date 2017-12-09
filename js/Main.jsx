import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Blog from './Blog';

const styles = {
  fontFamily: 'Roboto Slab, serif',
}

const Main = () => (
  <main className='scrollable' style={styles}>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/blog' component={Blog}/>
    </Switch>
  </main>
);

export default Main;
