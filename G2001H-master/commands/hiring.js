const Discord = require('discord.js');

exports.run = (bot, message, args) => {
///////////////////////////////////////////////////////////
  const HireBuilderQ1 = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription("What's your roblox username?")
  .setFooter("You have 1 minute to answer!")
  const HireBuilderQ2 = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription("How much will you pay?")
  .setFooter("You have 1 minute to answer!")
  const HireBuilderQ3 = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription("What type of game you want to make?")
  .setFooter("You have 1 minute to answer!")
  const HireBuilderQ4 = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription("Do you wan't to say anything for Description?")
  .setFooter("You have 1 minute to answer!")
  const HireclothingQ4 = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription("What type of clothings you want to make?")
  .setFooter("You have 1 minute to answer!")
///////////////////////////////////////////////////////////
if(message.channel.name == "🕹️hiring-commands🕹️" || message.channel.name == "hiring-commands" || message.channel.name == "💬staff-general💬" ){
  if(args[0] == null){
    const nullmessage = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("🕹️ **__Hiring Commands__** 🕹️")
    .setDescription(`
    **;Hiring Builder** - *To hire a Builer*
    **;Hiring Scripter** - *To hire a Scripter*
    **;Hiring GFX** - *To hire a GFX Maker*
    **;Hiring Clothing** - *To hire a Clothing Maker*
    **;Hiring Graphic** - *To hire a Graphic Maker*
    **;Hiring Animator** - *To hire a Animator Maker*
    **;Hiring GUI** - *To hire a GUI Maker*
    **;ToHire** - *To hire Yourself*
    `)
    message.channel.send(nullmessage)
  }else{
    if(args[0].toLowerCase() == "builder"){
      let embed = new Discord.RichEmbed()
     
      const collector0 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });
      embed.addField(`📞 **__Contact:__**`, message.author)
      const collector1 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });
      message.channel.send(HireBuilderQ1)
      collector1.on('collect', m => {
        const collector2 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });  
        embed.addField(`👨 **__Roblox Username:__**`, m)
        message.channel.send(HireBuilderQ2)
        collector2.on('collect', mm => {
          const collector3 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });  
          embed.addField(`💸 **__Payment:__**`, mm)
          message.channel.send(HireBuilderQ3)
          collector3.on('collect', mmm => {
            const collector4 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });  
            embed.addField(`🕹️ **__Type of Game:__**`, mmm)
            message.channel.send(HireBuilderQ4)
            collector4.on('collect', mmmm => {
                embed.addField("📜 **__Description:__**", mmmm)
                embed.setColor("RANDOM")
                embed.setThumbnail(message.author.avatarURL||message.author.displayAvatarURL)
                embed.setTitle("⚒**__Hiring for Builder__** ⚒")
                embed.setFooter(`
  
React with ✅ to post this hiring
React with ❎ to delete this hiring
                `)
                let ch = message.guild.channels.find(x => x.name === "⚒builder-hiring⚒")
                if (ch) {
                  message.channel.bulkDelete(9)
                  message.channel.send({embed}).then(embedMessage => {
                    embedMessage.react("✅");
                    embedMessage.react("❎")
                    const filter = (r, u) => r.me && !u.bot && message.author,collector = embedMessage.createReactionCollector(filter, { max: 1});
                    collector.on('collect', (r) => {
                        switch (r.emoji.name) {
                            case '✅': {
                                embed.setFooter(`Bot by: G2001H#2001`);
                                embedMessage.edit(embed)
                                embedMessage.delete(0);
                                ch.send(`<@&661120318852694027>, **Boring from Pinging? go to <#661109548299321344> and remove the react for this ping.**`)
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
      }
  if(args[0].toLowerCase() == "scripter"){
    let embed = new Discord.RichEmbed()
   
    const collector0 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });
    embed.addField(`📞 **__Contact:__**`, message.author)
    const collector1 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });
    message.channel.send(HireBuilderQ1)
    collector1.on('collect', m => {
      const collector2 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });  
      embed.addField(`👨 **__Roblox Username:__**`, m)
      message.channel.send(HireBuilderQ2)
      collector2.on('collect', mm => {
        const collector3 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });  
        embed.addField(`💸 **__Payment:__**`, mm)
        message.channel.send(HireBuilderQ3)
        collector3.on('collect', mmm => {
          const collector4 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });  
          embed.addField(`🕹️ **__Type of Game:__**`, mmm)
          message.channel.send(HireBuilderQ4)
          collector4.on('collect', mmmm => {
              embed.addField("📜 **__Description:__**", mmmm)
              embed.setColor("RANDOM")
              embed.setThumbnail(message.author.avatarURL||message.author.displayAvatarURL)
              embed.setTitle("📜 **__Hiring for Scripter__** 📜")
              embed.setFooter(`

React with ✅ to post this hiring
React with ❎ to delete this hiring
              `)
              let ch = message.guild.channels.find(x => x.name === "📜scripter-hiring📜")
              if (ch) {
                message.channel.bulkDelete(9)
                message.channel.send({embed}).then(embedMessage => {
                  embedMessage.react("✅");
                  embedMessage.react("❎")
                  const filter = (r, u) => r.me && !u.bot && message.author,collector = embedMessage.createReactionCollector(filter, { max: 1});
                  collector.on('collect', (r) => {
                      switch (r.emoji.name) {
                          case '✅': {
                              embed.setFooter(`Bot by: G2001H#2001`);
                              embedMessage.edit(embed)
                              embedMessage.delete(0);
                              ch.send(`<@&661120252993601555>, **Boring from Pinging? go to <#661109548299321344> and remove the react for this ping.**`)
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
    }
    if(args[0].toLowerCase() == "gfx"){
      let embed = new Discord.RichEmbed()
     
      const collector0 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });
      embed.addField(`📞 **__Contact:__**`, message.author)
      const collector1 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });
      message.channel.send(HireBuilderQ1)
      collector1.on('collect', m => {
        const collector2 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });  
        embed.addField(`👨 **__Roblox Username:__**`, m)
        message.channel.send(HireBuilderQ2)
        collector2.on('collect', mm => {
          const collector3 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });  
          embed.addField(`💸 **__Payment:__**`, mm)
          message.channel.send(HireBuilderQ3)
          collector3.on('collect', mmm => {
            const collector4 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });  
            embed.addField(`🕹️ **__Type of Game:__**`, mmm)
            message.channel.send(HireBuilderQ4)
            collector4.on('collect', mmmm => {
                embed.addField("📜 **__Description:__**", mmmm)
                embed.setColor("RANDOM")
                embed.setThumbnail(message.author.avatarURL||message.author.displayAvatarURL)
                embed.setTitle("🎨 **__Hiring for GFX__** 🎨")
                embed.setFooter(`
  
React with ✅ to post this hiring
React with ❎ to delete this hiring
                `)
                let ch = message.guild.channels.find(x => x.name === "🎨gfx-hiring🎨")
                if (ch) {
                  message.channel.bulkDelete(9)
                  message.channel.send({embed}).then(embedMessage => {
                    embedMessage.react("✅");
                    embedMessage.react("❎")
                    const filter = (r, u) => r.me && !u.bot && message.author,collector = embedMessage.createReactionCollector(filter, { max: 1});
                    collector.on('collect', (r) => {
                        switch (r.emoji.name) {
                            case '✅': {
                                embed.setFooter(`Bot by: G2001H#2001`);
                                embedMessage.edit(embed)
                                embedMessage.delete(0);
                                ch.send(`<@&661120210610290719>, **Boring from Pinging? go to <#661109548299321344> and remove the react for this ping.**`)
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
      }
      if(args[0].toLowerCase() == "clothing"){
        let embed = new Discord.RichEmbed()
       
        const collector0 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });
        embed.addField(`📞 **__Contact:__**`, message.author)
        const collector1 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });
        message.channel.send(HireBuilderQ1)
        collector1.on('collect', m => {
          const collector2 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });  
          embed.addField(`👨 **__Roblox Username:__**`, m)
          message.channel.send(HireBuilderQ2)
          collector2.on('collect', mm => {
            const collector3 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });  
            embed.addField(`💸 **__Payment:__**`, mm)
            message.channel.send(HireclothingQ4)
            collector3.on('collect', mmm => {
              const collector4 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });  
              embed.addField(`👕 **__Type of Clothing:__**`, mmm)
              message.channel.send(HireBuilderQ4)
              collector4.on('collect', mmmm => {
                  embed.addField("📜 **__Description:__**", mmmm)
                  embed.setColor("RANDOM")
                  embed.setThumbnail(message.author.avatarURL||message.author.displayAvatarURL)
                  embed.setTitle("👕 **__Hiring for Clothers__** 👕")
                  embed.setFooter(`
    
React with ✅ to post this hiring
React with ❎ to delete this hiring
                  `)
                  let ch = message.guild.channels.find(x => x.name === "👕clothing-hiring👕")
                  if (ch) {
                    message.channel.bulkDelete(9)
                    message.channel.send({embed}).then(embedMessage => {
                      embedMessage.react("✅");
                      embedMessage.react("❎")
                      const filter = (r, u) => r.me && !u.bot && message.author,collector = embedMessage.createReactionCollector(filter, { max: 1});
                      collector.on('collect', (r) => {
                          switch (r.emoji.name) {
                              case '✅': {
                                  embed.setFooter(`Bot by: G2001H#2001`);
                                  embedMessage.edit(embed)
                                  embedMessage.delete(0);
                                  ch.send(`<@&661120134462832642>, **Boring from Pinging? go to <#661109548299321344> and remove the react for this ping.**`)
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
        }
        if(args[0].toLowerCase() == "graphic"){
          let embed = new Discord.RichEmbed()
         
          const collector0 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });
          embed.addField(`📞 **__Contact:__**`, message.author)
          const collector1 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });
          message.channel.send(HireBuilderQ1)
          collector1.on('collect', m => {
            const collector2 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });  
            embed.addField(`👨 **__Roblox Username:__**`, m)
            message.channel.send(HireBuilderQ2)
            collector2.on('collect', mm => {
              const collector3 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });  
              embed.addField(`💸 **__Payment:__**`, mm)
              message.channel.send(HireBuilderQ3)
              collector3.on('collect', mmm => {
                const collector4 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });  
                embed.addField(`🕹️ **__Type of Game:__**`, mmm)
                message.channel.send(HireBuilderQ4)
                collector4.on('collect', mmmm => {
                    embed.addField("📜 **__Description:__**", mmmm)
                    embed.setColor("RANDOM")
                    embed.setThumbnail(message.author.avatarURL||message.author.displayAvatarURL)
                    embed.setTitle("🎇 **__Hiring for Graphic__** 🎇")
                    embed.setFooter(`
      
React with ✅ to post this hiring
React with ❎ to delete this hiring
                    `)
                    let ch = message.guild.channels.find(x => x.name === "🎇graphic-hiring🎇")
                    if (ch) {
                      message.channel.bulkDelete(9)
                      message.channel.send({embed}).then(embedMessage => {
                        embedMessage.react("✅");
                        embedMessage.react("❎")
                        const filter = (r, u) => r.me && !u.bot && message.author,collector = embedMessage.createReactionCollector(filter, { max: 1});
                        collector.on('collect', (r) => {
                            switch (r.emoji.name) {
                                case '✅': {
                                    embed.setFooter(`Bot by: G2001H#2001`);
                                    embedMessage.edit(embed)
                                    embedMessage.delete(0);
                                    ch.send(`<@&661120046709342218>, **Boring from Pinging? go to <#661109548299321344> and remove the react for this ping.**`)
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
          }
          if(args[0].toLowerCase() == "animator"){
            let embed = new Discord.RichEmbed()
           
            const collector0 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });
            embed.addField(`📞 **__Contact:__**`, message.author)
            const collector1 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });
            message.channel.send(HireBuilderQ1)
            collector1.on('collect', m => {
              const collector2 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });  
              embed.addField(`👨 **__Roblox Username:__**`, m)
              message.channel.send(HireBuilderQ2)
              collector2.on('collect', mm => {
                const collector3 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });  
                embed.addField(`💸 **__Payment:__**`, mm)
                message.channel.send(HireBuilderQ3)
                collector3.on('collect', mmm => {
                  const collector4 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });  
                  embed.addField(`🕹️ **__Type of Game:__**`, mmm)
                  message.channel.send(HireBuilderQ4)
                  collector4.on('collect', mmmm => {
                      embed.addField("📜 **__Description:__**", mmmm)
                      embed.setColor("RANDOM")
                      embed.setThumbnail(message.author.avatarURL||message.author.displayAvatarURL)
                      embed.setTitle("🎞 **__Hiring for Animator__** 🎞")
                      embed.setFooter(`
        
React with ✅ to post this hiring
React with ❎ to delete this hiring
                      `)
                      let ch = message.guild.channels.find(x => x.id === 658364363719311386)
                      if (ch) {
                        message.channel.bulkDelete(9)
                        message.channel.send({embed}).then(embedMessage => {
                          embedMessage.react("✅");
                          embedMessage.react("❎")
                          const filter = (r, u) => r.me && !u.bot && message.author,collector = embedMessage.createReactionCollector(filter, { max: 1});
                          collector.on('collect', (r) => {
                              switch (r.emoji.name) {
                                  case '✅': {
                                      embed.setFooter(`Bot by: G2001H#2001`);
                                      embedMessage.edit(embed)
                                      embedMessage.delete(0);
                                      ch.send(`<@&661119905067696151>, **Boring from Pinging? go to <#661109548299321344> and remove the react for this ping.**`)
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
            }
          if(args[0].toLowerCase() == "gui"){
            let embed = new Discord.RichEmbed()
           
            const collector0 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });
            embed.addField(`📞 **__Contact:__**`, message.author)
            const collector1 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });
            message.channel.send(HireBuilderQ1)
            collector1.on('collect', m => {
              const collector2 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });  
              embed.addField(`👨 **__Roblox Username:__**`, m)
              message.channel.send(HireBuilderQ2)
              collector2.on('collect', mm => {
                const collector3 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });  
                embed.addField(`💸 **__Payment:__**`, mm)
                message.channel.send(HireBuilderQ3)
                collector3.on('collect', mmm => {
                  const collector4 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });  
                  embed.addField(`🕹️ **__Type of Game:__**`, mmm)
                  message.channel.send(HireBuilderQ4)
                  collector4.on('collect', mmmm => {
                      embed.addField("📜 **__Description:__**", mmmm)
                      embed.setColor("RANDOM")
                      embed.setThumbnail(message.author.avatarURL||message.author.displayAvatarURL)
                      embed.setTitle("📋 **__Hiring for GUI__** 📋")
                      embed.setFooter(`
        
React with ✅ to post this hiring
React with ❎ to delete this hiring
                      `)
                      let ch = message.guild.channels.find(x => x.name === "📋gui-hiring📋")
                      if (ch) {
                        message.channel.bulkDelete(9)
                        message.channel.send({embed}).then(embedMessage => {
                          embedMessage.react("✅");
                          embedMessage.react("❎")
                          const filter = (r, u) => r.me && !u.bot && message.author,collector = embedMessage.createReactionCollector(filter, { max: 1});
                          collector.on('collect', (r) => {
                              switch (r.emoji.name) {
                                  case '✅': {
                                      embed.setFooter(`Bot by: G2001H#2001`);
                                      embedMessage.edit(embed)
                                      embedMessage.delete(0);
                                      ch.send(`<@&661119585885487116>, **Boring from Pinging? go to <#661109548299321344> and remove the react for this ping.**`)
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
        }
    }
  }else{
    message.reply("This command is not allowed in this channel!")
  }
}


  // if(message.guild.id === "616778093905969155"){ //Allowed only in this server!
