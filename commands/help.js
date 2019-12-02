const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    let embed1 = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle('**Commands For Members:**')
    .addField('**__Prefix:__**', "`;`")
    .addField('**__Free Commands:__**', '`;Help`, `;figlet <Text>`, `;Image <Text>`, `;Avatar <@Member>`, `;Minecraft <ServerID>`, `;Kill <@Member>`, `;ServerInfo`, `;Info <@Member>`, `;Ping`, `;Im Verified?`, `;Im Owner?`, `;8ball <Text>`, `;Truth`, `;Dare`')
    .setFooter('Bot by: G2001H#7660')
    let embed2 = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle('**Commands For Owners:**')
    .addField('**__Prefix:__**', "`;`")
    .addField('**__Owner Commands:__**', "`;Purge <1-100>`, `;Kick <@Member> <Reason>`, `;Vote <@Member>`, `;Mute <@Member> <time> <Reason>`, `;Ban <@Member> <Reason>`, `;Poll <Text>`, `;ServerSetName <Text>`")
    .setFooter('Bot by: G2001H#7660')
    message.channel.send(embed1);
    message.channel.send(embed2);
}
