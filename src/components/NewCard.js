import axios from "axios";
import { useState } from "react"
import { Button, Card, Form, Input, Label, Modal, Placeholder } from "semantic-ui-react"

// example todo class
class todo {
    constructor(userId, id, title, completed) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.completed = completed;
    }
}

const NewCard = (props) => {
    const [open, setOpen] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [title, setTitle] = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleAdditem = () => {
        var newItem = new todo(233, 322, title, completed)
        
        // update this new Item to server (only a simulation)
        axios.post('https://jsonplaceholder.typicode.com/todos', JSON.stringify(newItem))
        .then(function (response) {
            console.log(response.status)
            console.log(response.data)
        })

        props.addItem(newItem)

        setTitle('')
        setOpen(false)
    }

    return (
        <Card>
            <Placeholder style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                <Placeholder.Image square />
                
                <Modal
                    centered='true' 
                    open={open} 
                    onClose={() => setOpen(false)} 
                    onOpen={() => setOpen(true)} 
                    trigger={<Button icon='add' circular size="massive" />} >

                    <Modal.Content>
                        <Form>
                            <Form.Field inline>
                                <Label>Title</Label>
                                <Input placeholder='Title you want' onChange={handleChange}></Input>
                                <p>You typed: {title}</p>
                            </Form.Field>
                            <Form.Field inline>
                                <Label>Completed 🤨</Label>
                                <Form.Group>
                                    <Form.Radio checked={completed === true} label='✅' onChange={() => setCompleted(true)} />
                                    <Form.Radio checked={completed === false} label='❌' onChange={() => setCompleted(false)} />
                                </Form.Group>
                            </Form.Field>
                            <Form.Button onClick={handleAdditem}>OK</Form.Button>
                        </Form>
                    </Modal.Content>

                </Modal>   
            </Placeholder>

            {/* content placeholder */}
            <Card.Content>
                <Placeholder>
                    <Placeholder.Header>
                        <Placeholder.Line length="very short" />
                        <Placeholder.Line length="medium" />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                        <Placeholder.Line length="short" />
                    </Placeholder.Paragraph>
                </Placeholder>
            </Card.Content>
        </Card>
    )
}

export default NewCard