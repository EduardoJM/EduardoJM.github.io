---
tags:
    - Regressão Linear
    - Regressão
---

# Regressão Linear Múltipla

$$
y=\beta_0 + \beta_1 x_1 + \beta_2 x_2 + \cdots + \beta_k x_k
$$

$$
y=\beta_0 = \sum_{i=1}^{k} \beta_i x_i
$$

## Variáveis

- $y$ é a variável resposta.
- $x_1$, $x_2$, $x_3$, $\dots$, $x_k$ são variáveis explicativas.

## Forma Matricial

$$
Y = \begin{bmatrix}
   y_1 \\
   y_2 \\
   \vdots\\
   y_n
\end{bmatrix}
$$
$$
X = \begin{bmatrix}
   1 & x_{11} & x_{12} & \cdots & x_{1k} \\
   1 & x_{11} & x_{12} & \cdots & x_{1k} \\
   \vdots & \vdots & \vdots & \ddots & \vdots \\
   1 & x_{n1} & x_{n2} & \cdots & x_{nk}
\end{bmatrix}
$$
$$
\beta = \begin{bmatrix}
    \beta_0 \\
    \beta_1 \\
    \vdots \\
    \beta_k
\end{bmatrix}
$$
$$
Y=X\beta
$$

## Solução

$$
\hat{\beta} = (X^TX)^{-1}X^Ty
$$

$$
\hat{y} = X\hat{\beta}
$$
