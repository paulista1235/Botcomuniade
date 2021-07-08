const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const c = require("../config.json");

module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS")) {
    const embed = new MessageEmbed()
      .setColor(c.cor)
      .setDescription(
        `🛑 Você não possui permissões suficientes. (Banir Membros)`
      )
    return message.reply(embed);
  }

  message.delete()

  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

  if (!member) {
    const nargs0 = new MessageEmbed()
    .setColor(c.cor)
    .setDescription(
      `_**Como usar:**_
⚙ Adicionar Vip: **${c.prefix}addvip <usuário>**`
    )
    return message.reply(nargs0).then(msg => msg.delete({ timeout: 5000 }).catch(err => {}))
  }

      if (member.roles.cache.get("749291559165493308")) {
        const embed = new MessageEmbed()
          .setColor(c.cor)
          .setDescription(
            `🛑 O usuário já é vip.`
          )
        return message.reply(embed).then(msg => msg.delete({ timeout: 5000 }).catch(err => {}))
      }
  
      member.roles.add("749291559165493308").catch(O_o => {})
  
      const sucess1 = new MessageEmbed()
      .setDescription(
        `⭐ <@&749291559165493308> adicionado á **${member.user.tag}**`
      )
            .setColor(c.cor)
      return message.reply(sucess1).then(msg => msg.delete({ timeout: 5000 }).catch(err => {}))

};