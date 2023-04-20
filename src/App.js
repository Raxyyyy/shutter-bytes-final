import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import memories from './images/memories.png';
import Landing from './components/Landing/Landing';
const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [path, setPath] = useState(1)


  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">SHUTTER BYTES</Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </AppBar>
      <div class="card">
        <ul class="custom-links">
          <li class=" custom-pointer" onClick={()=> setPath(1)}>Home</li>
          <li class="custom-pointer" onClick={()=> setPath(2)}>Library</li>
          <li class="custom-pointer" onClick={()=> setPath(3)}>Contribute</li>
          
        </ul>
        </div>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          {
        (path==1)?(
          <Landing/>
        ):(path==2)?(
          <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
        ):(
          <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
        )
      }
            
          </Grid>
        </Container>
      </Grow>
      
        

      
    
    </Container>
  );
};

export default App;
