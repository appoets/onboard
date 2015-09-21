if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Router.route('/', function () {
      this.route('home', {
    name: 'home',
    path: '/',
    template: 'views/home'
    });
});

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
