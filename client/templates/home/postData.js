Template.homePostData.helpers({
	curUser: function()
	{
		var currentUserId = Meteor.userId();
		var posts = Post.find({createdBy: currentUserId});

		return posts;
	},
	username: function()
	{
		var username = Meteor.user().username;
		return username;
	}
});

