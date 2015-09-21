Router.configure({
	layoutTemplate: "layout",
	loadingTemplate: "loading",
	notFoundTemplate: "notFound",

});

Router.route('/',{
	name: "homeIndex"
});

Router.route('/about',{
	name: "homeAbout"
});

Router.route('/contact',{
	name: "homeContact"
});

Router.route('/post',{
	name: "homePost"
});

Router.route('/postData',{
	name: "homePostData"
})

