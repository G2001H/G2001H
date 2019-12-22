const snek = require('snekfetch')

exports.run = (bot, message, args) => {
    let usuario =message.mentions.users.first()
    if(!usuario) return message.reply('`;Triggered <@Member>`');
    let url = `https://eclyssia-api.tk/api/v1/triggered?url=${usuario.avatarURL}`
    snek.get(url).then(async res => {
        await message.channel.send({
           files: [{
               attachment: res.body,
               name: `${usuario.tag}-triggered.gif`
           }]
        })
    }).catch(err => console.error(err));
}
