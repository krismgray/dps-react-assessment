import React from 'react';
import Beers from './Beers';
import axios from 'axios';
import { connect } from 'react-redux';
import { setHeaders } from '../actions/headers';


class BeersList extends React.Component {
  state = { beverages: [] }

  componentDidMount() {
    axios.get('/api/all_beers')
      .then( res => {
        this.setState({ beverages: res.data })
      })
  }

  displayBeers = () => {
    const { dranks } = this.props;
    return dranks.map( b => {
      return(
        <li key={b.id} drank={b} />
      );
    })
  }

  render() {
    return(
      <div>
        { this.displayBeers() }
      </div>

    )
  }
}

export default connect()(BeersList);
