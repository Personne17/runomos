const Discord = require("discord.js");

module.exports.run = (client, msg, args, guild) => {

    if(!msg.member.hasPermission("KICK_MEMBERS")) return msg.reply("LOL T'A PAS DE PERMISSIONS :joy:");
    if(args[0] == "help"){
      msg.reply("Utilisation: !kick <utilisateur> <raison>");
      return;
    }
    let kUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
    if(!kUser) return message.reply("C'est qui celui là ? Bah c'est Personne.");
    let kReason = args.join(" ").slice(22);
    if(kUser.hasPermission("MANAGE_MESSAGES")) return msg.reply("WTF! IL A PLUS DE PERMISSIONS QUE MOI");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("Kick !")
    .setColor("#e56b00")
    .addField("Utilisateur kické :", `${kUser} with ID ${kUser.id}`)
    .addField("Kické par :", `<@${msg.author.id}> with ID ${msg.author.id}`)
    .addField("Kické dans :", msg.channel)
    .addField("A :", msg.createdAt)
    .addField("Raison :", kReason);

    let kickChannel = msg.guild.channels.find(`name`, "incidents");
    if(!kickChannel) return msg.channel.send("Veuillez créér un salon 'incidents' pour effectuer cette commande.");

    msg.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
}

module.exports.help = {
  name:"kick"
}
