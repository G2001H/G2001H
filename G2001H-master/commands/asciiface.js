const cool = require('cool-ascii-faces');

exports.run = (bot, message, args) => {
    message.delete();
    message.channel.send(cool());
};