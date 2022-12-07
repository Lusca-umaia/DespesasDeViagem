function calcularParada(array, tempo) {
    let paradas, controle = 0
    paradas = parseInt(paradas)

    //Condições de erro

    if (typeof array != "object") {
        controle++
        return "Este valor não é um array/objeto"
    }

    let verificador = array.filter(function (item) {
        return (item != "criança" && item != "adulto")
    })

    if (verificador.length > 0) {
        controle++
        return "Há valores inválidos"
    }

    if (tempo < 0 || typeof tempo != "number") {
        controle++
        return "Valor do tempo está inválido ou inexistente"
    }
    // --
    tempo = parseFloat(tempo * 60)

    //Filtradores de valores
    let adultos = array.filter(function (item) {
        return (item == "adulto")
    })

    let criancas = array.filter(function (item) {
        return (item == "criança")
    })
    // -- 

    //Condições do quantitativo de paradas

    //Apenas adultos
    if (adultos.length > 0 && criancas.length == 0 && controle == 0) {
        paradas = parseInt(tempo / 90)
        return paradas
    }

    //Apenas Crianças
    if (criancas.length > 0 && adultos.length == 0 && controle == 0) {
        paradas = parseInt(tempo / 60)
        return paradas
    }

    //Crianças e adultos, considerando que o número de adultos é superior ao de crianças
    if (adultos.length > 0 && criancas.length > 0 && criancas.length < adultos.length && controle == 0) {
        paradas = parseInt(tempo / 50)
        return paradas
    }

    //Crianças e adultos, considerando que o número de crianças é superior ao de adultos
    if (adultos.length > 0 && criancas.length > 0 && criancas.length > adultos.length && controle == 0) {
        paradas = parseInt(tempo / 40)
        return paradas
    }
    // --
}

//O tempo está em horas e só serão validados valores do array com "adulto" e/ou "criança";
//Só serão validados arrays - Primeiro parâmetro;

calcularParada(["criança", null, "adulto"], 4)

module.exports = { calcularParada }