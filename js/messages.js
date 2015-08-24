define(function(require) {
    function getHello() {
      console.log('Hello World');
    }

    var moduleName = 'Message Module';

    return {
      getHello: getHello,
      moduleName: moduleName
    };
});
