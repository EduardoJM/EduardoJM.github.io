# Teste de Pico

![Mostra um gráfico em duas dimensões, sem números, com o eixo x nomeado de Time e eixo y nomeado de Throughout. O eixo x do gráfico é dividido em 2 partes: um período de ramp-up onde o gráfico sobe, em linha reta, de 0 até um valor no meio do eixo y (sem número, porém definido como sendo maior que o número típico de usuários), logo após ele decresce, em reta, até 0. A imagem se assemelha a uma pirâmide.](./images/teste-de-pico.png)

## Objetivos

- Adicionar um pico de carga para observar como o sistema se comporta nesses cenários.

## Como testar

Para testar esse caso, aumentamos, de forma instantânea, o número de acessos. Esse número deve diminuir na mesma velocidade.

## Testando com o k6

```javascript
import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    {
      duration: '1m',
      target: 10000,
    },
    {
      duration: '30s',
      target: 0,
    },
  ],
};

export default function () {
  http.get('http://192.168.68.108:3000');
  sleep(1);
}
```

Podem acontecer falhas e degradação do desempenho e, dessa forma, os resultados do teste do k6 podem fornecer insights se a porcentagem de falhas e a performance que caiu são aceitáveis para esse caso ou não.

## Referências

- [Tipos de teste de carga](https://eltonminetto.dev/post/2024-01-05-load-test-types/)
- [Teste de carga usando o k6](https://eltonminetto.dev/post/2024-01-11-load-test-k6/)
