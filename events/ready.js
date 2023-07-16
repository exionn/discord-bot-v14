import { REST, Routes } from "discord.js";

export default (client) => {
  client.once("ready", () => {
    const rest = new REST({ version: "10" }).setToken(process.env.token);
    const body = [];
    client.slashCommands.map(c => body.push(c));
    try {
      rest.put(Routes.applicationCommands(client.user.id), {
         body
      });
    } catch (error) {
      console.error(error);
    }
   console.log("Bot Aktif!")
  });
};
