const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permissions to use this command!");
    if(!args[0]) return message.reply('`;Purge <1-100>`');
    message.channel.bulkDelete(args[0])
    const embedsss = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle('Succsessfuly deleted ' + args[0] + ' messages!')
    .setFooter('Bot by: G2001H#7660')
    message.channel.send(embedsss).then(message => {
    message.delete(2000).catch(console.error);
    });
};