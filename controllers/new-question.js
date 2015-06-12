QAndA.NewQuestionController = Ember.Controller.extend({
	actions: {
		save: function() {
			var newQuestion = this.store.createRecord('question', {
				question: this.get('question'),
				description: this.get('description')
			});
			newQuestion.save();
			this.transitionToRoute('questions');
		}
	}
})