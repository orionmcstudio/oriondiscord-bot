// {} [] `` <> \

const { EmbedBuilder } = require("discord.js")


module.exports = {
    name: "embed",
    alias: ["emb", "e"],

    run(client, message, args, prefix){
        if(!message.member.permissions.has("Administrator")) return message.channel.send({embeds: [new EmbedBuilder()
        
            .setTitle("❌, ¡No tienes suficientes permisos para usar este comando!")
            .setDescription("Necesitas los sigientes permisos: \`Administrator\`")
            .setColor(client.color2)
        
        ]});

        const texto = args.join(" ");
        if(!texto) return message.channel.send({embeds: [new EmbedBuilder()
        
            .setTitle("❌, Debes especificar el contenido del embed!")
            .setDescription(`**Uso: ** \`${prefix}embed <título> - <thumbnail> - <descripción> - <image> - <url>\``)
            .setColor(client.color)
        
        ]});


        const opciones = texto.split(" - ")
        message.channel.send({embeds: [new EmbedBuilder()

        .setTitle(opciones[0])
        .setThumbnail(opciones[1])
        .setDescription(opciones[2])
        .setImage(opciones[3])
        .setURL(opciones[4])
        

        .setColor(client.color)
        ]});
    }
}