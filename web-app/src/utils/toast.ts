import { IToast } from '@/components/Toast/types';
import { toastEventManager } from '@/configs';

export default function toast(message: Omit<IToast, 'id'>) {
  toastEventManager.emit('addtoast', message);
}
