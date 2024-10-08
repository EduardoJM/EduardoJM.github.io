---
sidebar_position: 1
tags:
  - Solid
---

# Single Responsibility Principle

> Uma classe deve ter um, e apenas um, motivo para ser modificada.

Responsabilidade única não é o mesmo que fazer apenas uma coisa. As classes não precisam fazer apenas uma coisa, isso é uma característica dos métodos/funções.

## Classes Coesas

Classes coesas têm uma característica semelhante: os conceitos que essas classes representam estariam relacionados e separá-los seria pouco natural. O SRP é uma outra maneira de falar sobre a necessidade de código coeso.

### Encontrando classes pouco coesas

Para encontrar classes pouco coesas, devemos procurar por classes que:

- possuem muitos métodos diferentes;
- são modificadas com frequência;
- não param nunca de crescer.

---

Um dos problemas de coesão mais comuns são **Controllers** que fazem coisas demais:

- buscam dados no BD;
- implementam regras de negócio;
- enviam emails;
- chamam Web Services;
- enviam resultados para a View (o que realmente deveriam fazer).

## Referência

- **Desbravando SOLID**: Práticas avançadas para códigos de qualidade em Java moderno. Alexandre Aquiles. Casa do Código. Alura.
