---
sidebar_position: 1
---
# Nomes Significativos

## Use nomes que revelem seu propósito

O nome de uma variável, função ou classe deve responder a todas as grandes questões. Ele deve lhe dizer porque existe, o que faz e como é usado.

## Evite informações erradas

Os programadores devem evitar passar dicas falsas que confundam o sentido do código. Devem evitar palavras cujos significados podem se desviar daqueles que desejamos.

:::note Exemplo
Não se refira a um grupo de contas como accountList, a menos que realmente seja uma List. A palavra list significa algo específico para programadores.
:::

É preciso evitar, também, nomes muitos parecidos.

Evite gracinhas, piadas, etc. Diga o que você quer expressar. Expresse o que você quer dizer.

## Faça Distinções Significativas

Se os nomes precisam ser diferentes, então também devem ter significados distintos. Faça distinção das palavras de forma que o leitor compreenda as diferenças.

Não usar números sequênciais em nomes (`a1`, `a2`, ..., `aN`). Eles não oferecem nenhuma informação alguma ou dica sobre a intenção de seu criador.

Palavras muito comuns são forma de distinção que nada expressam. Se você tem duas classes `ProductInfo` e `ProductData`, os seus nomes nada descrevem sobre suas diferenças.

Palavras muito comuns são redundantes. O nome de uma variável jamais deve conter a palavra variável. O nome de uma tabela jamais deve conter a palavra tabela.

## Use Nomes Pronunciáveis

Se não puder pronunciá-lo, não terá como discutir sobre tal nome sem parecer um idiota. Isso importa porque a programação é uma atividade social.

## Use Nomes passíveis de Busca

Nomes de uma só letra ou números possuem um problema em particular por não ser fácil localizá-los ao longo de um texto.

:::note Exemplo
Pior ainda quando uma constante é um número grande e alguém talvez tenha trocado os dígitos, criando assim um bug e ao mesmo tempo não sendo captada pela busca efetuada.
:::

Nomes longos se sobressaem aos curtos, e qualquer nome passível se sobressai a uma constante no código.

O tamanho de um nome deve ser proporcional ao tamanho do escopo.

## Evite Codificações

Evitar adicionar informações do escopo ou do tipo no nome das variáveis. É uma sobrecarga mental desnecessária para quem irá ler.

## Evite o Mapeamento Mental

Os leitores não devem ter de traduzir mentalmente os nomes que você escolheu por outros que eles conheçam.

Esse é um problema com nome de variáveis de uma só letra.

Na maioria dos contextos, um nome de uma só letra é uma escolha ruim; é apenas um armazenador que o leitor deverá mentalmente mapear de acordo com o conceito em uso. Não há razão pior do que usar o nome c só porque a e b já estão sendo usados.

## Nomes de Classes

Classes e objetos devem ter nomes com substantivo(s).

## Nomes de Métodos

Nomes de métodos devem ter verbo(s).

Usar métodos de fábrica (factory methody) com nomes que descrevam os parâmetros é preferível que vários construtores:

```
const fulcrumPoint = Complex.FromRealNumber(23.0);
```

é melhor que

```
const fulcrumPoint = new Complex(23.0);
```

## Selecione uma Palavra por Contexto

:::note Exemplo
É confuso ter `fetch`, `retrieve` e `get` como métodos equivalentes de classes diferentes.
:::

## Evite usar a mesma Palavra para dois Propósitos

:::note Exemplo
Imagine, por exemplo, que várias classes tenham um método `add` que criará um novo valor por meio da adição de dois valores existentes. Agora digamos que estejamos criando uma nova classe que possua um método `add` que coloque seu único parâmetro em uma coleção.
:::

Perceba, do exemplo acima, que a semântica dos métodos é diferentes e que, portanto, o segundo método não deveria se chamar `add`.

## Prefira nomes a partir do Domínio da Solução que do Domínio do Problema

É preferível que sejam usados nomes a partir do domínio da solução (programação) do que do domínio do problema (área de negócio da aplicação, por exemplo). Nomes relacionados a programação são mais claros e simples de serem entendidos por programadores.

## Adicione um Contexto Significativo

Você precisa usar nomes que façam parte do contexto para o leitor. Para isso você os coloca em classes, funções e namespaces bem nomeados. Se nada disso funcionar, então talvez como último recurso seja necessário adicionar prefixos ao nome.

:::note Exemplo
Imagine que você tenha variáveis chamadas `firstName`, `lastName`, `street`, `houseNumber`, `city`, `state` e `zipcode`. Vistas juntas, fica bem claro que elas formam um endereço. Mas e se você só visse a variável `state` sozinha num método? Automaticamente você assumiria ser parte de um endereço?
:::

## Não Adicione Contextos Desnecessários

:::note Exemplo
Em um aplicativo fictício chamado "Gas Station Deluxe" (GSD), seria uma péssima ideia adicionar prefixos a toda classe com GSD.
:::
