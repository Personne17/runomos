const Discord = require("discord.js");

module.exports.run = (client, msg, args, guild) => {
    if(msg.channel == '513387249153474561') {
    var bchannel = client.channels.get("513387249153474561");
    bchannel.send(`Hey ! Salut, \`${msg.author.username}\``)
  }
}
module.exports.help = {
  name: "salut"
}
