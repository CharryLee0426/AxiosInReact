import React from "react";
import { Container, Grid } from "semantic-ui-react";
import PlaceholderCard from "./PlaceholderCard";
import TodoCard from "./TodoCard";

class todoItem {
    constructor(userId, id, title, completed) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.completed = completed;
    }
}

// this component is for test only
const TestView = () => {
    const item = new todoItem(1, 1, "Helloworld", true)
    return (
        <Container>
            <Grid stackable columns={3}>
                    <Grid.Column>
                        <TodoCard title={item.title} completed={item.completed} />
                    </Grid.Column>
                    <Grid.Column>
                        <TodoCard title={item.title} completed={item.completed} />
                    </Grid.Column>                    
                    <Grid.Column>
                        <TodoCard title={item.title} completed={item.completed} />
                    </Grid.Column>                    
                    <Grid.Column>
                        <TodoCard title={item.title} completed={item.completed} />
                    </Grid.Column>                    
                    <Grid.Column>
                        <TodoCard title={item.title} completed={item.completed} />
                    </Grid.Column>                    
                    <Grid.Column>
                        <TodoCard title={item.title} completed={item.completed} />
                    </Grid.Column>
                    
                    <Grid.Column>
                        <PlaceholderCard />
                    </Grid.Column>
                    <Grid.Column>
                        <PlaceholderCard />
                    </Grid.Column>
                    <Grid.Column>
                        <PlaceholderCard />
                    </Grid.Column>
                    <Grid.Column>
                        <PlaceholderCard />
                    </Grid.Column>
                    <Grid.Column>
                        <PlaceholderCard />
                    </Grid.Column>
                    <Grid.Column>
                        <PlaceholderCard />
                    </Grid.Column>
            </Grid>
        </Container>
    )
}

export default TestView