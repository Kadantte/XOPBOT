const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: 'youtube',
  cooldown: 3,
  permissions: ["SEND_MESSAGES"],
  description: "Sends The Owners Youtube Channel!",
  execute(client, message, cmd, args, Discord) {
    const embed = new Discord.MessageEmbed()
      .setColor('#c30202')
      .setTimestamp()
      .setTitle('My Youtube Account')
      .setURL('https://www.youtube.com/channel/UCCfKUHKPwTullX7aoFUjCIQ')
      .setDescription('`Youtube Link` \n[Click Here](https://www.youtube.com/channel/UCCfKUHKPwTullX7aoFUjCIQ)')
    message.lineReplyNoMention(embed);
  }
}