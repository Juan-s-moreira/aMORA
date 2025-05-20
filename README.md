# SIMULADOR DE entrada de imóvel aMORA

Simulador de entrada de imóvei realizado para a empresa aMORA, feito com Javascript

## Funcionalidades

- Cálculo do valor de entrada com base no percentual informado
- Cálculo do total a ser guardado (15% do valor do imóvel)
- Cálculo da parcela mensal
- Simulação de parcelas corrigidas anualmente por:
  - 📈 IGPM fixo de 6% ao ano
  - 💰 Taxa de juros personalizada (composta)

## Fórmulas utilizadas

valor_entrada = valor_imovel _ (percentual_entrada / 100)

total_a_guardar = valor_imovel _ 0.15

parcela_mensal = total_a_guardar / (anos_contrato _ 12)

parcela_anoN_igpm = parcela_mensal _ (1 + 0.06) ** (N - 1)

parcela_anoN_juros = parcela_mensal \* (1 + taxa_juros / 100) ** (N - 1)


# COMO EXECUTAR

git clone https://github.com/seu-usuario/aMORA.git

cd seu-repositório

- Instale a dependência prompt-sync

npm install promtp-sync


## Execute o projeto:

node index.js

## Exemplo de uso:

Ao executar o programa, o usuário será solicitado a inserir:

Valor do imóvel

Percentual da entrada (%)

Duração do contrato (em anos)

Taxa de juros anual (%)

O resultado será exibido no terminal com os valores das parcelas mensais ao longo dos anos, considerando IGPM e taxa de juros personalizada.

