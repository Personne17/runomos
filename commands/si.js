const Discord = require("discord.js");

module.exports.run = (client, message, args, guild) => {

    let msg = message;

    var si_embed = new Discord.RichEmbed()
            .setColor("BLUE")
            .setTitle("Informations du serveur")
            .setDescription("Tout ce qu'il y a à savoir sur le serveur.")
            .addField("Nom du serveur :", guild.name, true)
            .addField("Serveur créé le :", guild.createdAt, true)
            .addField("Nombre de salons :", guild.channels.size, true)
            .addField("Nombre de membres sur le serveur :", guild.memberCount, true)
            .addField("Id du fondateur :", guild.ownerID, true)
            .addField("Nom :", guild.owner.nickname, true)
            .setFooter("Bot créé par _Personn_#0524.")

        msg.channel.send(si_embed)
}
module.exports.help = {
  name: "si"
}
