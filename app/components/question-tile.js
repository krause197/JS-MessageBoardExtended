import Ember from 'ember';

export default Ember.Component.extend({
  totalAnswers: Ember.computed('question.answers', function() {
    return 'Total Answers: ' + this.get('question.answers.length');
  }),

  favoriteList: Ember.inject.service(),
  favoriteClicked: false,

  actions: {
    addFavorite(question) {
      this.get('favoriteList').add(question);
      this.set('favoriteClicked', true);
    },

    removeFavorite(favorite) {
      this.get('favoriteList').remove(favorite);
      this.set('favoriteClicked', false);
    }
  }
});
