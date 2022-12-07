let combustivel = require("../Combustivel")

test('Deve-se calcular a quantidade de Etanol necessária para viajar uma quantidade X de Metros', () => {
    expect(combustivel.viagem(22000, "etanol")).toBe(2)
});

test(('Deve-se calcular a quantidade de Gasolina necessária para viajar uma quantidade X de Metros', () => {
    expect(combustivel.viagem(16000, "gasolina")).toBe(1)
});

test('Condições de Parada - Valor do combustível inválido', () => {
    expect(combustivel.viagem(1, "valor qualquer")).toBe("Valor do combustível inválido ou inexistente")
});

test('Condições de Parada - Valor de distância inválido', () => {
    expect(combustivel.viagem("", "gasolina")).toBe("Valor da distância inválido ou inexistente")
});
