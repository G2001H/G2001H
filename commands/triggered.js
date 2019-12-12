const snek = require('snekfetch')

exports.run = (client, message, args) => {
    let usuario =message.mentions.users.first()
    if(!usuario) return message.reply('`;Triggered <@Member>`');
    let url = `https://eclyssia-api.tk/api/v1/triggered?url=${usuario.avatarURL}`
    message.channel.startTyping();
    snek.get(url).then(async res => {
        await message.channel.send(message.author,{
           files: [{
               attachment: res.body,
               name: `${usuario.tag}-triggered.gif`
           }]
        }).then(() => message.channel.stopTyping());
    }).catch(err => console.error(err));
}