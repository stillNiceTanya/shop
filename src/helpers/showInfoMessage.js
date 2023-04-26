import { toast } from 'react-toastify';
import ToastMessageContent from '../components/ToastMessageContent';

export default function showInfoMessage(message) {
  return toast.info(<ToastMessageContent message={message} />);
}
