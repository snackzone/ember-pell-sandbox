import Controller from '@ember/controller';
import { get, set } from '@ember/object';

export default Controller.extend({
  value: 'Hello!',

  init() {
    this._super(...arguments);

    set(this, 'options', {
      actions: [
        'bold',
        'italic',
        'underline',
        'strikethrough',
        {
          name: 'red',
          icon: 'R',
          title: 'Make red!',
          result: this.makeRed.bind(this)
        },
        {
          name: 'tokenize',
          icon: '[T]',
          title: 'Tokenize',
          result: this.tokenize.bind(this)
        }
      ]
    });
  },

  makeRed() {
    document.execCommand('foreColor', false, 'red')
  },

  tokenize() {
    const pell = document.querySelector('.pell-content');
    debugger;
  }
});
