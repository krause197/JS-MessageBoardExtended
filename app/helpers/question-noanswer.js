import Ember from 'ember';

export function questionNoanswer(params) {
  var question = params[0];
  if (question.get('answers').get('length') === 0) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-alert"></span> There are No Answers for this Question, help a battle buddy out!<span class="glyphicon glyphicon-alert"></span>');
  }
}

export default Ember.Helper.helper(questionNoanswer);
