import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShowSnackbar = () => {
  return (
    <ToastContainer
      theme="colored"
      pauseOnFocusLoss={false}
      position="bottom-center"
      hideProgressBar
      closeButton={false}
      autoClose={3000}
    />
  );
};

export default ShowSnackbar;
