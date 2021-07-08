const { MessageEmbed } = require("discord.js");
const c = require("../config.json");

module.exports.run = async (client, message, args) => {
  const embed = new MessageEmbed()
  .setDescription(
    `**b!avatar** - Exibe o própio avatar ou do usuário mencionado.
**b!cor** - Altera a cor do nome.
**b!emojiinfo** - Mostra informações de um emoji.
**b!help** - Exibe o menu de ajuda.
**b!botinfo** - Mostra informações sobre mim.
**b!serverinfo** - Mostra status do servidor.
**b!userinfo** - Mostra o perfil do usuário.
**b!notify** - Receber as notificações do servidor.
**b!unnotify** - Não receber as notificações do servidor.
**b!addemoji** -  Adiciona um emoji ao servidor.
**b!addvip** - Adiciona Vip em um usuário.
**b!apagar** - Apaga mensagens de um canal.
**b!ban** - Bane um usuário.
**b!softban** - Bane e desbane um usuário.
**{config.prefix} chat** - Bloquei e desbloqueia um chat.
**  eval** - Testar parte do comandos.
**config.prefix mute** - Muta um usuário.
**{config.prefix} slowmode** - Altera o slowmode do chat.
**{config.prefix} unmute** - Desmuta um usuário
**{config.prefix} warn** - Dá warn em um usuário.`
  )
  .setColor(c.cor)
  .setAuthor(message.guild.name, message.guild.iconURL())
  .setFooter(message.member.user.tag)
  .setTimestamp()
      message.reply(embed)

};