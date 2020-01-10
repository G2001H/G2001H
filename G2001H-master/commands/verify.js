const Discord = require("discord.js");
const noblox = require('noblox.js');

module.exports.run = async(client, message, args) => {
var args = message.content.split(/[ ]+/)
const filter = m => m.content.includes('done');
const collector = message.channel.createMessageCollector(filter, { time: 15000 });
var username = args[1];
if (username){
noblox.getIdFromUsername(username).then(id => {
var tokenID = message.author.id
message.channel.send(new Discord.RichEmbed()
    .setTitle(`Put the code in your roblox description`)
    .setDescription(`Say 'done' if you put the code in description`)
    .addField("**__Code__**", tokenID)
    .setFooter("Bot by: G2001H#2001")
    .setColor("RANDOM"))
.then(() => {
    message.channel.awaitMessages(filter, { maxMatches: 1, time: 600000, errors: ['time']})
    .then(collected => {
    noblox.getBlurb(`${id}`).tap(function(user){
    if (user.match(message.author.id)){
    message.reply(`✅ Verified, ${username}`)
    message.member.setNickname(`${username}`)
    message.member.addRole(message.guild.roles.find(role => role.id === "665030441236955136"));
} else {
message.channel.send("*Cannot find the code in Description*, *say* ``;VerifyHelp`` *for help*")
    }
  })
}).catch(collected => {
    message.reply("*Time out!*")
    })
  })
}).catch(function (err) {
message.reply("*Invalid Roblox Username*")
})
} else {
message.reply("*Enter your Roblox Username* **Example:** ``;Verify G2001H``")
}
return;
}