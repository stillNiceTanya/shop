import { toast } from 'react-toastify';
import { toastConfig } from './constants';

export default function showInfoMessage(message) {
  return toast.info(message, toastConfig);
}
