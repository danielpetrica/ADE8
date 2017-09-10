'use babel';

export default class ADE8PadView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('a-d-e8-pad');

    // Create message element
    const message = document.createElement('div');
    message.textContent = 'The ADE8Pad package is Alive! It\'s ALIVE! Press ctr-alt-0 (zero) to close this tab';
    message.classList.add('message');
    this.element.appendChild(message);
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

}
