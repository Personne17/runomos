const Discord = require("discord.js");
const delay = require("timeout-as-promise");

module.exports.run = (client, msg, args, guild) => {
    const bchannel = client.channels.get("513387249153474561");
    if(args > 100) {
        args[0] = 100
    }

    if(args[0] == "help"){
      bchannel.send("Utilisation: $clear <nombre de messages> ");
      return;
    }


    if(args < 1) return msg.channel.send("Faut savoir, tu veut supprimer des messages ou pas ?!")
    if(!msg.guild.member(msg.author).hasPermission("MANAGE_MESSAGES")) return bchannel.send("Lol tu te prends pour qui ? T'a aucune permissions ici !");

    if(!args[0]) return bchannel.send("Bon, TU DOIS ME DIRE COMBIEN DE MESSAGES SUPPRIMER !")
    bchannel.bulkDelete(args[0]).then(() => {

        delay(1000).then(function() {
            var i = bchannel.send(`${args[0]} messages ont été exterminés !`)
        })

        delay(3000).then(function() {
        bchannel.bulkDelete(1).catch(console.error);
        });

        return;
    })



}
module.exports.help = {
  name: "clear"
}
