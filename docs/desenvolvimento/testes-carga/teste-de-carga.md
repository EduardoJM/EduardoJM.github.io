---
sidebar_position: 2
---

# Teste de Carga

## Objetivos

- Testar a carga esperada do sistema.
- Garantir que a performance mínima é sempre a esperada.

:::info Exemplo
Se é esperado que a API seja acessada por 1000 usuários esse é o valor que vamos usar nos testes.
:::

## Informações

Como estamos simulando o comportamento normal de um usuário, a carga deve aumentar gradualmente e não de uma vez só. Os testes devem ter uma fase de _ramp-up_, onde a carga aumenta gradualmente, e outra fase de _ramp-down_, onde a carga vai diminuindo gradualmente até acabar.

:::info Observações
Esse tipo de teste pode ser utilizado, também, para ver como o sistema se comporta com relação a elasticidade.
:::

![exemplo gráfico do teste de carga](./images/teste-carga.png)

## Testando com o k6

Para realizar esse tipo de teste com o k6, utilizamos a funcionalidade `stages` dentro das `options`:

```javascript
import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    {
      duration: '10s',
      target: 100,
    },
    {
      duration: '30s',
      target: 100,
    },
    {
      duration: '10s',
      target: 0,
    },
  ],
};

export default function () {
  http.get('http://192.168.68.108:3000');
  sleep(1);
}
```

O período de _ramp-up_ irá durar 10 segundos e irá de 0 até 100 usuários. O período estável do gráfico irá se manter em 100 usuários e depois, no _ramp-down_ irá reduzir de 100 para 0 usuários simultâneos.

## Referências

- [Tipos de teste de carga](https://eltonminetto.dev/post/2024-01-05-load-test-types/)
- [Teste de carga usando o k6](https://eltonminetto.dev/post/2024-01-11-load-test-k6/)
