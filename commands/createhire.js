const Discord = require('discord.js');
const Cooldown = new Set();
 
exports.run = (client, message, args) => {
  if(Cooldown.has(message.author.id)){
    return message.reply("**Wait 2 minutes for another hire!**")
  }else{
    Cooldown.add(message.author.id);
    setTimeout(() => {
      Cooldown.delete(message.author.id);
    }, 120000); //120k = 2 minutes
  }
  let embed = new Discord.RichEmbed()
 
  const collector1 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 15000 });
  message.reply("**__Question 1:__** *What is your Discord Username?* `Example: Mention yourself` **(You have 15 seconds to answer!)**")
  collector1.on('collect', m => {
    const collector2 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 25000 });  
    embed.addField(`👤 **__Username:__**` ,`**${m}**`)
    message.reply("**__Question 2:__** *What are you looking for?* `Example: Scripter/Builder/GFX/GUI Designer` **(You have 25 seconds to answer!)**")
    collector2.on('collect', mm => {
      const collector3 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 25000 });  
      embed.addField(`🌐 **__Looking For:__**` ,`**${mm}**`)
      message.reply("**__Question 3:__** *How much you will pay?* `Example: 100 Robux/Paypal/Giftcard or None` **(You have 25 seconds to answer!)**")
      collector3.on('collect', mmm => {
        const collector4 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 25000 });  
        embed.addField(`💰 **__Payment:__**` ,`**${mmm}**`)
        message.reply("**__Question 4:__** *What type of game you want to make?* `Example: Simulator/Tycoon/Fighting/Obby` **(You have 25 seconds to answer!)**")
        collector4.on('collect', mmmm => {
          const collector5 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max:1 ,time: 60000 });
          embed.addField(`🎮 **__Type of Game:__**` ,`**${mmmm}**`)
          message.reply("**__Question 5:__** *Anything you want to add?* `Example: Say anything you want to add for description or say Nothing` **(You have 1 minute to answer!)**")
          collector5.on('collect', mmmmm => {
            embed.setDescription("**" + mmmmm + "**")
            embed.setColor("RANDOM")
            embed.setThumbnail(message.author.avatarURL||message.author.displayAvatarURL)
            embed.setTitle(`💰 ${message.author.username} want to hire someone! 💰`)
            embed.setFooter('Bot by: G2001H#7660')
            let ch = message.guild.channels.find(x => x.name === "💰hiring💰")//channel id
            if (ch) {
              ch.send({embed});
            }
          });
          collector5.on('end', (collected, reason) => {if (reason === "time"){message.channel.send("Times Up!")}});
        });
        collector4.on('end', (collected, reason) => {if (reason === "time"){message.channel.send("Times Up!")}});
      });
      collector3.on('end', (collected, reason) => {if (reason === "time"){message.channel.send("Times Up!")}});
    });
    collector2.on('end', (collected, reason) => {if (reason === "time"){message.channel.send("Times Up!")}});
  });
  collector1.on('end', (collected, reason) => {if (reason === "time"){message.channel.send("Times Up!")}});
}