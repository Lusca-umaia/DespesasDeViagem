const Refeicoes = require('../Refeicoes')

test('Calculando o preco das Refeiçoes, levando em consideração os passageiros e as paradas feitas', () => {
    expect(Refeicoes.refeicoes(5, ['adulto', 'criança', 'criança'])).toBe(470)
})

test('Condições de Parada - Tipo da variável passageiros inválido', () => {
    expect(Refeicoes.refeicoes(5, "")).toBe("Este valor não é um array/objeto")
})


test('Condições de Parada - Valor da variável paradas inválido', () => {
    expect(Refeicoes.refeicoes(-2, ["adulto"])).toBe("Valor de paradas está inválido ou inexistente")
})