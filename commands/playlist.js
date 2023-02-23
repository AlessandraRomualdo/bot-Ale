const {SlashCommandBuilder} = require("discord.js")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("playlist")
    .setDescription("Ouça a melhor playlist de estudos"),
    
  async execute(interaction) {
    await interaction.reply("https://www.youtube.com/watch?v=lNkbgVii5BI&list=PLjyZagKbKZErYCNc9r4yiKKCCOwO7oM_1&ab_channel=Mist3r")
  }
}    