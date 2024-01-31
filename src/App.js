import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Import your own components
import Home from './components/Home';
import Dog from './components/Dog';

// Define custom styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  linkStyle: {
    color: '#FFF',
    textDecoration: 'none',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Cat Adoption
            </Typography>
            <Button color="inherit" component={Link} to="/react-cat-api">Cat</Button>
            <Button color="inherit" component={Link} to="/dogs">Dogs</Button>
          </Toolbar>
        </AppBar>

        <Routes>
          <Route path="/react-cat-api" element={<Home />} />
          <Route path="/dogs" element={<Dog />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
