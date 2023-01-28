import axios from "axios";
import React, { useEffect, useState } from "react";
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
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos', {
            params: {
                userId: 4
            }    
        })
        .then(function (response) {
            setData(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
        .then(function() {
            console.log('statements in then block will be executed anyway')
        })
    }, [])

    if (!data.length) {
        return (
            <Container>
                <Grid stackable columns={3}>
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
    } else {
        return (
            <Container>
                <Grid stackable columns={3}>
                    {
                        data.map((item, index) => (
                            <Grid.Column key={index}>
                                <TodoCard title={item.title} completed={item.completed} />
                            </Grid.Column>
                        ))
                    }
                </Grid>
            </Container>
        )
    }
}

export default TestView