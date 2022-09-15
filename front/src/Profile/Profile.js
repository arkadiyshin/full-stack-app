import { useState } from "react";
import { List, ListItem, ListItemText, Grid, Button } from '@material-ui/core';
import {Link} from 'react-router-dom';

function Profile() {
    const [profile, setProfile] = useState(
        {
            email: "homer.simpson@wildcodeschool.fr",
            name: "Homer",
            lastname: "Simpson"
        }
    )
    return (
        <>
            <List>
                <ListItem>
                    <ListItemText primary="email" secondary={profile.email} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="name" secondary={profile.name} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="lastname" secondary={profile.lastname} />
                </ListItem>
            </List>
            <Grid item xs={12} >
                <Button type="submit" value="Submit" variant="text" color="primary"> <Link to='/signin'>Sign Out</Link> </Button>
            </Grid>
        </>
    );
}

export default Profile;