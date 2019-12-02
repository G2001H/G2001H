const ping = require('minecraft-server-util');

module.exports.run = async (bot, message, args) => {
    if(!args[0]) return message.reply('You need to type Minecraft IP Server!')
    ping(args[0], (error, reponse) =>{
    if(error) return message.reply('Invalid Server! (' + args[0] + ')')
        const Embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(':scroll: **Minecraft Server Information** :scroll:')
        .addField('**__Server IP:__**', reponse.host)
        .addField('**__Server Version:__**', reponse.version)
        .addField('**__Server Port:__**', reponse.port)
        .addField('**__Online Players:__**', reponse.onlinePlayers)
        .addField('**__Max Players:__**', reponse.maxPlayers)
        .setFooter('Bot by: G2001H#7660')
        message.channel.send(Embed)
    });
}