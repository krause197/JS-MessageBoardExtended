import Ember from 'ember';

export default Ember.Component.extend({
  editAnswerForm: false,
  actions: {
    editAnswerForm() {
      this.set('editAnswerForm', true);
    },

    editAnswer(answer) {
      var params = {
        text: this.get('text'),
        author: this.get('author')
      };
      this.set('editAnswerForm', false);
      this.sendAction('editAnswer', answer, params);
    }
  }
});
