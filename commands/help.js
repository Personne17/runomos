const Discord = require("discord.js");

module.exports.run = (client, msg, args, guild) => {
    var bchannel = client.channels.get("513387249153474561");
  if(msg.channel == bchannel) {

  var help_embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("Liste Des Commandes")
  .setDescription("Commandes du bot :")
  .addField(`$help`, `Vous montre ce message`, false)
  .addField("$salut", "Salut ! :D")
  .addField("$verif", "Vous donne le rôle : <@&513346079287410689>")
  .addField("$ban", "Utilisation : $ban <utilisateur> <raison>.")
  .setFooter("Bot créé par : _Personn_#0524 pour : runomos#5004")
  bchannel.send(help_embed);
  }
}
module.exports.help = {
  name: "help"
}
