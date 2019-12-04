const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    let embed1 = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle('🕹️ **__All Commands:__** 🕹️')
    .addField('☑️ **__Free Commands:__**',' `;Help` | `;asciiface` | `;triggered <@Member>` | `;ascii <Text>` | `Image <Text>` | `;Avatar <@Member>` | `;Minecraft <ServerID>` | `;Kill <@Member>` | `;ServerInfo` | `;Info <@Member>` | `;Ping` | `;Im Owner?` | `;8ball <Text>` | `;Truth` | `;Dare`')
    .addField('👑 **__Administrator Commands:__**', "`;Purge <1-100>` | `;Kick <@Member> <Reason>` | `;Vote <@Member> <Text>` | `;V <@Member>` | `;Mute <@Member> <time> <Reason>` | `;Ban <@Member> <Reason>` | `;Poll <Text>` | `;ServerSetName <Text>`")
    .setFooter('Bot by: G2001H#7660')
    message.channel.send(embed1);
}
