const Discord = require("discord.js");
const delay = require("timeout-as-promise");

module.exports.run = (client, msg, args, guild) => {
    const bchannel = client.channels.get("513387249153474561");
    if(args > 100) {
        args[0] = 100
    }

    if(args <= 1) return msg.channel.send("Faut savoir, tu veut supprimer des messages ou pas ?!")
    if(!msg.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Lol tu te prends pour qui ? T'a aucune permissions ici !");

    if(!args[0]) return message.channel.send("Bon, TU DOIS ME DIRE COMBIEN DE MESSAGES SUPPRIMER !")
    msg.channel.bulkDelete(args[0]).then(() => {

        delay(1000).then(function() {
            var i = new bchannel.send(`${args[0]} messages ont été exterminés !`)

            delay(5000).then(function() {
                    i.delete().catch(O_o=>{});
            });
        })

        return;
    })



}
module.exports.help = {
  name: "clear"
}
