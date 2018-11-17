const discord = require("discord.js");
const fs = require("fs");
const bot = new discord.Client({disableEveryone: true});
const token = process.env.token;
var ffmpeg = require('ffmpeg');
var delay = require("timeout-as-promise");


bot.on("ready", () => {
  console.log(`${bot.user.username} est prêt !`);
  bot.user.setActivity(`$help | ${bot.guilds.size} serveur(s)`, {type: "WATCHING"})
  .then(presence => console.log(`Activité : ${presence.game ? presence.game.name : 'none'}`))
  .catch(console.error);

  while(up === true) {
    up = false
  delay(17000000).then(function() {
    console.log("Up !")
    up = true
    })
  }
});

// Load commands
bot.commands = new discord.Collection();
fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  let jsfiles = files.filter(f => f.split(".").pop() === "js");

  if (jsfiles.length <= 0) return console.log("Il n'y a aucune commandes à charger.");

  console.log(`Chargement de : ${jsfiles.length} commandes...`);
  jsfiles.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${i + 1}: ${f} chargée !`);
    bot.commands.set(props.help.name, props);
  });
});

client.on("guildMemberAdd", m => {
    let bbchannel = client.channels.get("513343745735917616")
    bbchannel.send("Hey ! " + m + " Bienvenue sur : :white_large_square::arrow_right:SERVEUR COOL:arrow_left::white_large_square: !")
})

client.on("guildMemberRemove", mr => {
  let rchannel = client.channels.get("513343745735917616")
  rchannel.send(mr + ", puisse son nom rester à jamais oublié, viens de quitter le serveur. :skull:")
})


bot.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.channel.type === "dm") return;
  let prefix = "$";
  let messageArray = msg.content.split(" ");
  let command = messageArray[0].toLowerCase();

  if (!command.startsWith(prefix)) return;

  let args = messageArray.slice(1);
  let cmd = bot.commands.get(command.slice(prefix.length));
  if (cmd) cmd.run(bot, message, args);
});

bot.login("NTEzNDE1MjE5OTIyMzM3Nzk4.DtHqyg.DNBfu9Bqb1Z27qhUos9S2LcLIjo");
