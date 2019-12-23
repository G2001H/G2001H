const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    let embed1 = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription("**__Prefix:__** **(;)**")
    .setTitle('🕹️ **__All Commands:__** 🕹️')
    .addField('☑️ **__Free Cmds:__**',`
        ;Help
        ;AsciiFace
        ;Date
        ;Weather
        ;Triggered
        ;Ascii
        ;Image
        ;Search
        ;Avatar
        ;Kill
        ;ServerInfo
        ;WhoIs
        ;Ping
        ;8ball
        ;Truth
        ;Dare
        ;Say
        ;Verify
        ;Instagram
        ;Love
        ;RPS
        ;Status
        ;Bot
        ;DevForum
        ;Hiring
        ;ToHire
    `,true)
    .addField('👑 **__Administrator Cmds:__**',`
        ;Purge
        ;Kick
        ;Mute
        ;Vote
        ;UnMute
        ;TempMute
        ;Ban
        ;Poll
        ;ServerSetName
        ;ChannelSay
        ;Setup
        ;Giveaway
        ;IsTrusted
        ;Java
    `,true)
    .setFooter('Bot by: G2001H#2001')
    message.channel.send(embed1);
}
