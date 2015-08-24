requirejs.config({
  baseUrl: 'js',
  paths: {
    'jquery': 'https://code.jquery.com/jquery-1.11.3.min',
    'underscore': 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.10.1/lodash.min',
    'backbone': 'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.2/backbone-min',
    'vent': 'vent'
  }
});

require(['jquery', 'underscore', 'backbone', 'main.min'],
function($, _, Backbone, main) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'home'
    },

    home: function() {
      console.log('home page loaded');
    }
  });

  var appRouter = new AppRouter();
  Backbone.history.start({pushState: true});
});
