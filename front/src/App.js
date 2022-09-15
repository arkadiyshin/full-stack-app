import './App.css';
import SignUp from './SignUp/SignUp';
import SignIn from './SignIn/SignIn';
import Profile from './Profile/Profile';
import { MuiThemeProvider, Grid, Paper } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles'
import { StrictMode } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const theme = createTheme({
  /* theme for v1.x */
});

function App() {
  return (
    <StrictMode>
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Grid container
            alignItems='center'
            style={{ height: '100%' }}>
            <Grid item xs={12}>
              <Paper
                elevation={4}
                style={{ margin: 32 }}
              >

                <Grid container
                  alignItems='center'
                  justifyContent='center'>
                  <Grid item xs={12} sm={6}>
                    <img src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png" alt='' />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Router>
                      <Routes>
                        <Route path='/' element={<SignIn />} />
                        <Route path='/signin' element={<SignIn />} />
                        <Route path='/signup' element={<SignUp />} />
                        <Route path='/profile' element={<Profile />} />
                      </Routes>
                    </Router>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </div>
    </StrictMode>
  );
}

export default App;

