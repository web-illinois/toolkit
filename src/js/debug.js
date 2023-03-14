export default class Debugger {

  static isActive() {
    return document.documentElement.getAttribute('data-il-debug') === 'true';
  }

  static warn(message) {
    if (Debugger.isActive()) {
      console.warn(message);
    }
  }
}