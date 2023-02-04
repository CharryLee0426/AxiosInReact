import { Grid } from 'semantic-ui-react';
import PlaceholderCard from './PlaceholderCard';

const PlaceholderCardView = () => {
    return (
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
    )
}

export default PlaceholderCardView