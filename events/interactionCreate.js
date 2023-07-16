export default (client) => {
  client.on("interactionCreate", (interaction) => {
    if (!interaction.isCommand()) return;
    
    if (!interaction.guildId) return;
    const body = client.slashCommands.map(c => console.log(c));
    /*
    const command = client.slashCommands.get(interaction.commandName);

    if (!command) return;
    
    try {
      command.execute(interaction);
    } catch (err) {
      console.log(err);
    }
    */
  });
}
