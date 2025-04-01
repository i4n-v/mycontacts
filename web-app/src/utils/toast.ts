import { IToast } from '@/components/Toast/ToastContainer/types';

export default function toast(message: Omit<IToast, 'id'>) {
  const event = new CustomEvent('addtoast', {
    detail: message,
  });

  document.dispatchEvent(event);
}
