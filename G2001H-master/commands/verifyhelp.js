const Discord = require("discord.js")

module.exports.run = async(client, message, args) => {
message.reply("*Sending Instructions in DM, Check your DM's*")

const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle(`**__Step 1__**`)
.setDescription("Say: **;Verify <YourRobloxUsername>**")
.setImage('https://image.prntscr.com/image/g3HEUsa_QkaIyYRLrVBA4g.png')
.setFooter("Bot by: G2001H#2001")
message.author.send(embed).catch(error => message.reply(`*I cannot DM you, because you have DM's closed.*
**Turn on DM's and use this command again**`))

const embed2 = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle(`**__Step 2__**`)
.setDescription("Copy the code")
.setImage('https://image.prntscr.com/image/5EBAAVnsTg6-CbazfuDJKQ.png')
.setFooter("Bot by: G2001H#2001")
message.author.send(embed2).catch(error => console.log(`Err`))

const embed3 = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle(`**__Step 3__**`)
.setDescription("Go to roblox -> Settings")
.setImage('https://image.prntscr.com/image/48ROKEZWQveNa3q5wa_D8w.png')
.setFooter("Bot by: G2001H#2001")
message.author.send(embed3).catch(error => console.log(`Err`))

const embed4 = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle(`**__Step 4__**`)
.setDescription("Paste the code in description")
.setImage('https://image.prntscr.com/image/ZIfKOyINSRSVTz5Jkwbjsg.png')
.setFooter("Bot by: G2001H#2001")
message.author.send(embed4).catch(error => console.log(`Err`))

const embed5 = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle(`**__Step 5__**`)
.setDescription("Save the description")
.setImage('https://image.prntscr.com/image/leB7AEACTWiD6W-PJGcTGw.png')
.setFooter("Bot by: G2001H#2001")
message.author.send(embed5).catch(error => console.log(`Err`))

const embed6 = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle(`**__Step 6__**`)
.setDescription("Go to discord and say 'done'")
.setImage(`https://image.prntscr.com/image/9IX6BIffT0K3BYyn2-Sd8g.png`)
.setFooter("Bot by: G2001H#2001")
message.author.send(embed6).catch(error => console.log(`Err`))
}
