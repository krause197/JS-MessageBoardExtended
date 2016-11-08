import Ember from 'ember';

export default Ember.Component.extend({
  favoriteList: Ember.inject.service(),

  actions: {
    removeFavorite(question) {
      this.get('favoriteList').remove(question);
    }
  }
});
