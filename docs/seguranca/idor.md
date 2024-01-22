---
tags:
  - Segurança
---

# Insecure Direct Object Reference

Insecure Direct Object Reference (IDOR) é uma vulnerabilidade que permite que acessem ou modifiquem objetos manupulando ID's usados nas URL's ou parâmetros. Acontece por falta de controle de acesso.

:::info Exemplo
Quando um usuário acessa o perfil, a aplicação gera uma URL do tipo: `https://example.org/users/123`. O `123` é um ID de usuário. Se alguém mudar o valor para `124` ganhar acesso aos dados de outro usuário, isso se configura uma vulnerabilidade de `Insecure Direct Object Reference`.
:::

## Apenas URL's?

Não necessariamente precisa acontecer via URL, pode-se configurar, também, por meio de parâmetros no corpo da requisição:

```html
<form action="/update_profile" method="post">
  <!-- Other fields for updating name, email, etc. -->
  <input type="hidden" name="user_id" value="12345" />
  <button type="submit">Update Profile</button>
</form>
```
