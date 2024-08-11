---
tags:
    - Regressão Linear
    - Regressão
    - Intercepto
---

# Regressão Linear Simples

## Visual

![Regressão Linear Simples](./images/regressao_linear_simples.jpg)

## Fórmula

$$
y = \beta_0 + \beta_1 x 
$$

O objetivo é calcular $\beta_0$ e $\beta_1$.

:::note Coeficientes
$\beta_0$ é chamado de intercepto (coeficiente linear da reta). $\beta_1$ é chamado de inclinação (coeficiente angular da reta).reta.
:::

:::note Variáveis
- A variável $y$ é chamada de variável dependente, ou resposta.
- A variável $x$ é chamda de variável independente ou explicativa.
:::

## Determinação dos Parâmetros

### Inclinação

$$
\beta_1 = \dfrac{
    \displaystyle\sum x_i y_i - \dfrac{
        \big(
            \displaystyle\sum x_i
        \big) \cdot \big(
            \displaystyle\sum y_i
        \big)
    }{n}
}{
    \displaystyle\sum x_i^2 - \dfrac{
        \big(
            \sum x_i
        \big)^2
    }{n}
}
$$

### Intercepto

$$
\beta_0 = \bar{y} - \beta_1\bar{x}
$$
