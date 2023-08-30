/* eslint-disable jsx-a11y/anchor-is-valid */
import './ForgotPassword.scss';

import { styled } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const InputTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'gray',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
});

/**
 * this component is responsible for ensuring the user is authenticated
 */
function ForgotPassword() {
  return (
    <div className="ForgotPassword">
      <div className="ForgotPassword-login-container">
        <Container component="main" maxWidth="xs" className="ForgotPassword-grid">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Email
            </Typography>
            <Box component="form" noValidate sx={{ mt: 3 }} className="ForgotPassword-form">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <InputTextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    InputProps={{
                      style: { color: 'white' },
                    }}
                    InputLabelProps={{
                      style: { color: 'gray' },
                    }}
                  />
                </Grid>
              </Grid>
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Reset Password
              </Button>
              <Grid container justifyContent="space-between"></Grid>
            </Box>
          </Box>
        </Container>
      </div>
    </div>
  );
}

export default ForgotPassword;
