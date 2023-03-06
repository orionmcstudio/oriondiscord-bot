// {} [] `` <> \
// Developed by BrianCDev

const { GatewayIntentBits, Client, EmbedBuilder, GatewayDispatchEvents, Collection, ActivityType } = require("discord.js");
const client = new Client({
    intents: [

        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessageTyping
    ]
});


// Configuramos el encendido del bot.
const config = require(`${process.cwd()}/config.json`);
const fs = require("fs")

require("colors");

// Mensaje de encendido
client.on("ready", () => {
    console.log("¡Bot turned on!".green)
    console.log("Goldlands Helper 0.1".green)


// Asignamos el estado del bot.
   client.user.setActivity({
    name: "Goldlands",
    type: ActivityType.Playing,
    url:  "https://www.youtube.com/"
   });

})

client.login(config.token) // Entramos con el token de config.json

client.on("messageCreate", async (message) => {
    if(message.author.bot || !message.guild || message.channel.type === "dm") return;
    
    var prefix = config.prefix // Invocamos el prefix de config.json

    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

// Desarrollamos nuestro primer comando, para dar respuesta.

    client.color = config.color
    client.color2 = config.color2
    

    let cmd = client.commands.find((c) => c.name === command || (c.alias && c.alias.includes(command)));
    if(cmd){
        cmd.run(client, message, args);
    }

})


client.commands = new Collection();

fs.readdirSync("./commands").forEach((dir) => {
    const commands = fs.readdirSync(`./commands/${dir}/`).filter((file) => file.endsWith(".js"));
    for (let file of commands){

        let command = require(`./commands/${dir}/${file}`);
        console.log(`[Goldlands] Loaded - ${file}`.blue)

        client.commands.set(command.name, command);
    }
});
