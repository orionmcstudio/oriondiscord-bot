// {} [] `` <> \

const { EmbedBuilder } = require("discord.js")
module.exports = {
    name: "ping",
    alias: ["latencia"],




run (client, message, args){
    const embed = new EmbedBuilder()
    .setColor(client.color2)
    .setTitle("Pong ✅")
    .setDescription(` Server status is ✅, running at \`${client.ws.ping}ms\`!`)

     
    message.channel.send({embeds: [embed]})
    }
}