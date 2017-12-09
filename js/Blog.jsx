import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AllPosts from './AllPosts'
import Post from './Post'

const Blog = () => (
  <Switch>
    <Route exact path='/blog' component={AllPosts}/>
    <Route path='/blog/:number' component={Post}/>
  </Switch>
)


export default Blog
