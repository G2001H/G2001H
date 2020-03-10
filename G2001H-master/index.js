const Discord = require('discord.js');
const client = new Discord.Client();
const pref = require("./package.json")
const { getMember, formatDate } = require("./functions.js");
const swearWords = ["slut","penis","bitch","asshole","fuck","faggot","vagina","dick","pussy","anus","sex","porn","nudo","lipshit"];
const discordlink = ["https://discord.gg/"];

function duration(ms){
const sec = Math.floor((ms / 1000) % 60).toString()
const min = Math.floor((ms / (1000 * 60)) % 60).toString()
const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
const days = Math.floor((ms / (1000 * 60 * 60 * 60)) % 60).toString()
return `${days.padStart(1, '0')}:${hrs.padStart(2, '0')}:${min.padStart(2, '0')}:${sec.padStart(2, '0')}`
}

client.on('ready', () =>{
    let statuss = ["dnd", "idle", "online"]
    let types = ["WATCHING", "STREAMING", "PLAYING", "LISTENING"]
    setInterval(() => {
    let games = ["G2001H", "In " + client.guilds.size + " Servers", client.users.size + " Users", `for ${duration(client.uptime)}`];
    client.user.setActivity(games[Math.floor(Math.random()* games.length)],
    {url: "https://twitch.tv/G2001H_Developer", type: (types[Math.floor(Math.random()* types.length)])})
	}, 5000)
	setInterval(()=>{
	client.user.setStatus(statuss[Math.floor(Math.random()* statuss.length)])
	}, 10000)
    let myGuild = client.guilds.get('616778093905969155');
    if(!myGuild) return;
    let memberscont = myGuild.memberCount;
    let membercountchannel = myGuild.channels.get('645738814605623306');
    membercountchannel.setName("Members: " + memberscont).catch(error => console.log(error));
    //client.user.setAvatar("https://tr.rbxcdn.com/e16ed63ce4be52489f515504993c3101/150/150/AvatarHeadshot/Png")
    const channel = myGuild.channels.find(ch => ch.id === "686701942562357284" || ch.name === "bump");
    if (!channel) return;
	const embeds = new Discord.RichEmbed()
	.setTitle("__Bot Restarted__")
	.setColor("RANDOM")
	.setDescription("Bot changed from up to starting!")
	.setFooter("Bot by: G2001H#6405")
	channel.send(embeds).catch(error => console.log(error))
});

client.on("guildMemberAdd", member => {
    if (member.guild.id !== "616778093905969155") return;
    let myGuild = client.guilds.get('616778093905969155');
    if(!myGuild) return;
    let memberscont = myGuild.memberCount;
    let membercountchannel = myGuild.channels.get('645738814605623306');
    membercountchannel.setName("All Members: " + memberscont).catch(error => console.log(error));
    const channel = myGuild.channels.find(ch => ch.name === '👋welcome👋' || ch.name === 'welcome');
    if (!channel) return;
    channel.send(`Hey ${member}, welcome to **${myGuild.name}** 🎉🤗!`);
})
client.on("guildMemberRemove", member => {
    if (member.guild.id !== "616778093905969155") return;
    let myGuild = client.guilds.get('616778093905969155');
    if(!myGuild) return;
    let memberscont = myGuild.memberCount;
    let membercountchannel = myGuild.channels.get('645738814605623306');
    membercountchannel.setName("All Members: " + memberscont).catch(error => console.log(error)); 
    const channel = myGuild.channels.find(ch => ch.name === '👋goodbye👋' || ch.name === 'goodbye');
    if (!channel) return;
    channel.send(`**${member.user.tag}** just left the server!`);
})

client.on("message", message => {
let sendwarns = message.guild.channels.find(ch => ch.id === "623210109396451378");
if(swearWords.some(word => message.content.toLowerCase().includes(word))) {
if(message.guild.ownerID === message.author.id){
	return;
}else{
	const embeds = new Discord.RichEmbed()
	.setTitle("__Bad word__")
	.setColor("RANDOM")
	.addField("**__Member:__**", message.author.tag)
	.addField("**__Bad Word:__**", message.content)
	.setFooter("Bot by: G2001H#6405")
	sendwarns.send(embeds).catch(error => console.log(error))
	message.reply("*Don't say bad words!*").then(sentMessage =>{
	sentMessage.delete(10000).catch(error => console.log(error))
	})
	message.delete(0).catch(error => console.log(error))
	}
}
if(discordlink.some(link => message.content.toLowerCase().includes(link))) {
if(message.guild.ownerID === message.author.id){
	return;
}else{
	const embeds2 = new Discord.RichEmbed()
	.setTitle("__Discord Server Link__")
	.setColor("RANDOM")
	.addField("**__Member:__**", message.author.tag)
	.addField("**__Link:__**", message.content)
	.setFooter("Bot by: G2001H#6405")
	sendwarns.send(embeds2).catch(error => console.log(error))
	message.reply("*It's not allowed to advertise discord server link!*").then(sentMessage =>{
	sentMessage.delete(10000).catch(error => console.log(error))
	})
	message.delete(0).catch(error => console.log(error))
	}
}
	if (message.author.bot) return;
	if (message.author.bot || !message.guild) return;
	if (!message.content.startsWith(pref.prefix)) return;
	let command = message.content.split(" ")[0]; 
	command = command.slice(pref.prefix.length);
    let args = message.content.split(" ").slice(1);
	try {
		let commandFile = require(`./commands/${command.toLowerCase()}.js`);
		commandFile.run(client, message, args);
	} catch (err) {
		message.reply("Unknown command, say ``;help`` to see all commands.");
	}
});

client.login(process.env.BOT_TOKEN);
