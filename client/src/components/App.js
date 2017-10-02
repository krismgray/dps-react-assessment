import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Flash from './Flash';
import Home from './Home';
import axios from 'axios'
import Beers from './Beers';
import { Switch, Route } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Segment>
        <NavBar />
        <Flash />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/beers' component={Beers} />
          <Route component={NoMatch} />
        </Switch>
      </Segment>
    );
  }
}

// const styles = {
//   background: {
//     backgroundColor: 'black',
//   },
// }
// style={styles.background} add back to segment

export default App;
