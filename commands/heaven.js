const Discord = require("discord.js");

module.exports = {
    name: "heaven",
    permissions: ["SEND_MESSAGES"],
    cooldown: 3,
    description: "Image Manipulation Command",
    async execute(client, message, cmd, args, Discord) {
        const mention = message.mentions.members.first() || message.member;
        const avatar = mention.user.displayAvatarURL({ size: 2048, format: "png" });


        message.channel.send({ files: [{ attachment: `https://vacefron.nl/api/heaven?user=${avatar}`, name: "xopbotheaven.png" }] });
    }
}