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
    activities: [{ name: `sahibim beni kodluyor`, type: ActivityType.Playing }],
    status: "dnd",
  });
});
client.login(
  "MTA1OTA4MzgzMDUwNzYwNjA4Nw.GMw_gI.FpRw3VskxCjmRNLoDVeCWX3VF7kswGkqhkgu4w"
);





