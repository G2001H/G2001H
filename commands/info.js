const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    const usersnms = message.mentions.users.first()
    if(!usersnms) return message.reply("You need to specify a member!");
    {
        const membernames = message.guild.member(usersnms);
        if(membernames){
            const embed2 = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setTitle(':scroll: **Member Information:** :scroll:')
            .addField(':man_pouting: **__Member Name:__**', usersnms.tag, true)
            .addField(':man_pouting: **__Member ID:__**', usersnms.id, true)
            .addField(':date: **__Created:__**', usersnms.createdAt)
            .setThumbnail(usersnms.avatarURL)
            .setFooter('Bot by: G2001H#7660')
            message.channel.send(embed2);
        }
    };
}