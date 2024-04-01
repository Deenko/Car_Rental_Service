$(document).ready(function() {

  $("main#spapp > section").height($(document).height() - 150);

  var app = $.spapp({pageNotFound : 'error_404'}); // initialize

  // define routes
  app.route({
    view: 'view_1',
    onCreate: function() { $("#view_1").append($.now()+': Written on create<br/>'); },
    onReady: function() { $("#view_1").append($.now()+': Written when ready<br/>'); }
  });
  app.route({view: 'view_2', load: 'view_2.html' });
  app.route({
    view: 'view_3', 
    onCreate: function() { $("#view_3").append("I'm the third view"); }
  });
  app.route({view: "car2", load: "car2.html" });

  app.route({view: "home", load: "home.html" });

  // run app
  app.run();

});

