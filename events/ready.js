import { REST, Routes } from "discord.js";

export default (client) => {
  client.once("ready", async () => {
    const rest = new REST({ version: "10" }).setToken(process.env.token);
    const body = client.slashCommands.map(c => console.log(c))
   /* try {
      await rest.put(Routes.applicationCommands(client.user.id), {
        body: client.slashCommands,
      });
    } catch (error) {
      console.error(error);
    }*/
    console.log(body);
  });
};
