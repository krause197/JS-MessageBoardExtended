import Ember from 'ember';

export default Ember.Component.extend({
  favoriteList: Ember.inject.service(),
  favoriteClicked: false,


  actions: {
    removeFavorite(favorite) {
      this.set('favoriteClicked', false);
      this.get('favoriteList').remove(favorite);

    }
  }
});
