import Ember from 'ember';

export default Ember.Component.extend({
  favoriteList: Ember.inject.service(),
  favoriteClicked: false,
  totalAnswers: Ember.computed('question.answers', function() {
    return 'Total Answers: ' + this.get('question.answers.length');
  }),



  actions: {
    addFavorite(question) {
      this.set('favoriteClicked', true);
      this.get('favoriteList').add(question);

    },

    removeFavorite(favorite) {
      this.set('favoriteClicked', false);
      this.get('favoriteList').remove(favorite);

    }
  }
});
