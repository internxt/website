import React from 'react';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const openErrorToast = (message: string) => toast.error(message);
const openSuccessToast = (message: string) => toast.success(message);

const ShowSnackbar = () => {
  return (
    <ToastContainer
      theme="colored"
      transition={Bounce}
      pauseOnFocusLoss={false}
      pauseOnHover
      closeOnClick
      draggable
      draggablePercent={80}
      draggableDirection="x"
      role="alert"
      position="bottom-center"
      hideProgressBar
      closeButton={false}
      autoClose={3000}
    />
  );
};

export const notificationService = {
  openErrorToast,
  openSuccessToast,
};

export default ShowSnackbar;
