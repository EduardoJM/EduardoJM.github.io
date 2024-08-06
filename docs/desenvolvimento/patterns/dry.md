# Don't Repeat Yourself

Quando temos código repetido, uma mudança nas regras de negócio ou na tecnologia pode requerer uma alteração em vários pontos do código. O esforço de manutenção é grande. Existe, também, a possibilidade de esquecermos de alterar algum ponto e, em consequência, gerarmos um bug no nosso sistema.

## Acrônimo

No **Pragmatic Programmer**, é criado o acrônimo D.R.Y: Don't Repeat Yourself, que é:

> Todo bloco de conhecimento deve ter uma representação única, sem ambiguidades e dominante num sistema.

## Front-End e Componentização

A prática de componentização e uso de tokens no front-end é uma ótima maneira de evitar repetição de código.

## É uma repetição?

Repetir código é ruim, mas uma das formas de entender se um trecho de código é realmente uma duplicação é, de fato, pensar nos motivos para alterar esse trecho de código. Por exemplo: toda vez que um desses trechos for alterado, todos os outros deverão ser alterados também ou existe um mótivo pra alterar apenas um deles? Relacionado com [SRP](./solid/srp.md).

## Referência

- **Desbravando SOLID**: Práticas avançadas para códigos de qualidade em Java moderno. Alexandre Aquiles. Casa do Código. Alura.
