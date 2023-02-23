const {SlashCommandBuilder, EmbedBuilder} = require("discord.js")

const exampleEmbed = new EmbedBuilder()
	.setColor("Green")
	.setTitle('Expect e matchers Jest')
  .setAuthor({ name:'Para mais Matchers', url:'https://jestjs.io/pt-BR/docs/using-matchers'})
	.addFields(
    { name: '\u200B', value: '\u200B' },
		{ name: '.toBe()', value: 'Testa igualdade estrita entre o valor passado para expect e seu argumento.', inline: true },
		{ name: '.toEqual()', value: 'Para testar a igualdade entre o valor passado para expect e seu argumento, ideal para objetos e arrays.', inline: true },
		{ name: '.not.toBe() ou .not.toEqual()', value: 'Testa o retorno não esperdo do expect.', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: 'describe()', value: 'Serve para agrupar vários testes, ajudando a melhorar a organização.', inline: true },
    { name: 'expect()', value: 'Recebe o valor a ser testado e retorna um objeto representando uma expectation. A partir desse objeto retornado, você consegue utilizar os matchers para verificar se o objeto combina com o resultado esperado.', inline: true },
    { name: 'test() ou it()', value: 'Para escrever testes. Essa função recebe até três parâmetros', inline: true },
	)

module.exports = {
  data: new SlashCommandBuilder()
    .setName("jest")
    .setDescription("Relembrar conceitos Jest"),
    
  async execute(interaction) {
    await interaction.reply({ embeds: [exampleEmbed] })
  }
}   