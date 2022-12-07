function viagem(distancia, combustivel) {
    let controle = 0, litros
    //Condições de Parada
    if (combustivel != "gasolina" && combustivel != "etanol") {
        controle++
        return "Valor do combustível inválido ou inexistente"
    }

    if (distancia < 0 || typeof distancia != "number") {
        controle++
        return "Valor da distância inválido ou inexistente"
    }
    // --

    distancia = parseInt(distancia)

    //Cálculos a partir do combustível escolhido pelo usuário
    if (combustivel == "gasolina" && controle == 0) {
        litros = parseInt((distancia / 1000) / 16)
        return litros
    }

    if (combustivel == "etanol" && controle == 0) {
        litros = parseInt((distancia / 1000) / 11)  
        return litros
    }

    // --
}

//A distância deve ser em metros e do tipo "Number";
//Os únicos combustíveis considerados serão: "etanol" e "gasolina".

viagem(11000, "gasolina")

module.exports = { viagem }
