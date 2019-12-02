const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permissions to delete messages!");
    if(!args[0]) return message.reply('You need to specify how much messages you want to delete!');
    if(!args[0] > 0) return message.reply('Insert a Number!');
    if(!args[0] > 100) return message.reply('Max is 100!');
    message.channel.bulkDelete(args[0])
    const embedsss = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle('Succsessfuly deleted ' + args[0] + ' messages!')
    .setFooter('Bot by: G2001H#7660')
    message.channel.send(embedsss).then(message => {
    message.delete(2000).catch(console.error);
    });
};