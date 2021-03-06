QAndA.AnswerController = Ember.Controller.extend({
	needs: ['question'],
	actions: {
		save: function() {
			var answer = this.store.createRecord('answer', {
				answer: this.get('answer')
			});
			answer.save();

			var question = this.get('controllers.question.model');
			question.get('answers').pushObject(answer);
			question.save();

			this.set('answer', '');
			this.transitionToRoute('question', question.id);
		}
	}
});