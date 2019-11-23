const Discord = require('discord.js');
const ms = require('ms');
const cheerio = require('cheerio');
const request = require('request');
const {
    Client,
    Attachment
} = require('discord.js');
const bot = new Client();
const PREFIX = '';
const pref = ';';
const textrandom = ["Yes","No","Yes","No","Yes","No"];
const truths = ["What is the worst date you’ve ever been on?","Who is your current crush?","How long have you gone without a shower?","Would you rather eat dog food or cat food?","If your crush told you he liked your best friend, what would you do?","Who's hotter? You or your friend?","Would you let a friend cheat on a test?","Have you ever been late to class?","Who would you never ever want to sit next to in class?","Have you ever failed a class?","How tall do you want to be?","What's your dream job?","What are you most excited about?","Basketball, baseball, or football?","How many hours would you spend online if you didn't have school or homework?"];
const dares = ["You have to delete five people on Instagram. Name them.","Describe the person of your dreams.","Tell us your most embarrassing vomit story.","Tell us your biggest secret.","Talk to a pillow like it's your crush.","Sing a song","Talk without closing your mouth.","Send us a pic of you","Send last pic in your gallery","Send your first pic in Gallery","Send us a childhood pic of yours","Make us to laught","Write my name Letter by Letter"];
const ping = require('minecraft-server-util');

// Check if bot is on
bot.on('ready', () =>{
    console.log('Bot is ON');
    let games = ["G2001H"];
    let types = ["WATCHING", "STREAMING", "PLAYING", "LISTENING"]
    setInterval(() => {
        bot.user.setActivity(games[Math.floor(Math.random()* games.length)],
        {url: "https://twitch.tv/G2001H_Developer", type: (types[Math.floor(Math.random()* types.length)])})
    }, 10000)
})

// Bot Commands
bot.on('message', message=>{
    let args = message.content.substring(PREFIX.length).split(" ");
    switch(args[0]){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//MEMBERS COMMANDS:
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        
        // Help
        case pref + 'Help':
                const embed4 = new Discord.RichEmbed()
                .setColor(0xFF00A2)
                .setTitle('**Commands For Members:**')
                .addField('**__Prefix:__**', "`;`")
                .addField('**__Free Commands:__**', "`;Help`, `;Kill`, `;Info Server`, `;Info [@player]`, `;Ping`, `;Hello`, `;Im Verified?`, `;Im Owner?`, `;8-ball`, `;Truth`, `;Dare`")
                .setFooter('This bot is By: G2001H#7660')
                 message.channel.send(embed4);
                const embed5 = new Discord.RichEmbed()
                .setColor(0xFF00A2)
                .setTitle('**Commands For Owners:**')
                .addField('**__Prefix:__**', "`;`")
                .addField('**__Owner Commands:__**', "`;Purge`, `;Kick`, `;Vote`, `;Mute`, `;Ban`, `;Poll`, `;Invite`, `;ServerSetName`")
                 .setFooter('This bot is By: G2001H#7660')
                  message.channel.send(embed5);
            break;
        // Ping
        case pref + 'Ping': 
            message.reply('Pong! :ping_pong:');
            break;
        // Hello
        case pref + 'Hello': 
            message.reply('hello!');
            break;
        // 8-ball
        case pref + '8-ball':
            const argumantstwo = args.slice(1).join(" ");
            if(!argumantstwo) return message.reply('You need to ask anything!')
            message.reply(textrandom[Math.floor(Math.random() * textrandom.length)])
            break;
        // Truth
        case pref + 'Truth':
            message.reply(truths[Math.floor(Math.random() * truths.length)])
            break;
        // Dare
        case pref + 'Dare':
            message.reply(dares[Math.floor(Math.random() * dares.length)])
            break;
         // Server&Player
        case pref + 'Info':
            if(args[1] === "Server"){
                const embed = new Discord.RichEmbed()
                .setColor(0xFF00A2)
                .setTitle(':scroll: **Server Informations:** :scroll:')
                .addField(':star2: **__Server Name:__**', message.guild.name,true)
                .addField(':star2: **__Server ID:__**', message.guild.id, true)
                .addField(':date: **__Server Created:__**', message.guild.createdAt)
                .addField(':man_raising_hand: **__Members:__**', message.guild.memberCount, true)
                .addField(':crown: **__Owner:__**', message.guild.owner,true)
                .setThumbnail(message.guild.iconURL)
                .setFooter('Bot by: G2001H#7660')
                 message.channel.send(embed);
            }
            const usersnms = message.mentions.users.first();
            if(usersnms){
            const membernames = message.guild.member(usersnms);
            if(membernames){
                const embed2 = new Discord.RichEmbed()
                .setColor(0xFF00A2)
                .setTitle(':scroll: **Member Information:** :scroll:')
                .addField(':man_pouting: **__Member Name:__**', usersnms.tag, true)
                .addField(':man_pouting: **__Member ID:__**', usersnms.id, true)
                .addField(':date: **__Created:__**', usersnms.createdAt)
                .setThumbnail(usersnms.avatarURL)
                .setFooter('Bot by: G2001H#7660')
                message.channel.send(embed2);
                }
            }
            break;
        // Owner&Verified
        case pref + 'Im':
            if(args[1] === "Owner?"){
                if(!message.member.roles.find(r => r.name === "Owner")) return message.reply('No your not!')
            //  .then(msg => msg.delete(5000));
                message.reply('Yes you are!')
            }
            if(args[1] === "Verified?"){
                if(!message.member.roles.find(r => r.name === "Verified")) return message.reply('No your not!')
                message.reply('Yes you are!')
            }
            break;
        // Kill
        case pref + 'Kill':
            const msgArgs3 = message.mentions.users.first();
            if(!msgArgs3) return message.reply('You need to ping a member!');{
            const memberss = message.guild.member(msgArgs3);
            if (!memberss) return message.reply("Cloudn't find that member!");{
            message.channel.send(msgArgs3 + " **Was Killed by** " + `${message.author}` + "! 🔪")
                message.delete(1000).catch(console.error);
            }};
            break;
        case pref + 'Minecraft':
            if(!args[1]) return message.channel.send('You need to type Minecraft IP Server!')
            ping(args[1], (error, reponse) =>{
                if(error) throw error
                const Embed = new RichEmbed()
                .setTitle('Server Status')
                .addField('Server IP', reponse.host)
                .addField('Server Version', reponse.version)
                .addField('Online Players', reponse.onlinePlayers)
                .addField('Max Players', reponse.maxPlayers)
                message.channel.send(Embed)
            });
            break;
    //  case pref + 'test': 
    //     message.reply("?????")
    //      setTimeout(function(){
    //      message.reply("what bro?")
    //      }, 5000);
    //      break;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//OWNER COMMANDS:
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        
        // Poll
        case pref + 'Poll':
            if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permissions!");
            let msgArgs = args.slice(1).join(" ");
            if(!msgArgs) return message.reply("You need to say anything!")
            message.channel.send("🔷 " + "**" + msgArgs + "**" + " 🔷").then(messageReaction => {
                messageReaction.react("👍");
                messageReaction.react("👎");
                message.delete(1000).catch(console.error);
            });
            break;
        // Vote
        case pref + 'Vote':
           if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permissions!");
            let msgArgs2 = message.mentions.users.first();
            if(!msgArgs2) return message.reply("Cloudn't find that member!");
            message.channel.send("**Vote for** " + msgArgs2 + " **Is he trusted? Yes** :white_check_mark: **or No** :negative_squared_cross_mark:").then(messageReaction => {
                messageReaction.react("✅");
                messageReaction.react("❎");
                message.delete(1000).catch(console.error);
            });
            break;
        // Change Guild Name 
        case pref + 'ServerSetName':
           if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permissions!");
            const argument = args.slice(1).join(" ")
            if(!argument) return message.reply('You need to specify a name for server!')
                message.guild.setName(argument);
            break;
        // Invite
        case pref + 'Invite':
            if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permissions!");
            const embeds2 = new Discord.RichEmbed()
            .setColor(0xF2FF00)
            .setDescription("**Click** [here](https://discordapp.com/oauth2/authorize?client_id=643184729478266932&scope=bot&permissions=8) **to Invite the bot!**")
            message.author.send(embeds2)
            message.reply("Check DM's")
        break;
        // Purge
        case pref + 'Purge': 
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permissions!");
            if(!args[1]) return message.reply('You need to tell me how much messages you want to delete!')
            message.channel.bulkDelete(args[1]);
                const embedsss = new Discord.RichEmbed()
                .setColor(0xFF0000)
                .setTitle('Succsessfuly deleted ' + args[1] + ' messages!')
                .setFooter('Bot by: G2001H#7660')
                message.channel.send(embedsss);
            break;
        // Kick
        case pref + 'Kick':
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permissions!");
            
            const users1 = message.mentions.users.first();

            if(users1) {
                const member = message.guild.member(users1);
                if(member) {
                    member.kick('You are kicked from server for a reason!').then(() => {
                        message.channel(`${users1} were kicked from this server!` + ` https://tenor.com/view/kick-gif-9316304`);
                    }).catch(err => {
                        message.reply('I was unable to kick the member');
                        console.log(err);
                    });
                } else {
                    message.reply("Cloudn't find that member!")
                }
            } else {
                message.reply("You didn't specify a member!")
            }
            break;
        // Ban
       case pref + 'Ban':
       if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permissions!");
            const users2 = message.mentions.users.first();
            if(users2) {
                const member = message.guild.member(users2);
                if(member) {
                    member.ban({ression: 'You are Banned from server for a reason!'}).then(() => {
                        message.channel(`${users2} were banned from this server!` + ` https://tenor.com/view/banned-thor-gif-6072837`)
                    })
                } else {
                    message.reply("Cloudn't find that member!")
                }
            } else {
                message.reply("You didn't specify a member!")
            }
            break;
        // Mute
        case pref + 'Mute':
         if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permissions!");
            let person  = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]))
            if(!person) return message.reply("Cloudn't find that member!");

            let mainrole = message.guild.roles.find(role => role.name === "Verified");
            let muterole = message.guild.roles.find(role => role.name === "Mute");

            if (!muterole) return message.reply("Cloudn't find that role!");

            let time = args[2];
            if(!time){
                return message.reply("You didn't specify a time!");
            }

            person.removeRole(mainrole.id);
            person.addRole(muterole.id);

            message.channel.send(`${person} has been muted for ${ms(ms(time))}` + `! https://tenor.com/view/ash-mute-pokemon-role-muted-gif-12700315`);

            setTimeout(function(){
                person.addRole(mainrole.id);
                person.removeRole(muterole.id);
                message.channel.send(`${person} has been unmuted!`)
            }, ms(time));
            break;
    }
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

bot.login(process.env.BOT_TOKEN);
