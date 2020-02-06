const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("**You don't have permissions to use this command!**");
    if(!args[0]) return message.reply("`;Purge <1-100>`");
    try {
      if (!isNaN(args[0]) && args[0] < 101 && !args[0].includes(".") && !args[0].includes(".")){
        const fetched = await message.channel.fetchMessages({limit: args[0]});
        message.channel.bulkDelete(fetched).catch(error => message.reply(`**${error}**`));
        const embedsss = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle('**Succsessfuly deleted ' + args[0] + ' messages!**')
        .setFooter('Bot by: G2001H#6405')
        message.channel.send(embedsss).then(message => {
        message.delete(2000).catch(console.error);
        });
      }else{
      message.reply("``;purge <1-100>``")
      }
    } catch (err) {
      message.reply("``;purge <1-100>``")
    }    
  }
