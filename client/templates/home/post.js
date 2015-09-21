
Template.homePost.events({
	'submit .newPost': function(event)
	{
		var title = event.target.title.value;
		var des = event.target.des.value;
		var currentUserId = Meteor.userId();
		var currentUserName = Meteor.user().username;

		Post.insert({
			title: title,
			description: des,
			createdBy: currentUserId,
			createdByUserName: currentUserName,
			createdAt: new Date(),
			updatedAt: new Date()
		});

		event.target.title.value ="";
		event.target.des.value = "";

		return false;
	}
});
