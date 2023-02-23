const {SlashCommandBuilder, EmbedBuilder} = require("discord.js")

const exampleEmbed = new EmbedBuilder()
	.setColor("Orange")
	.setTitle('Comandos do Git')
	.addFields(
    { name: '\u200B', value: '\u200B' },
		{ name: '$ git init [nome-do-projeto]', value: 'Cria um novo repositório local com um nome especificado', inline: true },
		{ name: '$ git reset', value: 'Se você executou git add e quer desfazer, use o reset.', inline: true },
		{ name: '$ git stash', value: 'Armazena temporariamente todos os arquivos monitorados modificados', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: '$ git status', value: 'Revise edições e crie uma transação de commit', inline: true },
		{ name: '$ git commit --amend', value: 'Esse comando te permite renomear a mensagem do último commit feito', inline: true },
		{ name: '$ git branch -a', value: 'Listar as branches que estão no repositório remoto', inline: true },
		{ name: '\u200B', value: '\u200B' },
		{ name: '$ git diff', value: 'Serve para verificar diferenças entre commits, arquivos e árvores de diretórios' },
    { name: '$ git branch', value: 'Lista todos os branches locais no repositório atual', inline: true },
		{ name: '$ git branch -d nome-da-branch', value: 'Para excluir uma branch local', inline: true },
		{ name: '$ git checkout -b [nome-branch]', value: 'Cria uma nova branch e muda para a branch especificada', inline: true },
		{ name: '\u200B', value: '\u200B' },
    { name: '$ git merge [nome-branch]', value: 'Combina o histórico da branch especificada a branch atual', inline: true },
		{ name: '$ git push -u origin [branch]', value: 'Primeiro push da branch local envia todos os commits do branch local para o GitHub ', inline: true },
    { name: '$ git branch -m novo-nome-da-branch', value: 'Para renomear a sua atual branch local', inline: true },
		{ name: '$ git log --autor=nome-autor', value: 'Mostra o histórico de commits feitos por uma única pessoa', inline: true },
	)

module.exports = {
  data: new SlashCommandBuilder()
    .setName("git")
    .setDescription("Relembrar comandos Git"),
    
  async execute(interaction) {
    await interaction.reply({ embeds: [exampleEmbed] })
  }
}    