const Discord = require("discord.js")
const { inspect } = require("util")
const ownerid = "511191097087885312"

module.exports.run = async (bot, message, args) => {
  if(message.author.id == ownerid){
    let toEval = args.join(" ");
    let evaluated = inspect(eval(toEval, { depth: 0} ))
    try {
      if(toEval){
        let hrStart = process.hrtime()
        let hrDiff;
        hrDiff = process.hrtime(hrStart)
      }else{
        message.reply("You need to specify a Java Script!")
      }
    } catch(e){
      message.channel.send(`Error whilst evaluating \`${e.message}\``)
    }
      }else{
        return message.reply("You Dont Have Permission!")
    }
}