const { MessageEmbed } = require("discord.js");
const c = require("../config.json");

module.exports.run = async (client, message, args, database) => {
  let usuario =
    message.mentions.users.first() ||
    message.guild.members.cache.get(args[0]) ||
    message.member;

    database.ref(`Baladinha/Usuários/${message.member.user.id}`)
    .once("value")
    .then(async function(snap) {
      if (snap.val() == null) {
        const ynull = new MessageEmbed()
          .setDescription(`_**Estatisticas**_
🪁 Usuário: **${usuario.user.tag}**
🧪 Level: **1 (0)**`)
          .setColor(c.cor)
          .setAuthor(message.guild.name, message.guild.iconURL())
          .setFooter(message.member.user.tag)
          .setTimestamp()
        return message.reply(ynull);
      } else {
        const nnull = new MessageEmbed()
          .setDescription(`_**Estatisticas**_
🪁 Usuário: **${usuario.user.tag}**
🧪 Level: **${snap.val().Level} (${snap.val().Xp})**`)
          .setColor(c.cor)
          .setAuthor(message.guild.name, message.guild.iconURL())
          .setFooter(message.member.user.tag)
          .setTimestamp()
        return message.reply(nnull);
      }
    });
};