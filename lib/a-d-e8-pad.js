'use babel';

import ADE8PadView from './a-d-e8-pad-view';
import { CompositeDisposable } from 'atom';

export default {

  aDE8PadView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.aDE8PadView = new ADE8PadView(state.aDE8PadViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.aDE8PadView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'a-d-e8-pad:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.aDE8PadView.destroy();
  },

  serialize() {
    return {
      aDE8PadViewState: this.aDE8PadView.serialize()
    };
  },

  toggle() {
    console.log('ADE8Pad was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
