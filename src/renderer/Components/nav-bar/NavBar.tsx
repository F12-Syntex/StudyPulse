/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { ToggleButtonGroup, ToggleButton } from '@mui/material';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import './NavBar.scss';
import { NavigateFunction, useNavigate } from 'react-router-dom';

function handleBack(navigate: NavigateFunction) {
  navigate(-1);
}

function handleFront(navigate: NavigateFunction) {
  navigate(1);
}

function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="navbar-container">
      <div className="navbar-buttons">
        <ToggleButtonGroup orientation="horizontal" exclusive className="navbar-button-group">
          <ToggleButton
            value="list"
            aria-label="list"
            className="navbar-button"
            disableRipple
            onClick={() => handleBack(navigate)}
            sx={{
              outline: 'none',
              border: 'none',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
              },
            }}
          >
            <ChevronLeftIcon htmlColor="white" className="navbar-button-icon" />
          </ToggleButton>
          <ToggleButton
            onClick={() => handleFront(navigate)}
            value="module"
            aria-label="module"
            className="navbar-button"
            disableRipple
            sx={{
              outline: 'none',
              border: 'none',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
              },
            }}
          >
            <ChevronRightIcon htmlColor="white" className="navbar-button-icon" />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  );
}

export default NavBar;
