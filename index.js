const Discord = require("discord.js");
const config = require("./config.json");
const bot = new Discord.Client();
const express = require("express");

const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

//mençao bot

bot.on("message", msg => {
  if(msg.content === `<@${bot.user.id}>`)
  msg.channel.send("**Meu prefixo é **`f7! `") 
})

bot.on("message", msg => {
  if(msg.content === `<@!${bot.user.id}>`)
  msg.channel.send("**Meu prefixo é **`f7!`") 
});

//inicio de tudo
bot.on('message', message => {
  if (message.author.bot) return;
  if (message.channel.type == 'channel') return;
  if (!message.content.toLowerCase().startsWith(config.prefix)) return;
  if (message.content.startsWith(`<@!${bot.user.id}>`) || message.content.startsWith(`<@${bot.user.id}>`)) return;

  const args = message.content
    .trim().slice(config.prefix.length)
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    const commandFile = require(`./commands/${command}.js`)//puxando a pasta comands + o comando
    commandFile.run(bot, message, args);
  } catch (err) {
    const embed = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setDescription(`${message.author}, O comando informado nao existe ou ainda nao foi adcionado, se isso for um erro chame por <@830429704150450216> \nUtilize **f.
help** para saber meus comandos.`)
    return message.channel.send(embed);
  }
});

//entrada/saída 
//Entrada
 bot.on('guildMemberAdd', async member => {
    let guild = await bot.guilds.cache.get('848688165467979787');
    let channel = await bot.channels.cache.get('IdDoCanalaqui');
          if (guild != member.guild) {
        return console.log('Entrou');
    } else {
        let embed = await new Discord.MessageEmbed()
            .setColor('#000001')
            .setAuthor(member.user.tag, member.user.displayAvatarURL())
            .setTitle(`Seja Bem vindo(a)`)
            .setDescription(
                `Olá **${member.user.username}** Bem vindo ao BAILE DA FOQUENTA  \n\n **Leia  regras** \n <#811345513898704906> depois de ler as regras vae em <#854062440282062878> e se registra
            `)
        channel.send(embed);
    }
});

//saida
bot.on("guildMemberRemove", async (member) => { 

  let guild = await bot.guilds.cache.get("IdDoSeuServeraqui");
  let channel = await bot.channels.cache.get("IdDoCanalaqui");
        if (guild != member.guild) {
        return console.log('Saiu');
    } else {
      let embed = await new Discord.MessageEmbed()
      .setColor("#000001")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`Alguem saiu do server`)
      .setDescription(`**${member.user.username}** Saiu do servidor, Espero que um dia ele volte, agora estamos com **${member.guild.memberCount}** membros `)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setTimestamp();

    channel.send(embed);
    }
});

//status
bot.on('ready', () => {
  console.log('Estou online');
  var tabela = [
    { name: 'meu prefix e f7!', type: 'PLAYING' },
    { name: 'meu prefix e f7!', type: 'WATCHING' }
  ];

  function setStatus() {
    var altstatus = tabela[Math.floor(Math.random() * tabela.length)]
    bot.user.setActivity(altstatus)
  }
  setStatus("online")
  setInterval(() => setStatus(), 5000)
})

bot.login(config.token);