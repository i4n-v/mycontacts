type IListener = (payload?: any) => void;

export default class EventManager<E extends string, L extends IListener> {
  listeners: Map<E, L[]>;

  constructor() {
    this.listeners = new Map<E, L[]>();
  }

  on(event: E, listener: L) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }

    this.listeners.get(event)!.push(listener);
  }

  off(event: E, listenerToRemove: L) {
    const listeners = this.listeners.get(event);

    if (!listeners) return;

    const filteredListeners = listeners.filter((listener) => listener !== listenerToRemove);

    this.listeners.set(event, filteredListeners);
  }

  emit(event: E, payload: Parameters<L>[0]) {
    if (!this.listeners.has(event)) return;

    this.listeners.get(event)!.forEach((listener) => {
      listener(payload);
    });
  }
}
