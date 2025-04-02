import { IToast } from '@/components/Toast/types';
import { EventManager } from '@/lib';

const toastEventManager = new EventManager<
  'addtoast' | 'removetoast',
  (payload: Omit<IToast, 'id'>) => void
>();

export default toastEventManager;
