import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion1() {
      var params = {
        text: this.get('text'),
        author: this.get('author'),
        notes: this.get('notes')
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion2', params);
      this.set('text', '');
      this.set('author', '');
      this.set('notes', '');
    }
  }
});
