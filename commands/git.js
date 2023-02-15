const {SlashCommandBuilder, EmbedBuilder} = require("discord.js")

const exampleEmbed = new EmbedBuilder()
	.setColor("Orange")
	.setTitle('Comandos do Git')
	.addFields(
    { name: '\u200B', value: '\u200B' },
		{ name: 'git init [nome-do-projeto]', value: 'Cria um novo repositório local com um nome especificado', inline: true },
		{ name: '$ git clone [url]', value: 'Baixa um projeto e seu histórico de versão inteiro', inline: true },
		{ name: '$ git stash', value: 'Armazena temporariamente todos os arquivos monitorados modificados', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: '$ git status', value: 'Revise edições e crie uma transação de commit', inline: true },
		{ name: '$ git add [arquivo]', value: 'Faz o snapshot de um arquivo na preparação para versionamento', inline: true },
		{ name: '$ git commit -m "[mensagem]"', value: 'Grava o snapshot permanentemente do arquivo no histórico de versão', inline: true },
		{ name: '\u200B', value: '\u200B' },
    { name: '$ git branch', value: 'Lista todos os branches locais no repositório atual', inline: true },
		{ name: '$ git branch [nome-branch]', value: 'Cria uma nova branch', inline: true },
		{ name: '$ git checkout -b [nome-branch]', value: 'Cria uma nova branch e muda para a branch especificada', inline: true },
		{ name: '\u200B', value: '\u200B' },
    { name: '$ git merge [nome-branch]', value: 'Combina o histórico da branch especificada a branch atual', inline: true },
		{ name: '$ git push -u origin [branch]', value: 'Primeiro push da branch local envia todos os commits do branch local para o GitHub ', inline: true },
    { name: '$ git push', value: 'Envia todos os commits do branch local para o GitHub ', inline: true },
		{ name: '$ git pull', value: 'Baixa o histórico e incorpora as mudanças', inline: true },
	)

module.exports = {
  data: new SlashCommandBuilder()
    .setName("git")
    .setDescription("Relembrar comandos Git"),
    
  async execute(interaction) {
    await interaction.reply({ embeds: [exampleEmbed] })
  }
}    