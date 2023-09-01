/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, styled } from '@mui/material';
import './Home.scss';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';

const NewButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#0063cc',
  borderColor: '#0063cc',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
});

function addNewSubject(navigate: NavigateFunction) {
  navigate('/add-subject');
}

function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <div className="homepage-header">
        <NewButton
          variant="contained"
          endIcon={<ExpandMoreIcon />}
          onClick={() => addNewSubject(navigate)}
        >
          New
        </NewButton>
      </div>
      <div className="homepage-subjects"></div>
    </div>
  );
}

export default Homepage;
