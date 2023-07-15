export const data = {
  name: "ping",
  description: "Discord'un ve botun gecikme süresi atar.",
  aliases: [],

  perms: [],
  cooldown: 0,
};

export const normal = {
  name: data.name,
  description: data.description,
  execute(message, args) {
    message.reply(`Pong! ${Math.abs(message.client.ws.ping)}MS`);
  },
};
