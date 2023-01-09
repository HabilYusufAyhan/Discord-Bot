import * as dotenv from 'dotenv' 
dotenv.config()
import {
  Client,
  GatewayIntentBits,
  ActivityType,
  Collection,
} from "discord.js";
import { readdirSync } from "fs"
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.AutoModerationExecution,
    GatewayIntentBits.AutoModerationConfiguration,
    GatewayIntentBits.GuildBans
  ],
});
readdirSync("./events").forEach(async file => {
  const event =await import(`./events/${file}`).then(m => m.default)
  event(client)
})
client.on("ready", () => {
  client.user.setPresence({
    activities: [{ name: `TBD Gencin Duygularıyla`, type: ActivityType.Playing }],
    status: "online",
  });
});

client.login(process.env.TOKEN);

// command loader

client.commands = new Collection()
readdirSync("./commands").forEach(category => {
   readdirSync(`./commands/${category}`).forEach(async file => {
     const command = await import(`./commands/${category}/${file}`).then( c => c.default)
     client.commands.set(command.name,command)
     
   })
})


