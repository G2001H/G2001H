const Discord = require('discord.js');
///////////////////////////////////////////////////////////
      const HireBuilderQ1 = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription("What's your roblox username?")
      .setFooter("You have 1 minute to answer!")
      const HireBuilderQ2 = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription("How much you want to be payed?")
      .setFooter("You have 1 minute to answer!")
      const HireBuilderQ3 = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`What's your skill?`)
      .setFooter("You have 1 minute to answer!")
      const HireBuilderQ4 = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription("Do you wan't to say anything for Description?")
      .setFooter("You have 1 minute to answer!")
///////////////////////////////////////////////////////////

exports.run = (bot, message, args) => {
    if(message.channel.id == "658371106197209098"){
                    message.reply("Channel found")
      let embed = new Discord.RichEmbed()
                    message.reply("Embed Created")
      const collector0 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });
                    message.reply("Collector 1")
      embed.addField(`📞 **__Contact:__**`, message.author)
      const collector1 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });
      message.channel.send(HireBuilderQ1)
      collector1.on('collect', m => {
                    message.reply("Collector 2")
        const collector2 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });  
        embed.addField(`👨 **__Roblox Username:__**`, m)
        message.channel.send(HireBuilderQ2)
        collector2.on('collect', mm => {
                    message.reply("Collector 3")
          const collector3 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });  
          embed.addField(`💸 **__Payment:__**`, mm)
          message.channel.send(HireBuilderQ3)
          collector3.on('collect', mmm => {
                    message.reply("Collector 4")
            const collector4 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });  
            embed.addField(`❓ **__Skills:__**`, mmm)
            message.channel.send(HireBuilderQ4)
            collector4.on('collect', mmmm => {
                    message.reply("Collector 5")
                embed.addField("📜 **__Description:__**", mmmm)
                embed.setColor("RANDOM")
                embed.setThumbnail(message.author.avatarURL||message.author.displayAvatarURL)
                embed.setTitle("**To Hire**")
                embed.setFooter(`
    
React with ✅ to post this hiring
React with ❎ to delete this hiring
                `)
                    message.reply("Collector 6")
                let ch = message.guild.channels.find(x => x.id === "658369889735802890")
                if (ch) {
                  message.channel.bulkDelete(9)
                  message.channel.send({embed}).then(embedMessage => {
                    embedMessage.react("✅");
                    embedMessage.react("❎")
                    const filter = (r, u) => r.me && !u.bot && message.author,collector = embedMessage.createReactionCollector(filter, { max: 1});
                    collector.on('collect', (r) => {
                        switch (r.emoji.name) {
                            case '✅': {
                                embed.setFooter(`Bot by: G2001H#6405`);
                                embedMessage.edit(embed)
                                embedMessage.delete(0);
                                ch.send(`<@&661119497821749289>, **Boring from Pinging? go to <#661109548299321344> and remove the react for this ping.**`)
                                ch.send(embed)
                                break;
                            }
                            case '❎': {
                                embedMessage.delete(0);
                                break;
                              }
                         }
                    })
                })
              }
            });
            collector4.on('end', (collected, reason) => {if (reason === "time"){message.reply("Times Up!")}});
          });
          collector3.on('end', (collected, reason) => {if (reason === "time"){message.reply("Times Up!")}});
        });
        collector2.on('end', (collected, reason) => {if (reason === "time"){message.reply("Times Up!")}});
      });
      collector1.on('end', (collected, reason) => {if (reason === "time"){message.reply("Times Up!")}});
    }else{
    message.reply("This command is not allowed in this channel!")
    }
}
    
