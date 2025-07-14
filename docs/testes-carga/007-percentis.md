# Percentis (p90, p95)

Quando temos um número de percentil **p90**, queremos dizer que 90% das requisições levaram **p90** ou menos tempo. O mesmo vale para **p95** com 95% das requisições levando **p95** ou menos tempo.

Por exemplo, com os resultados de testes com k6:

```
http_req_duration..............: avg=7.63s    min=191.2ms med=579.61ms max=41.24s   p(90)=37.23s   p(95)=39.31s
```

Temos que a média de duração das requisições foi de `7.63s`, a menor duração foi de `191.2ms`, a mediana `579.61ms`, a máxima `41.24s`. 90% das requisições levaram até `37.23s`. 95% das requisições levaram até `39.31s`.

:::info Observação
No caso, considerando um cálculo manual, ordenar as requisições por tempo (do menor para o maior) e pegar o número de requisições que corresponde a 90% e, posteriormente, pegar o maior tempo, obtemos o **p90**.
:::
