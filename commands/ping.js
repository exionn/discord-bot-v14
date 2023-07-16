import { SlashCommandBuilder } from "discord.js";

export const data = {
  name: "ping",
  description: "Discord'un ve botun gecikme süresi atar.",
  aliases: [],

  perms: [],
  type: 1,
  cooldown: 0,
};

export function normal(message, args) {
  message.reply(`Pong! ${Math.abs(message.client.ws.ping)}MS`);
}

export const slash = {
  data: new SlashCommandBuilder()
    .setName(data.name)
    .setDescription(data.description),
  exexute(interaction) {
    interaction.reply(`Pong! ${Math.abs(interaction.client.ws.ping)}MS`);
  },
};
