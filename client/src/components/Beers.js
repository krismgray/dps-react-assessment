import React from 'react';
import axios from 'axios';


import { Container, Grid, List } from 'semantic-ui-react';


class Beers extends React.Component {
  state = { beers: [] }


  componentDidMount() {
  axios.get('/api/all_beers')
    .then( res => {
      let { data } = res;
      this.setState({ beers: data.entries })
    });
}


  render() {
    const { beers } = this.state;
    return(
      <div>
        <Container>
          <List>
            { beers.map( b =>
            <List.Item>
              <List.Content>
                <List.Header>{b.name}</List.Header>
                <List.Description>{b.description}</List.Description>
              </List.Content>
            </List.Item>
          )}
          </List>
        </Container>
      </div>
    )
  }
}

export default Beers;
