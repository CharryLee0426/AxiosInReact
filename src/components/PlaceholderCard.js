import React from "react";
import { Button, Card, Placeholder } from "semantic-ui-react";

const PlaceholderCard = () => {
    return (
        <Card>
            {/* avatar placeholder */}
            <Placeholder>
                <Placeholder.Image square />
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

export default PlaceholderCard