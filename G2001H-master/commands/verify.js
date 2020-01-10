const Discord = require("discord.js");
const noblox = require('noblox.js');
const randoms = [
"Blue, Yellow, Blue, Red, Pink",
"Green, Yellow, Pink, Red, Pink",
"Green, Red, Blue, Red, Pink",
"Green, Blue, Blue, Pink, Pink",
"Green, Really Red, Red, Pink",
"Yellow, Pink, Blue, Red, Pink",
"Green, Green, Blue, Red, Pink",
"Green, Yellow, Blue, Red, Green",
"Yellow, Pink, Green, Red, Pink",
"Pink, Green, Yellow, Blue, Pink",
"Green, Yellow, Blue, Red, Pink",
"Green, Blue, Blue, Red, Pink",
"Red, Blue, Blue, Red, Pink",
"Red, Blue, Pink, Red, Blue",
"Blue, Yellow, Pink, Red, Blue",
"Blue, Pink, Yellow, Red, Blue",
"Blue, Pink, Green, Red, Yellow",
"Blue, Pink, Yellow, Red, Yellow",
"Blue, Red, Green, Yellow, Green",
]

module.exports.run = async(client, message, args) => {
var args = message.content.split(/[ ]+/)
const filter = m => m.content.includes('done');
const collector = message.channel.createMessageCollector(filter, { time: 15000 });
var username = args[1];
if (username){
noblox.getIdFromUsername(username).then(id => {
var tokenID = (randoms[Math.floor(Math.random() * randoms.length)])
message.channel.send(new Discord.RichEmbed()
    .setTitle(`Put the code in your roblox description`)
    .setDescription(`Say 'done' if you put the code in description`)
    .addField("**__Code__**", tokenID)
    .setFooter("Bot by: G2001H#2001")
    .setColor("RANDOM"))
.then(() => {
    message.channel.awaitMessages(filter, { maxMatches: 1, time: 300000, errors: ['time']})
    .then(collected => {
    noblox.getBlurb(`${id}`).tap(function(user){
    if (user.match(tokenID)){
    message.reply(`✅ Verified, ${username}`)
    message.member.setNickname(`${username}`)
    message.member.addRole(message.guild.roles.find(role => role.id === "616778467488301182"));
} else {
message.reply("*Cannot find the code in Description*, *say* ``;VerifyHelp`` *for help*")
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
