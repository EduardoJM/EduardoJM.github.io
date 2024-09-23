---
sidebar_position: 3
---

# Teste de Estresse

![Mostra um gráfico em duas dimensões, sem números, com o eixo x nomeado de Time e eixo y nomeado de Throughout. O eixo x do gráfico é dividido em 3 partes: um período de ramp-up onde o gráfico sobe, em linha reta, de 0 até um valor no meio do eixo y (sem número, porém definido como sendo maior que o número típico de usuários), logo após ele se mantem constante nesse valor e no final ele decresce, em reta, até 0. A imagem se assemelha a um trapézio.](./images/teste-estresse.png)

## Objetivos

- Adicionar mais carga do que o normal.
- Testa como o sistema se comporta sobre pressão.

## Testando com o k6

Fundamentalmente, o teste de estresse e o teste de carga, em termos de implementação para o k6 são iguais, o que diferencia eles é a determinação do que é considerado a carga esperada pelo seu sistema:

```javascript
import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    {
      duration: '10s',
      target: 200,
    },
    {
      duration: '30s',
      target: 200,
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

## Referências

- [Tipos de teste de carga](https://eltonminetto.dev/post/2024-01-05-load-test-types/)
- [Teste de carga usando o k6](https://eltonminetto.dev/post/2024-01-11-load-test-k6/)
