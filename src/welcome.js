import React from 'react';
import { Button, Container, Header, Icon, Segment } from 'semantic-ui-react';

const Welcome = () => {
    return (
    <Container textAlign='center'>
      <Segment padded basic>
        <Header>Semantic UI Demo</Header>
      </Segment>
      <Segment padded='very'>
        <Button.Group>
          <Button positive>To be</Button>
          <Button.Or></Button.Or>
          <Button>not to be</Button>
        </Button.Group>
      </Segment>

      <Segment placeholder basic></Segment>
      
      <Segment vertical padded secondary basic>
        <Header size='tiny' color='grey'>
          <Icon name='question circle outline' />
          That is question.
        </Header>
      </Segment>
    </Container>
    )
}

export default Welcome