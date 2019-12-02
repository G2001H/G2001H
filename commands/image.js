const Discord = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports.run = async (client, message, args) => {
    if(!args[0]) return message.reply('You need to type anything')
    const img = await randomPuppy(args[0]);
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle("Image " + args[0])
        .setURL(`https://reddit.com/r/${args[0]}`);
        .setFooter('Bot by: G2001H#7660')
    message.channel.send(embed);
}
