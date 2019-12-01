const Discord = require('discord.js');
const ms = require('ms');
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
    let statuss = ["dnd", "idle", "online"] //"invisible"
    setInterval(() => {
    bot.user.setStatus(statuss[Math.floor(Math.random()* statuss.length)]) // dnd, idle, online, invisible
    }, 10000)
    bot.user.setUsername("[" + pref + "] G2001H's Bot")
});

// Bot Commands
bot.on('message', message=>{
    let args = message.content.substring(PREFIX.length).split(" ");
    switch(args[0]){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//MEMBERS COMMANDS:
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        
        // Help
        case pref + 'Help': case pref + 'help':
                const embed4 = new Discord.RichEmbed()
                .setColor("RANDOM")
                .setTitle('**Commands For Members:**')
                .addField('**__Prefix:__**', "`;`")
                .addField('**__Free Commands:__**', '`;Help`, `;Avatar <@Member>`, `;Minecraft <ServerID>`, `;Kill <@Member>`, `;Info Server`, `;Info <@Member>`, `;Ping`, `;Hello`, `;Im Verified?`, `;Im Owner?`, `;8-ball <Text>`, `;Truth`, `;Dare`'
                )
                .setFooter('Bot by: G2001H#7660')
                 message.channel.send(embed4);
                const embed5 = new Discord.RichEmbed()
                .setColor("RANDOM")
                .setTitle('**Commands For Owners:**')
                .addField('**__Prefix:__**', "`;`")
                .addField('**__Owner Commands:__**', "`;Purge <1-100>`, `;Kick <@Member>`, `;Vote <@Member>`, `;Mute <@Member> <time>`, `;Ban <@Member>`, `;Poll <Text>`, `;Invite`, `;ServerSetName <Text>`")
                 .setFooter('Bot by: G2001H#7660')
                  message.channel.send(embed5);
            break;
        // Ping
        case pref + 'Ping': case pref + 'ping':
            message.reply('Pong! :ping_pong:');
            break;
        // Hello
        case pref + 'Hello': case pref + 'hello':
            message.reply('hello!');
            break;
        // Avatar
        case pref + 'Avatar': case pref + 'avatar':
            const plrMentioned = message.mentions.users.first();
            if(!plrMentioned) return message.reply("You didn't specify a member!")
            const embds = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setTitle(`${plrMentioned.username}'s Avatar.`)
            .setImage(plrMentioned.avatarURL);
            message.channel.send(embds);
            break;
        // 8-Ball
        case pref + '8-Ball': case pref + '8-ball':
            const argumantstwo = args.slice(1).join(" ");
            if(!argumantstwo) return message.reply('You need to ask anything!')
            message.reply(textrandom[Math.floor(Math.random() * textrandom.length)]);
            break;
        // Truth
        case pref + 'Truth': case pref + 'truth':
            message.reply(truths[Math.floor(Math.random() * truths.length)]);
            break;
        // Dare
        case pref + 'Dare': case pref + 'dare':
            message.reply(dares[Math.floor(Math.random() * dares.length)]);
            break;
         // Server&Member
        case pref + 'Info': case pref + 'info':
            if(args[1] === "Server" || args[1] === "server"){
                const embed = new Discord.RichEmbed()
                .setColor("RANDOM")
                .setTitle(':scroll: **Server Informations:** :scroll:')
                .addField(':star2: **__Server Name:__**', message.guild.name,true)
                .addField(':star2: **__Server ID:__**', message.guild.id, true)
                .addField(':date: **__Server Created:__**', message.guild.createdAt)
                .addField(':man_raising_hand: **__Members:__**', message.guild.memberCount, true)
                .addField(':crown: **__Owner:__**', message.guild.owner,true)
                .setThumbnail(message.guild.iconURL)
                .setFooter('Bot by: G2001H#7660')
                 message.channel.send(embed);
            };
            const usersnms = message.mentions.users.first();
            if(usersnms){
            const membernames = message.guild.member(usersnms);
            if(membernames){
                const embed2 = new Discord.RichEmbed()
                .setColor("RANDOM")
                .setTitle(':scroll: **Member Information:** :scroll:')
                .addField(':man_pouting: **__Member Name:__**', usersnms.tag, true)
                .addField(':man_pouting: **__Member ID:__**', usersnms.id, true)
                .addField(':date: **__Created:__**', usersnms.createdAt)
                .setThumbnail(usersnms.avatarURL)
                .setFooter('Bot by: G2001H#7660')
                message.channel.send(embed2);
                }
            };
            break;
        // Owner&Verified
        case pref + 'Im': case pref + 'im':
            if(args[1] === "Owner?" || args[1] === "owner?"){
                if(!message.member.roles.find(r => r.name === "Owner")) return message.reply('No your not!')
            //  .then(msg => msg.delete(5000));
                message.reply('Yes you are!')
            };
            if(args[1] === "Verified?" || args[1] === "verified?"){
                if(!message.member.roles.find(r => r.name === "Verified")) return message.reply('No your not!')
                message.reply('Yes you are!')
            };
            break;
        // Kill
        case pref + 'Kill': case pref + 'kill':
            const msgArgs3 = message.mentions.users.first();
            if(!msgArgs3) return message.reply('You didn\'t specify a member!');{
            const memberss = message.guild.member(msgArgs3);
            if (!memberss) return message.reply("Cloudn't find that member!");{
            message.channel.send(msgArgs3 + " **Was Killed by** " + `${message.author}` + "! 🔪")
                message.delete(1000).catch(console.error);
            }};
            break;
        // Minecraft
        case pref + 'Minecraft': case pref + 'minecraft':
            if(!args[1]) return message.reply('You need to type Minecraft IP Server!')
            ping(args[1], (error, reponse) =>{
                if(error) return message.reply('Invalid Server! (' + args[1] + ')')
                const Embed = new Discord.RichEmbed()
                .setColor("RANDOM")
                .setTitle(':scroll: **Minecraft Server Information** :scroll:')
                .addField('**__Server IP:__**', reponse.host)
                .addField('**__Server Version:__**', reponse.version)
                .addField('**__Server Port:__**', reponse.port)
                .addField('**__Online Players:__**', reponse.onlinePlayers)
                .addField('**__Max Players:__**', reponse.maxPlayers)
                .setFooter('Bot by: G2001H#7660')
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
        case pref + 'Poll': case pref + 'poll':
            if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permissions to use poll!");
            let msgArgs = args.slice(1).join(" ");
            if(!msgArgs) return message.reply("You need to say anything!")
            message.channel.send("🔷 " + "**" + msgArgs + "**" + " 🔷").then(messageReaction => {
                messageReaction.react("👍");
                messageReaction.react("👎");
                message.delete(500).catch(console.error);
            });
            break;
        // Vote
        case pref + 'Vote': case pref + 'vote':
           if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permissions to create a vote!");
            let msgArgs2 = message.mentions.users.first();
            if(!msgArgs2) return message.reply("You didn't specify a member!");
            message.channel.send("**Vote for** " + msgArgs2 + " **Is he trusted? Yes** :white_check_mark: **or No** :negative_squared_cross_mark:").then(messageReaction => {
                messageReaction.react("✅");
                messageReaction.react("❎");
                message.delete(500).catch(console.error);
            });
            break;
        // Change Guild Name 
        case pref + 'ServerSetName': case pref + 'serversetname':
           if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permissions to change server name!");
            const argument = args.slice(1).join(" ")
            if(!argument) return message.reply('You need to specify a name for server!')
                message.guild.setName(argument);
            break;
        // Invite
        case pref + 'Invite': case pref + 'invite':
            if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permissions to invite the bot!");
            const embeds2 = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setDescription("**Click** [here](https://discordapp.com/oauth2/authorize?client_id=643184729478266932&scope=bot&permissions=8) **to Invite the bot!**")
            message.author.send(embeds2);
            message.reply("Check DM's");
        break;
        // Purge
        case pref + 'Purge':  case pref + 'purge': case pref + 'p': case pref + 'P':
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permissions to delete messages!");
            if(!args[1]) return message.reply('You didn\'t specify number how much messages you want to delete!');
            message.channel.bulkDelete(args[1]);
                const embedsss = new Discord.RichEmbed()
                .setColor("RANDOM")
                .setTitle('Succsessfuly deleted ' + args[1] + ' messages!')
                .setFooter('Bot by: G2001H#7660')
                message.channel.send(embedsss).then(message => {
                message.delete(2000).catch(console.error);
                });
            break;
        // Kick
        case pref + 'Kick': case pref + 'kick':
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permissions to kick members!");
            const users1 = message.mentions.users.first();
            if(!users1) return message.reply("You didn't specify a member")
                const memberr = message.guild.member(users1);
                if(!memberr) return message.reply("Cloudn't find that member!")
                    memberr.kick({ression: 'You are kicked from server for a reason!'});
                    message.channel.send(`${users1} were kicked from this server!`  + ` https://tenor.com/view/kick-gif-9316304`);
                break;
        // Ban
       case pref + 'Ban': case pref + 'ban':
       if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permissions to ban members!");
            const users2 = message.mentions.users.first();
            if(!users2) return message.reply("You didn't specify a member!")
                const memberrs = message.guild.member(users2);
                if(!memberrs) return message.reply("Cloudn't find that member!")
                memberrs.ban({ression: 'You are Banned from server for a reason!'})
                message.channel.send(`${users2} were banned from this server!` + ` https://tenor.com/view/banned-thor-gif-6072837`);
            break;
        // Mute
        case pref + 'Mute': case pref + 'mute':
         if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permissions to mute members!");
            let person  = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]))
            if(!person) return message.reply("You didn't specify a member!");
            let mainrole = message.guild.roles.find(role => role.name === "Verified");
            let muterole = message.guild.roles.find(role => role.name === "Muted");
            if (!muterole) return message.reply("Cloudn't find role @Muted");
            if (!mainrole) return message.reply("Cloudn't find role @Verified");
            let time = args[2];
            if(!time){
                return message.reply("You didn't specify a time!");
            };
            person.removeRole(mainrole.id);
            person.addRole(muterole.id);
            message.channel.send(`${person} has been muted for ${ms(ms(time))}`  + `! https://tenor.com/view/ash-mute-pokemon-role-muted-gif-12700315`);
            setTimeout(function(){
                person.addRole(mainrole.id);
                person.removeRole(muterole.id);
                message.channel.send(`${person} has been unmuted!`)
            }, ms(time));
            break;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
    };
});

bot.login(process.env.BOT_TOKEN);
