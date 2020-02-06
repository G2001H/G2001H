const Discord = require("discord.js");
const dares = ["Delete five people on Instagram.","Describe the person of your dreams.","Tell us your most embarrassing vomit story.","Tell us your biggest secret.","Talk to a pillow like it's your crush.","Sing a song","Talk without closing your mouth.","Send us a pic of you","Send last pic in your gallery","Send your first pic in Gallery","Send us a childhood pic of yours","Make us to laught","Write my name Letter by Letter"];
module.exports.run = async (bot, message, args) => {
    const embeds = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle(`**Hey ${message.author.username}, I dare you to:**`)
    .setDescription(dares[Math.floor(Math.random() * dares.length)])
    .setFooter('Bot by: G2001H#6405')
    message.reply(embeds);
}
