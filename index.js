const Discord = require('discord.js');
const client = new Discord.Client();
const pref = require("./package.json")
const { getMember, formatDate } = require("./functions.js");
function duration(ms){
const sec = Math.floor((ms / 1000) % 60).toString()
const min = Math.floor((ms / (1000 * 60)) % 60).toString()
const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
const days = Math.floor((ms / (1000 * 60 * 60 * 60)) % 60).toString()
return `${days.padStart(1, '0')}:${hrs.padStart(1, '0')}:${min.padStart(1, '0')}:${sec.padStart(1, '0')}`
}

client.on('ready', () =>{
    console.log("Bot is online!"); 
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
});

client.on("guildCreate", guild => {
	let myGuild = client.guilds.get('616778093905969155');
	if(!myGuild) return;
    let channelSend = myGuild.channels.find(ch => ch.name === "bot-guilds");
	if(!channelSend) return;
	const embed = new Discord.RichEmbed()
	.setTitle("📜 **Join Server** 📜")
	.setColor("RANDOM")
	.addField("👑 **__Guild Owner:__**", guild.owner,true)
	.addField("🌟 **__Guild Name:__**", guild.name,true)
	.addField("🌟 **__Guild ID:__**", guild.id,true)
	.addField("🙋‍♂️ **__Members Count:__**", guild.memberCount,true)
	.addField("🔘 **__Members Online:__**", guild.members.filter(m => m.presence.status !== "offline").size.toString(),true)
	.addField("🤍 **__Roles:__**", guild.roles.filter(r => r.id !== guild.id).map(r => r.name).join(", ") || 'None',true)
	.addField("📅 **__Guild Created:__**", formatDate(guild.createdAt),true)
	.setThumbnail(guild.iconURL)
    .setFooter('Bot by: G2001H#7660')
	channelSend.send(embed)
  });
  
  client.on("guildDelete", guild => {
	let myGuild = client.guilds.get('616778093905969155');
	if(!myGuild) return;
    let channelSend = myGuild.channels.find(ch => ch.name === "bot-guilds");
	if(!channelSend) return console.log("Err")
	const embed = new Discord.RichEmbed()
	.setTitle("📜 **Left Server** 📜")
	.setColor("RANDOM")
	.addField("🌟 **__Guild Name:__**", guild.name)
	.addField("🌟 **__Guild ID:__**", guild.id)
    .setFooter('Bot by: G2001H#7660')
	channelSend.send(embed)
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
