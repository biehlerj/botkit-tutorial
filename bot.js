var Botkit = require('botkit');

var controller = Botkit.anywhere(configuration);

controller.hears('hello','direct_message', (bot, message) => {
  bot.reply(message, 'Hello yourself!');
});

// wait for a new user to join a channel, then say hi
controller.on('channel_join', (bot, message) => {
  bot.reply(message, 'Welcome to the channel!');
});

controller.middleware.receive.use((bot, message, next) => {
  console.log('RECEIVED: ', message);

  message.logged = true;

  next();
});

controller.middleware.send.use((bot, message, next) => {
  console.log('SENT: ', message);

  message.logged = true;

  next();
});