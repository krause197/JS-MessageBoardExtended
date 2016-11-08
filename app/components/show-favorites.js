import Ember from 'ember';

export default Ember.Component.extend({
  favoriteList: Ember.inject.service(),

  actions: {
    removeFavorite(favorite) {
      this.get('favoriteList').remove(favorite);
      this.set('favoriteClicked', false);
    }

  }
});
