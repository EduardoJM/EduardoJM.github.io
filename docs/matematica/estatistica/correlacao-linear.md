---
tags:
  - Estatística
  - Correlação
  - Coreelação Linear
  - Coeficiente de Correlação
---

# Correlação Linear

É uma medida adimensional que está entre $-1$ e $1$ e mede a relação entre duas variáveis;

![Três representações de gráficos, sem números, posicionados, lado a lado. No primeiro mostra pontos dispostos no sentido de uma reta crescente e abaixo dele apresenta o texto Corr(x, y) ≃ 1. O segundo mostra os pontos dispostos no sentido de uma reta decrescente e abaixo dele apresenta o texto Corr(x, y) ≃ -1. O terceiro apresenta pontos espalhados e o texto abaixo é Corr(x, y) ≃ 0.](./images/correlacao.jpg)

:::info Correlação Positiva
Uma correlação positiva indica relacionamento diretamente proporcional, ou seja: quando o valor de uma variável aumenta, o da outra também.
:::

:::info Correlação Negativa
Uma correlação positiva indica relacionamento inversamente proporcional, ou seja: quando o valor de uma variável aumenta, o da outra diminui.
:::

## Coeficiente de Correlação

$$
\text{Corr}(x, y) = \dfrac{
  \displaystyle\sum x_i \cdot y_i - n\bar{x}\bar{y}
}{
  \sqrt{
    \bigg[
      \displaystyle\sum x_i^2 - n\bar{x}^2 \bigg
    ]
    \cdot
    \bigg[
      \displaystyle\sum y_i^2 - n\bar{y}^2 \bigg
    ]
  }
}
$$
