import React from 'react';
import { Alert, Snackbar } from '@mui/material';

const Message = ({ type, message, isOpen, setIsOpen }) => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsOpen(false);
  };
  return (
    <Snackbar open={isOpen} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export const SuccessMessage = ({ message, isOpen, setIsOpen }) => {
  return (
    <Message
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      type='success'
      message={message}
    />
  );
};

export const ErrorMessage = ({ message, isOpen, setIsOpen }) => {
  return (
    <Message
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      type='error'
      message={message}
    />
  );
};
