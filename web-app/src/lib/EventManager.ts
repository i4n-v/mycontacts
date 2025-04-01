type IListener = (payload?: any) => void;

export default class EventManager<E extends string, L extends IListener> {
  listeners: Record<E, L[]>;

  constructor() {
    this.listeners = {} as Record<E, L[]>;
  }

  on(event: E, listener: L) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(listener);
  }

  off(event: E, listenerToRemove: L) {
    const listeners = this.listeners[event];

    if (!listeners) return;

    const filteredListeners = listeners.filter((listener) => listener !== listenerToRemove);

    this.listeners[event] = filteredListeners;
  }

  emit(event: E, payload: Parameters<L>[0]) {
    if (!this.listeners[event]) return;

    this.listeners[event].forEach((listener) => {
      listener(payload);
    });
  }
}
