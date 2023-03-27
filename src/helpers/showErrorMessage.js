import { toast } from 'react-toastify';
import { toastConfig } from './constants';

export default function showErrorMessage(message) {
  return toast.error(message, toastConfig);
}
