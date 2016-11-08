import Ember from 'ember';

export default Ember.Component.extend({
  totalAnswers: Ember.computed('question.answers', function() {
    return 'Total Answers: ' + this.get('question.answers.length');
  }),

  favoriteList: Ember.inject.service(),

  actions: {
    addFavorite(question) {
      this.get('favoriteList').add(question);
    }
  }
});
