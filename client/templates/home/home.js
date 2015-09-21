Template.homeIndex.helpers({
	datas: function()
	{
		return Post.find();
	}

});

Template.homeIndex.events({
	'click .delete': function()
	{
		Post.remove(this._id);
	}
});

