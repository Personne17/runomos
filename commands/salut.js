const Discord = require("discord.js");

module.exports.run = (client, msg, args, guild) => {
    var bchannel = client.channels.get("513387249153474561");
    if(msg.channel == bchannel) {

    bchannel.send(`Hey ! Salut, \`${msg.author.username}\``)
  }
}
module.exports.help = {
  name: "salut"
}
