const Discord = require("discord.js");
var delay = require("timeout-as-promise")
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
