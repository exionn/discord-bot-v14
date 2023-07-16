import { Client, GatewayIntentBits, Collection } from "discord.js";
import { readdirSync } from "fs";
import "dotenv/config";

const intents = Object.values(GatewayIntentBits);
const client = new Client({
  intents,
  presence: {
    status: "dnd",
    activities: [{ name: "Gebeş Kaplumbağa 🐢", type: 1 }],
  },
});

//Collections
client.normalCommands = new Collection();
client.slashCommands = new Collection();

//Loaders
readdirSync("./events").forEach(async (file) => {
  const event = await import(`./events/${file}`).then((e) => e.default);
  event(client);
});

readdirSync("./commands").forEach(async (file) => {
  const command = await import(`./commands/${file}`);
  if (command.normal) {
    client.normalCommands.set(command.data.name, command.normal);
  }

  if (command.slash) {
    client.slashCommands.set(command.data.name, command.slash);
   // console.log(command.slash)
  }
});

client.login(process.env.token);
