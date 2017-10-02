import React from 'react';
import axios from 'axios';


import { Container, Grid, List } from 'semantic-ui-react';


class Beers extends React.Component {
  state = { beers: [] }


  componentDidMount() {
  axios.get('/api/all_beers')
    .then( res => {
      let { data } = res;
      this.setState({ beers: data })
    });
}


  render() {
    const { beers } = this.state;
    return(
        <Container>
          <List>
            <List.Item >
              <List.Content>
                <List.Header></List.Header>
                <List.Description></List.Description>
              </List.Content>
            </List.Item>
          </List>
        </Container>
    )
  }
}

export default Beers;
