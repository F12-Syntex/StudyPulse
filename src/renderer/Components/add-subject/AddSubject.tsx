import React, { useState } from 'react';
import './AddSubject.scss';
import { styled } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Collapse, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

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

function AddSubject() {
  const [error, setError] = useState('');
  const [open, setOpen] = React.useState(true);

  function submit() {
    const nameComponent = document.getElementById('AddSubject-name') as HTMLInputElement;
    const descriptionComponent = document.getElementById(
      'AddSubject-description',
    ) as HTMLInputElement;
    const name = nameComponent.value.trim();
    const description = descriptionComponent.value.trim();

    if (name === '') {
      setError('Please enter a valid name.');
      setOpen(true);
      return;
    }

    // Rest of your logic
  }

  return (
    <div className="AddSubject">
      <div className="AddSubject-login-container">
        <Container component="main" maxWidth="xs" className="AddSubject-grid">
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
              Add Subject
            </Typography>
            <Box component="form" noValidate sx={{ mt: 3 }} className="AddSubject-form">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <InputTextField
                    required
                    fullWidth
                    id="AddSubject-name"
                    label="Subject"
                    name="AddSubject-input-name"
                    autoComplete="Subject"
                    InputProps={{
                      style: { color: 'white' },
                    }}
                    InputLabelProps={{
                      style: { color: 'gray' },
                    }}
                  />
                  {error && (
                    <Collapse in={open}>
                      <Alert
                        severity="error"
                        action={
                          <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                              setOpen(false);
                            }}
                          >
                            <CloseIcon fontSize="inherit" />
                          </IconButton>
                        }
                        style={{ backgroundColor: '#1e1e1e', color: 'white' }}
                      >
                        {error}
                      </Alert>
                    </Collapse>
                  )}
                </Grid>
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <InputTextField
                    fullWidth
                    id="AddSubject-description"
                    label="Description"
                    name="AddSubject-input-description"
                    autoComplete="Description"
                    InputProps={{
                      style: { color: 'white' },
                    }}
                    InputLabelProps={{
                      style: { color: 'gray' },
                    }}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={submit}
              >
                Add Subject
              </Button>
              <Grid container justifyContent="space-between"></Grid>
            </Box>
          </Box>
        </Container>
      </div>
    </div>
  );
}

export default AddSubject;
