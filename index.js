

// FORMULAS DO TESTE

// valor_entrada = valor_imovel * (percentual_entrada / 100)
// total_a_guardar = valor_imovel * 0.15
// parcela_mensal = total_a_guardar / (anos_contrato * 12)
// parcela_anoN_igpm = parcela_mensal * (1 + 0.06)**(N-1) 
// # N é o ano
// parcela_anoN_juros = parcela_mensal * (1 + taxa_juros/100)**(N-1)


// Biblioteca prompt-sync
const prompt = require('prompt-sync')();


// converter os valores para BRL
const valorFormatado = (valor) => {
    return (
        valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })
    )
}

// Função da simulação
function simulador() {

    // PROMPTS E CONVERTENDO STRINGS PARA NÚMEROS
    const valor_imovel = Number(prompt("Por favor, informe o valor do imóvel: "));
    const percentual_entrada = Number(prompt("Agora, informe o percentual da entrada (%): "))
    const anos_contrato = Number(prompt("Informe a duração do contrato (anos): "))
    const taxa_juros = Number(prompt("Taxa juros anual(%): "))

    // ENTRADA | TOTAL A GUARDAR | PARCELA MENSAL
    const valor_entrada = valor_imovel * (percentual_entrada / 100)
    const total_a_guardar = valor_imovel * 0.15
    const parcela_mensal = total_a_guardar / (anos_contrato * 12)

    // simulação financiamento aMORA
    console.log("\n Simulação financiamento aMORA: ");
    console.log(`Valor do Imóvel: ${valorFormatado(valor_imovel)}`);
    console.log(`Valor da entrada: ${valorFormatado(valor_entrada)}`);
    console.log(`Valor a guardar: ${valorFormatado(total_a_guardar)}`);

    // PARCELAS ANUAIS IGPM E JUROS
    const igpm = [];
    const juros = [];

    for (let N = 1; N <= anos_contrato; N++) {
        parcela_anoN_igpm = parcela_mensal * (1 + 0.06) ** (N - 1)
        parcela_anoN_juros = parcela_mensal * (1 + taxa_juros / 100) ** (N - 1)

        igpm.push(parcela_anoN_igpm)
        juros.push(parcela_anoN_juros)
    }

    console.log("\n Parcelas mensais pelo IGPM:");
    igpm.forEach((valor, index) => {
        console.log(` Ano ${index + 1}: ${valorFormatado(valor)}`);
    })

    console.log("\n Parcelas mensais com a taxa de juros informada:");
    juros.forEach((valor, index) => {
        console.log(` Ano ${index + 1}: ${valorFormatado(valor)}`);
    })
}
simulador()

