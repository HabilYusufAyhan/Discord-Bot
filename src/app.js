import * as dotenv from 'dotenv' 
dotenv.config()
import {
  Client,
  GatewayIntentBits,
  ActivityType,
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
    activities: [{ name: `Fikir Ve Önerilerinizi Bekliyor`, type: ActivityType.Watching }],
    status: "dnd",
  });
});
client.login(process.env.TOKEN);





