define(['backbone', 'vent'],
function(Backbone, vent) {
  vent.on('some:event', cbf);

  function cbf(options) {
    console.log(options.message + ', ' + options.name + '.' );
  }

});
