import { useState } from "react"
import { Button, Card, Form, Input, Label, Modal, Placeholder } from "semantic-ui-react"

const NewCard = () => {
    const [open, setOpen] = useState(false);
    const [completed, setCompleted] = useState(false);

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
                                <Input placeholder='Title you want'></Input>
                            </Form.Field>
                            <Form.Field inline>
                                <Label>Completed 🤨</Label>
                                <Form.Group>
                                    <Form.Radio checked={completed === true} label='✅' onChange={() => setCompleted(true)} />
                                    <Form.Radio checked={completed === false} label='❌' onChange={() => setCompleted(false)} />
                                </Form.Group>
                            </Form.Field>
                            <Form.Button>OK</Form.Button>
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