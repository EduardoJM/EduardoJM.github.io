---
sidebar_position: 2
---

# Várias Descargas em Diferentes Localidades

Durante o transporte de cargas, existem cargas que partes (NF-e's/CT-e's) são descarregadas ao longo do percurso. Nesses casos temos duas situações: quando as descargas acontecem em UF's diferentes e quando as descargas acontecem na mesma UF.

## UFs Diferentes

Uma situação que pode acontecer é um transporte levar cargas diferentes para duas UF's. Assim, os campos de localização de descarregamento (tais como `<UFFim>`, `<infMunDescarga>`) acabam por dificultar esses pontos (haja visto que o manifesto conta com apenas um de cada campo `<UFFim>` e `<infMunDescarga>`, por exemplo). Para situações com carregametos onde parte da carga vai pra uma UF e outra parte para outra UF é necessário a emissão de dois Manifestos (MDF-e), uma para cada um (Informações vindas da Transportadora).

Assim, em casos de carga em que parte (NF-e/CT-e) será transportada para uma UF e parte (outras NF-e's/CT-e's) para outra UF o procedimento a ser adotado é a emissão de um Manifesto para cada um desses CT-e's indicando os campos de descarga para aquela UF em específica (Informações vindas da Transportadora).

## Mesma UF

É importante levar em consideração que, no caso do modal Rodoviário, não é possível emitir mais de um **MDF-e** com a mesma placa principal e mesma UF de descarregamento (`<UFFim>`), conforme a validação abaixo:

| #    | Regra de Validação                  | Crítica     | Msg     |  Efeito   |
| ---- | ----------------------------------- | ----------- | ------- | --------- |
| G071 | Se modal rodoviário:<br/> - Verificar se existe MDF-e não encerrado, para a placa principal (mesmo CNPJ base / CPF do emitente do MDF-e, mesma placa, mesmo tipo de emitente e mesma UF descarregamento)<br/><br/> **Observação: ** retornarchave de acesso e protocolo de autorização mais antigo que causa o bloqueio. | Obrig. | 611 | Rej. |

Assim sendo, não é possível a emissão de **MDF-e's** para um conjunto de:
- **mesma placa principal**,
- **mesmo CNPJ ou CPF do emitente**,
- **mesmo tipo do emitente** e
- **mesma UF de descarregamento**.

Aqui, como citado o tipo de emitente, vale o anexo do leiaute:

| #    | Campo   | Descrição               | Ocorr.   | Tamanho | Observações |
| ---- | ------- | ----------------------- | -------- | ------- | ----------- |
| 7    | tpEmit  | Tipo do Emitente        | 1 - 1    | 1       |  1 - Prestador de serviço de transporte<br/>2 - Transportador de Carga Própria<br/>3 - Prestador de serviço de transporte que emitirá CT-e Globalizado<br/><br/>OBS: Deve ser preenchido com 2 para emitentes de NF-e e pelas transportadoras quando estiverem fazendo transporte de carga própria. Deve ser preenchido com 3 para transportador de carga que emitirá à posteriori CT-e Globalizado relacionando as NF-e. |

:::note Observação
Os campos do Leiaute que não são importantes para essas anotações foram removidos da tabela acima.
:::

### Procedimento

Nesse caso, os municipios de descarga serão identificados dentro das tags `<infMunDescarga>` dentro de `<infDoc>`. Um exemplo para isso é:

```xml
<!-- ... -->
    <infDoc>
        <infMunDescarga>
            <cMunDescarga>2928901</cMunDescarga>
            <xMunDescarga>Sao Desiderio</xMunDescarga>
            <infCTe>
                <chCTe><!-- ... --></chCTe>
            </infCTe>
        </infMunDescarga>
        <infMunDescarga>
            <cMunDescarga>2919553</cMunDescarga>
            <xMunDescarga>Luis Eduardo Magalhaes</xMunDescarga>
            <infCTe>
                <chCTe><!-- ... --></chCTe>
            </infCTe>
        </infMunDescarga>
    </infDoc>
<!-- ... -->
```

## Referências

- [Leiaute - Portal do Manifesto Eletrônico de Documentos Fiscais - SVRS](https://dfe-portal.svrs.rs.gov.br/Mdfe/Documentos#)
