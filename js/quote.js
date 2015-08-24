define(function(require) {
    var quote = 'He who reigns within himself, and rules passions, desires, and fears, is more than a king';

    function getQuote() {
      console.log('Today Quote: ' + quote);
    }

    return {
      getQuote: getQuote
    };
});
