export default (client) => {
  const prefix = process.env.prefix;

  client.on("messageCreate", (message) => {
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).toLowerCase().split(/ +/);
    const commandName = args.shift();
    const command = client.normalCommands.get(commandName);

    if (!command) return;

    try {
      command(message, args);
    } catch (err) {
      console.log(err);
    }
  });
};
