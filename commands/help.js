const Discord = require("discord.js");

module.exports.run = (client, msg, args, guild) => {
    var bchannel = client.channels.get("513387249153474561");
    msg.delete();
    if(msg.channel == bchannel) {

  var help_embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("ALED !")
  .setThumbnail("https://moviequibble.files.wordpress.com/2016/02/wallylsdlaaaarge.jpg?w=621&h=350")
  .setDescription("Tu est perdu dans ta vie ? Voici ton guide !")
  .addField(`$help`, `C'est la commande que tu viens de faire, idiot`, false)
  .addField("$salut", "IL A PAS DIT BONJOUR")
  .addField("$verif", "Vous donne un rôle magnifique : <@&513346079287410689>")
  .addField("$createur", ":O")
  .addField("$say", "Vous n'avez pas d'amis ? Parlez avec le bot !")
  .addField("$clear", "Gotta SWEEP SWEEP SWEEP")
  .addField("$ban", "Tu a pas dis bonjour ? Demande à un admin de te ban !")
  .setFooter("Bot créé par : _Personn_#0524 pour : runomos#5004")
  bchannel.send(help_embed);
  }
}
module.exports.help = {
  name: "help"
}
