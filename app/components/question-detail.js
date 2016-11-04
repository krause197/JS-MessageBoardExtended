import Ember from 'ember';

export default Ember.Component.extend({
  editQuestionForm: false,
  actions: {
    edit(question, params) {
      this.sendAction('edit', question, params);
    },

    delete(question) {
      if (confirm('Are you sure you want to delete this Question?')) {
        this.sendAction('destroyQuestion', question);
      }
    },

    deleteAnswer(answer) {
      if (confirm('Are you sure you want to delete this answer?')) {
        this.sendAction('destroyAnswer', answer);
      }
    },

    editAnswer(answer, params) {
      this.sendAction('editAnswer', answer, params);
    }
  }
});
