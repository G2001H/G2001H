const Discord = require('discord.js')
module.exports.run = async (bot, message, args) => {
      const embed2 = new Discord.RichEmbed()
      .setTitle("📜 **Members Status** 📜")
      .setColor("RANDOM")
      .addField("🟢 **__Online:__**",  message.guild.members.filter(m => m.presence.status === "online").size.toString())
      .addField("⚪ **__Offline:__**",  message.guild.members.filter(m => m.presence.status === "offline").size.toString())
      .addField("🟡 **__Idle:__**",  message.guild.members.filter(m => m.presence.status === "idle").size.toString())
      .addField("🔴 **__Do Not Distrub:__**",  message.guild.members.filter(m => m.presence.status === "dnd").size.toString())
      .setFooter('Bot by: G2001H#7660')
      message.channel.send(embed2)
      //      const memberss = message.guild.members
      //      .filter(m => m.id !== message.guild.id)
      //      .map(m => m).join(", ") || 'none';
      //      const embed = new Discord.RichEmbed()
      //      .setColor("RANDOM")
      //      .setTitle("Total Members")
      //      .addField("🔘 All Members:", memberss,true)
      //       message.channel.send(embed)
}