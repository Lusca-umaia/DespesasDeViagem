function refeicoes(paradas, passageiros) {
    let controle = 0

    //Condições de parada

    if (typeof passageiros != 'object') {
        controle++
        return "Este valor não é um array/objeto"
    }

    let verificador = passageiros.filter(
        function (item) {
            return (item != "adulto" && item != "criança")
        }
    )

    if (verificador.length > 0) {
        controle++
        return 'Há valores da variável "passageiros" inválidos'
    }

    if (paradas < 0 || typeof paradas != "number") {
        controle++
        return "Valor de paradas está inválido ou inexistente"
    }
    // -- 

    paradas = parseInt(paradas)

    //Filtradores de passageiros - quantitativo
    let QuantiAdultos = passageiros.filter(
        function (item) {
            return (item == "adulto")
        }
    )

    let QuantiCrianca = passageiros.filter(
        function (item) {
            return (item == "criança")
        }
    )
    // --

    //Cálculo do valor total a ser pago nas refeições
    if (controle == 0) {
        let totalRefeicoes = 0
        totalRefeicoes += QuantiCrianca.length * 40
        totalRefeicoes += QuantiAdultos.length * 50

        paradas--
        let controlee = 0
        while (paradas > 0) {

            if (controlee >= 0 && controlee < 2) {
                totalRefeicoes += QuantiCrianca.length * 20
                totalRefeicoes += QuantiAdultos.length * 30
            }

            if (controlee == 2) {
                totalRefeicoes += QuantiCrianca.length * 40
                totalRefeicoes += QuantiAdultos.length * 50
                controlee = 0
            }


            controlee++
            paradas--
        }
        return totalRefeicoes
    }
    // --
}

//O quantitativo de paradas deve ser do tipo "Number" - Apesar do número inserido ter a possibilidade de ter vírgulas, o algoritmo o tranforma em inteiro;
//Os passageiros devem estar em formato de array

refeicoes(-2, ["adulto", "teste"])

module.exports = { refeicoes }