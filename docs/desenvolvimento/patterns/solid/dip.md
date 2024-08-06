# Dependency Inversion Principle

## Acoplamento

> Uma classe com muitas dependências tem acoplamento com muitas outras classes. Além disso, o código acaba acoplado também às dependências das dependências e assim por diante.

Mudanças nas dependências, ou nas dependências das dependências, podem acabar se propagando para a classe que as utiliza. Precisamos ter atenção para evitar que dependências indesejadas se espalhem indevidamente pelo nosso código.

### Acoplamento bom x Acoplamento ruim

Acoplamento precisa existir. Uma classe totalmente desacoplada é uma classe inútil.

:::note Exemplo
Num código Java desde o primeiro `OlaMundo` dependemos de `String` e `System`. Essas classes do pacote `java.lang` são estáveis: mudam muito pouco.
:::

Classes estáveis têm essa característica porque milhões de projetos as usam e mudá-las teria um impacto gigantesco. Por isso, podemos depender delas tranquilamente. Esse é um **acoplamento bom**.

Depender de classes voláteis, por sua vez, é o acoplamento ruim.

## Abstrações e Inversão das Dependências

Podemos usar classes abstratas e, preferencialmente, interfaces. Abstrações são estáveis: mudam muito menos que implementações.

> Podemos também usar classes concretas como abstrações, desde que não deixemos detalhes de outras dependências vazarem.

Ao usarmos classes abstratas ou interfaces, o código não depende mais diretamente da dependência volátil e sim da abstração. E a dependência volátil, por sua vez, também depende da abstração, implementando-a. Por isso, podemos dizer que a **dependência é invertida**.

> Devemos evitar que detalhes das dependências vazem nas nossas abstrações.

## Abstrações conceitualmente abstratas

Devemos evitar criar abstrações vinculadas a tarefas muito particulares. Por exemplo:

```java
public interface EnviadorSMS {
    void enviaNota(String mensagemNota, String telefoneClienteNota);
}
```

> Boas abstrações devem fornecer capacidades mais amplas, sem estarem atreladas a um uso muito específico.

## Regras de Negócio x Detalhes

### Código de Alto Nível e Baixo Nível

- Código de **alto nível** seriam os códigos que implementam regras de negócio.
- Código de **baixo nível** seriam os mecanismos de entrega, os detalhes de implementação mais técnicos.

Código de alto nível é aquele mais distante das entradas ou saídas do sistema e, por isso, muda menos frequentemente e por razões mais importantes, relacionadas ao negócio.

Já o código de baixo nível, mais próximo das entradas ou saídas, muda mais frequentemente e com mais urgência.

:::note Alto ou baixo nível depende do contexto
Para uma aplicação Web, o código SQL pode ser considerado um código de baixo nível, um detalhe de implementação, já que não está diretamente ligado às regras de negócio, mas à representação das entidades em um banco de dados relacional.

Porém, para quem desenvolve um ORM, gerar código SQL comum entre os bancos de dados pode ser considerado alto nível, já que está relacionado ao problema que uma biblioteca de ORM resolve. Variações entre os bancos de dados, como AUTO_INCREMENT, SEQUENCE ou IDENTITY na geração de PK's, seriam detalhes de implementação de baixo nível.
:::

## O princípio da inversão de dependências

> Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.
>
> Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.

:::note Exemplo
Pense em uma arquitetura em três camadas: o código da camada de Apresentação depende do código da camada de Negócio que, por sua vez, depende do código da camada de Persistência. Essa arquitetura não atende ao DIP: código de alto nível (Negócio) depende de código de baixo nível (Persistência).

Para atender ao DIP, teríamos que inserir abstrações na camada de Negócio para inverter as dependências, fazendo com que Persistência dependa de Negócio e não o contrário.
:::

TODO: continuar aqui
