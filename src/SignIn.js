import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3050/">
        DrinkYourFruit
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const SignIn = ({ login }) => {
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      await login({ username: data.get('username'), password: data.get('password') });      
    }
    catch(ex){
      console.log(ex.response.data);
      setError("Incorrect username or password.")
    }
  };

  return (    
    <Grid container component="main" sx={{
      p: 0,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      height: "100vh",
      paddingLeft: 10,
      backgroundImage: 'url(/public/assets/LoginPage.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '1rem',
      position: 'relative',
    }}>      
      <Grid
        item
        xs="auto"
      
      >

        <Box > 
      <Grid item component={Paper} elevation={6} sx={{ flexGrow: 1, alignItems:"flex-start" }} square >
        <Box
          sx={{
            my: 50,
            mx: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username/Email"
              name="username"
              autoComplete="email"
              autoFocus
              inputProps={{ minLength: 3, maxLength: 25 }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              inputProps={{ minLength: 3, maxLength: 25 }}
            />
            { error && <Box variant='h3' sx={{color: 'red'}}>{error}</Box>}
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Link href="/#/signup" variant="body2" sx={{ color: 'primary.dark'}} >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
        </Box>
      </Grid>
     
    </Grid>    
  );
}

export default SignIn;