const paradas = require('../Paradas')

test('Testando o algortimo - quantidade de adultos maior do que a de crianças', () => {
    expect(paradas.calcularParada(["adulto", "adulto", "criança"], 2)).toBe(2)
})

test('Testando o algortimo - Apenas crianças', () => {
    expect(paradas.calcularParada(["criança", "criança"], 4)).toBe(4)
})


test('Testando o algortimo - quantidade de crianças maior do que a de adultos', () => {
    expect(paradas.calcularParada(["criança", "criança", "adulto"], 4)).toBe(6)
})

test('Testando o algortimo - Apenas adultos', () => {
    expect(paradas.calcularParada(["adulto"], 4)).toBe(2)
})

test('Condições de paradas - considerando algum valor do Array inválido', () => {
    expect(paradas.calcularParada(["adulto", "erro"], 4)).toBe("Há valores inválidos")
})

test('Condições de paradas - considerando tipo do Array inválido', () => {
    expect(paradas.calcularParada(2, 4)).toBe("Este valor não é um array/objeto")
})


test('Condições de paradas - considerando valor do tempo inválido', () => {
    expect(paradas.calcularParada([], "")).toBe("Valor do tempo está inválido ou inexistente")
})