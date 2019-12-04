const cool = require('cool-ascii-faces');

exports.run = (client, message, args) => {
    message.delete();
    message.channel.send(cool());
};