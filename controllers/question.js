QAndA.QuestionController = Ember.ObjectController.extend({
	isEditing: false,
	actions: {
		edit: function() {
			this.set('isEditing', true);
		},
		save: function() {
			this.set('isEditing', false);
		},
		delete: function() {
			if (confirm('Are you sure you would like to delete this question?')) {
				this.get('model').destroyRecord();
				this.transitionToRoute('questions');
			}
		}
	}
});