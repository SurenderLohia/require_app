require(['jquery', 'underscore', 'backbone', 'messages', 'quote', 'vent', 'vent-module'],
function($, _, backbone, messages, quote, vent, ventModule) {
  messages.getHello();
  quote.getQuote();

  vent.trigger('some:event', {
    name: 'Surender Lohia',
    message: 'Nice to meet you'
  });
});
