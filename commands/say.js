const Discord = require("discord.js");

module.exports.run = (client, msg, args, guild) => {

      const sayMessage = args.join(" ");
      msg.channel.send(sayMessage);
      delay(20).then(function() {
      msg.delete().catch();
    });


}
module.exports.help = {
  name: "say"
}
