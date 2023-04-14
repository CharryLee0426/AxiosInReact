import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Grid } from "semantic-ui-react";
import NewCard from "./NewCard";
import PlaceholderCardView from "./PlaceholderCardView";
import TodoCard from "./TodoCard";

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

    function addItem(item) {
        setData(prevData => [...prevData, item])
    }

    if (!data.length) {
        return (
            <Container>
                <PlaceholderCardView />
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

                    <Grid.Column>
                        <NewCard addItem={addItem}/>
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}

export default TestView