import React from 'react';
import { Container, Typography, Button, Box, Grid, Card, CardContent, CardActions, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

const ReferAndEarn = ({ handleOpen }) => {
  return (
    <Container maxWidth="md" style={{ marginTop: '30px' }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Refer & Earn
      </Typography>
      <Typography variant="h6" component="p" align="center" gutterBottom>
        Invite your friends and earn rewards!
      </Typography>
      <Grid container justifyContent="center" spacing={3} style={{ marginTop: '30px' }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Reward 1
              </Typography>
              <Typography color="textSecondary">
                Description of reward 1.
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Reward 2
              </Typography>
              <Typography color="textSecondary">
                Description of reward 2.
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
       
      </Grid>
      <Box mt={4} display="flex" justifyContent="center">
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Refer Now
        </Button>
      </Box>
    </Container>
  );
};

export default ReferAndEarn;
