const figlet = require('figlet');

exports.run = (client, message, args) => {
  if (args[0] == null) {return message.reply('`;Ascii <Text>`')}
  if(args.join(' ').length > 20) return message.reply('**Maximum characters allowed is 20!**')
  
  figlet(`${args.join(' ')}`, function(err, data) {
      if (err) {
          console.log('**Error: ' + err + "**");
          return;
      }
      message.channel.send(`${data}`, {code: 'AsciiArt'});
  });
}