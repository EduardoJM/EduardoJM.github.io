---
sidebar_position: 1
---

# Teste de fumaça

:::info Outros nomes
Também é conhecida com **"Build Verification testing"** ou **"Build Acceptance Testing"**.
:::

## Objetivos

- Testar a funcionalidade básica da aplicação e garantir que ela vai agir corretamente com um ou poucos usuários.
- Serve como baseline para os próximos testes.

:::info Exemplo
Se a aplicação executa em X milissegundos para 1 usuário podemos usar esse valor para comparar com 100 ou 1000 usuários simultâneos.
:::

## Testando com o k6

O teste é feito configurando poucos usuários (_virtual user_, `vus`, nas configurações do k6). A função exportada como `default` deve simular o comportamento do usuário, inclusive usando `sleep()` para que o comportamento esteja mais próximo possível do usuário final.

```javascript
import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 1,
  duration: '5s',
};

export default function () {
  http.get('http://192.168.68.108:3000');
  sleep(1);
}
```

## Referências

- [Tipos de teste de carga](https://eltonminetto.dev/post/2024-01-05-load-test-types/)
- [Teste de carga usando o k6](https://eltonminetto.dev/post/2024-01-11-load-test-k6/)
