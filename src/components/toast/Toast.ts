import { toast } from 'react-toastify';
export const CouponsasaToast = {
  showSuccess: (
    message: string,
    position:
      | 'top-right'
      | 'top-center'
      | 'top-left'
      | 'bottom-right'
      | 'bottom-center'
      | 'bottom-left' = 'top-right'
  ) => {
    toast.success(message, {
      position: position,
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      // theme: 'colored',
    });
  },
  showWarning: (
    message: string,
    position:
      | 'top-right'
      | 'top-center'
      | 'top-left'
      | 'bottom-right'
      | 'bottom-center'
      | 'bottom-left' = 'top-right'
  ) => {
    toast.warning(message, {
      position: position,
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      theme: 'colored',
    });
  },
  showError: (
    message: string,
    position:
      | 'top-right'
      | 'top-center'
      | 'top-left'
      | 'bottom-right'
      | 'bottom-center'
      | 'bottom-left' = 'top-right'
  ) => {
    toast.error(message, {
      position: position,
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      theme: 'colored',
    });
  },
};
