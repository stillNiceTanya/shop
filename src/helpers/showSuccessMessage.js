import { toast } from 'react-toastify';
import { toastConfig } from './constants';

export default function showSuccessMessage(message) {
  return toast.success(message, toastConfig);
}
