const Discord = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports.run = async (bot, message, args) => {
    if(!args[0]) return message.reply('`;Images <Text>`')
    const img = await randomPuppy(args[0]);
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle("**Image " + args[0] + "**")
        .setFooter('Bot by: G2001H#6405');
    message.channel.send(embed);
}
