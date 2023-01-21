import React from "react";
import { Container, Grid } from "semantic-ui-react";
import PlaceholderCard from "./PlaceholderCard";

// this component is for test only
const TestView = () => {
    return (
        <Container>
            <Grid stackable columns='equal'>
                <Grid.Row>
                    <Grid.Column>
                        <PlaceholderCard />
                    </Grid.Column>
                    <Grid.Column>
                        <PlaceholderCard />
                    </Grid.Column>
                    <Grid.Column>
                        <PlaceholderCard />
                    </Grid.Column>
                </Grid.Row>
                
                <Grid.Row>
                    <Grid.Column>
                        <PlaceholderCard />
                    </Grid.Column>
                    <Grid.Column>
                        <PlaceholderCard />
                    </Grid.Column>
                    <Grid.Column>
                        <PlaceholderCard />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}

export default TestView