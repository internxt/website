import { Alert, Snackbar } from '@mui/material';
import { ChatCentered } from 'phosphor-react';
import React from 'react';

const ShowSnackbar = ({ open }) => {
  return (
    <Snackbar open={open} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} autoHideDuration={5000} bg-white>
      <Alert severity="success" sx={{ width: '100%' }}>
        Copy in clipboard!
      </Alert>
    </Snackbar>
  );
};

export default ShowSnackbar;
