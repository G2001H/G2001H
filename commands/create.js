module.exports.run = async (bot, message, args) => {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You dont have permission to use this command!');
if(args[0].toLowerCase() === "channellogs"){
    if(!message.guild.channels.find(channel => channel.name === "logs")){
          message.guild.createChannel("logs",`TextChannel`)
          message.reply("Succsessfuly created a channel (logs)!")
    }else{
        message.reply("You already have a channel (logs)!")
    }
}
if(args[0].toLowerCase() === "rolemuted"){
    if(!message.guild.roles.find(role => role.name === "Muted")){  
        message.guild.createRole({
            name: "Muted",
            color: "RANDOM",
            permission: []
        })
        message.reply("Succsessfuly created a role (Muted)!")
    }else{
        message.reply("You already have a role (Muted)!")
    }
}
if(args[0].toLowerCase() === "roleverified"){
    if(!message.guild.roles.find(role => role.name === "Verified")){  
        message.guild.createRole({
            name: "Verified",
            color: "RANDOM",
            permission: []
        })
        message.reply("Succsessfuly created a role (Verified)!")
    }else{
        message.reply("You already have a role (Verified)!")
    }
}
}
