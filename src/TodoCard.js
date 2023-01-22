import React from "react";
import Logo from "./static/img/logo512.png";    // picture also need to be imported as a component
import { Button, Card, Placeholder, Image } from "semantic-ui-react";

const TodoCard = (props) => {
    return (
        <Card>
            <Image src={Logo} wrapped />

            <Card.Content>
                <Card.Header>{ props.title }</Card.Header>
                <Card.Meta>{ props.completed ? '✅' : '❌' }</Card.Meta>
                {/* <Card.Header>Header</Card.Header>
                <Card.Meta>✅</Card.Meta> */}
                <Card.Description>
                    Header's length is {props.title.length}.
                </Card.Description>
                <Placeholder>
                    <Placeholder.Paragraph>
                    <Placeholder.Line length="short" />
                    <Placeholder.Line length="medium" />
                    </Placeholder.Paragraph>
                </Placeholder>
            </Card.Content>

            <Card.Content extra>
                <Button primary>Done</Button>
                <Button>Cancel</Button>
            </Card.Content>
        </Card>
    )
}

export default TodoCard