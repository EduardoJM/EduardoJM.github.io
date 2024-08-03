---
tags:
    - Regressão Linear
    - Regressão
    - ANOVA
    - Variância
    - Analíse de Variância
---

# Análise de Variância (ANOVA)

Para verificar se o modelo de [regressão linear](./regressao-linear-simples.md) é significativo.

![Partições de Variablidade](./images/particoes.jpeg)

$$
SS_T = SS_R + SS_E
$$

$$
\sum (y-\bar{y})^2 = \sum (\hat{y} - \bar{y})^2 + \sum (y-\hat{y})^2
$$

- $SS_T$ (também $SQ_T$) é Soma de Quadrados Total
- $SS_R$ (também $SQ_R$) é Soma de Quadrados da Regressão
- $SS_E$ (também $SQ_E$) é Soma de Quadrados do Erro (Residual)

## Tabela ANOVA

| Variação  | Soma de Quadrado | Graus de Liberdade | Erro Médio        | F             |
| --------- | ---------------- | ------------------ | ----------------- | ------------- |
| Regressão | $SS_R$           | 1                  | $MS_R=SS_R$       | $MS_R/MS_E$   |
| Residual  | $SS_E$           | $n-2$              | $MS_E=SS_E/(n-1)$ |               |
| Total     | $SS_T$           | $n-1$              |                   |               |

## Coeficiente de Determinação

O coeficiente de determinação (ou lucro relativo) que se ganha ao introduzir o modelo, é dado por $$R^2 = \dfrac{SS_R}{SS_T}$$
