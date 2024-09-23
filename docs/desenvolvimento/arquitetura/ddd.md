# Domain Driven Design

> As anotações abaixo foram feitas a partir das aulas da pós-graduação da PUC-Minas e serão complementadas no futuro.

![São 4 caixas de texto, feitas de modo que tem-se: Application no topo, Infrastructure na parte de baixo, Service na direita, Domain na esquerda. Existem setas apontando de Application para Domain e para Service. Existem setas apontandos de Service para Infrastructure e para Domain. Existe outra seta apontando de infrastructure para domain.](./images/ddd-diagram.png)

## Camadas

### Camada de aplicação

Responsável pelo projeto principal. Aqui serão implementados os controladores e a exposição de APIs. Tem a função de receber todas as requisições e direcioná-las a algum Service para executar uma determinada ação.

### Camada de Serviço

Nela são implementados fluxos de trabalho e regras globais ao sistema. Essa camada também usa o domínio para persistir informações contra o banco de dados.

### Camada de Infraestrutura

É dividida em duas subcamadas:

- **Data**: realiza a persistência com o banco de dados, utilizando, ou não, algum ORM.
- **Cross-Cutting**: uma camada 'separada' que não obedece a hierarquia de camada. Como o próprio nome diz, essa camada cruza toda a a hierarquia. Contém as funcionalidades que pode ser utilizadas em qualquer parte do código, como, por exemplo, validação de CPF/CNPJ, consumo de API externa e utilização de alguma biblioteca de segurança. POssui referências da camada Domain.

### Camada de domínio

- Ele é responsável por representar conceitos, informações e situações referentes ao negócios.
- O estado que reflete a situação de negócios é controlado e usado aqui, embora os detalhes técnicos sobre como armazená-lo sejam delegados à infraestrutura. Essa camada é a essência de negócio do software sendo construído.
- A camada de modelo de domínio é a implementação do negócio. Quando você implementa uma camada de modelo de domínio de microsserviço em alguma linguagem, essa camada é codificada como uma biblioteca de classes reusável (DLL ou JAR), com as entidades de domínio que modelam os dados e realizam operações sobre ele.
- Seguindo os princípios de **Ignorância de Persistência** e a **Ignorância da Infraestutura**, essa camada deve ignorar totalmente os detalhes tecnológicos. Essas tarefas de persistência devem ser executadas pela camada de infraestrutura.
- Entidades de domínio não devem ter nenhuma dependência direta (como derivar de uma classe base) da infraestrutura ou acesso a dados, como Entity Framework, Hibrnate ou JPA.
- Idealmente, suas entidades de domínio não devem derivar nem implementar nenhum tipo definido na infraestrutura.

## Padrões essenciais do DDD

- Objeto de Valor
- Entidade
- Raiz agregada
- Repositório
- Caso de Uso
- Contexto Limitado
- Fábrica de Entidades
- Serviço de Domínio
