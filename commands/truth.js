const Discord = require("discord.js");
const truths = ["What is the worst date you’ve ever been on?","Who is your current crush?","How long have you gone without a shower?","Would you rather eat dog food or cat food?","If your crush told you he liked your best friend, what would you do?","Who's hotter? You or your friend?","Would you let a friend cheat on a test?","Have you ever been late to class?","Who would you never ever want to sit next to in class?","Have you ever failed a class?","How tall do you want to be?","What's your dream job?","What are you most excited about?","What's your favorite sport? Basketball, baseball, or football?","How many hours would you spend online if you didn't have school or homework?"];
module.exports.run = async (bot, message, args) => {
    const embeds = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle(`**Hey ${message.author.username}, tell me the truth:**`)
    .setDescription(truths[Math.floor(Math.random() * truths.length)])
    .setFooter('Bot by: G2001H#7660')
    message.reply(embeds);
}