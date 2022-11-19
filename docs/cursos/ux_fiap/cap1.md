---
sidebar_position: 1
---

# Usabilidade e Arquitetura da Informação

:::note O que é usabilidade?
Usabilidade é um atributo de qualidade que mede quão fácil é usar a interface de um produto, ou seja, se está fácil de usar, temos um boa usabilidade, do contrário, a usabilidade de seu produto está ruim.
:::

Uma boa usabilidade deve cumprir com 5 funções:

1. **Aprendizagem:** seus usuários conseguem cumprir tarefas básicas no seu site logo na primeira vez que eles acessam?
2. **Eficiência:** agora que eles já aprenderam a usar seu produto eles conseguem fazer isso com rapidez?
3. **Memorabilidade:** eles conseguem se lembrar como devem usar o seu site ou app depois de passar algum tempo sem acessar?
4. **Prevenção de Erros:** a usabilidade do seu produto é tão boa que evita que seus usuários cometam erros ou, pelo menos, ajuda-os a desfazer um erro facilmente?
5. **Satisfação:** é gostoso acessar seu site? Seu usuário se sente feliz porque consegue fazer tudo aquilo que ele precisa?

:::note A experiência do seu usuário não depende só da usabilidade do seu produto. Ela depende de mais alguns fatores:

- usabilidade do produto (é fácil?)
- as emoções do usuário (como ele se sente na hora que está acessando seu site ou app?)
- as regras do seu negócio (frete grátis, promoções, devlução do produto, etc).
:::

## As 10 heurísticas de Nielsen

Essas heurísticas funcionam como um *check-list* para a construção da sua comunicação com o seu usuário e elas sugerem que você:

### Mantenha o status visível 

Você precisa informar seu usuário sobre o que está acontecendo, dizer para onde ele está indo, como está indo ou o que vem depois.

:::note Exemplos
- Indicador de quantos passos faltam em um cadastro.
- Indicador de carregamento ao executar alguma ação.
:::

### Tenha proximidade com o mundo real

É reciso falar a mesma língua que o seu usuário, deve ser feito de forma muito natural e lógica. Isso vale tanto para a escolha da comunicação, como para o uso de símbolos e outros elementos que façam parte do dia a dia das pessoas.

:::note Exemplos
- Comunicação da Netflix (Bem-vindo de volta) indicando que a pessoa já esteve lá.
- Uso de ícones como "X" para indicar algo que não está disponível.
:::

### Exerça o controle, sem tirar a liberdade

É importante que você direcione o usuário para ajudá-lo a cumprir com sua tarefa mas sem tirar dele as opções de fazer o que quiser em seu site (desde que não haja problemas com a funcionalidade ou regras de negócio).

:::note Exemplos
- Eu posso criar um anúncio no Enjoei e, quando quiser, posso apagar esse anúncio. Mas não é possível alterar as fotos do mesmo.
:::

### Mantenha a consistência e os padrões

É preciso convencer o usuário das decisões que ele deve tomar. Para isso, os botões que chamamos de "call to actions" devem ter o mesmo padrão e, se possível, estarem posicionados da mesma forma sempre que aparecem para o usuário. Esses botões são aqueles "comprar", "saiba mais", "seguir", etc.

Quando falamos de aplicativos, querer reinventar a roda pode não ser uma boa ideia. Os usuários de Android e de iPhone já tem um conhecimento prévio dos padrões adotados pelo sistema.

### Trabalhe na prevenção de erros

É preciso entender onde e como seu usuário pode errar para, então, evitar que isso aconteça. O ideal é que seja tudo tão perfeito que ele nem cometa erros de percurso dentro do site ou aplicativo.

:::note Exemplos
- Sugestões de termos nas buscas.
- Campos com máscara que indicam como os valores devem ser inseridos.
:::

### Crie o reconhecimento

Seu usuário nem sempre vai decorar o caminho que ele fez para chegar a um determinado produto ou página de interesse. Então é sua obrigação deixar bem visível esse passo a passo, para que ele navegue e refaça seu caminho sem problemas, quando quiser.

:::note Exemplos
- Breadcrumb's.
:::

### Flexibilidade e eficiência de uso

Você deve se lembrar que o seu site pode ser acessado por pessoas com perfis diferentes. Por mais que o seu produto tenha um público definido, dentre eles podem existir pessoas mais ou menos experientes no uso de sites e aplicativos. Pensando nisso, a usabilidade deve ser boa para qualquer pessoa que resolver acessar seu produto.

:::note Exemplos
- Aplicativo do Gmail onde é possível arquivar um e-mail arrastando para o lado ou clicando no botão e indo até a opção de arquivar.
:::

### Design minimalista

As telas do seu produto precisam ser simples e conter somente o que o usuário realmente precisa saber ou fazer. Quanto mais informação desnecessária, maiores são as chances das pessoas se perderem e não conseguirem cumprir com o objetivo delas.

### Ajude a reconhecer, diagnosticar e consertar erros

Mesmo com todo o cuidado, seu usuário pode encontrar obstáculos para cumprir sua tarefa usando seu produto. Então é importante que as mensagens de erro sejam claras, de maneira que as pessoas consigam consertar rapidamente o erro cometido e, assim, seguir adiante.

É muito comum apps e sites exibirem mensagens técnicas como "erro na conexão com banco de dados" ou "serviço indisponível". Isso não é legal. O usuário não entende e ainda pensa que o site ou app é cheio de erros.

:::note Leituras
Na página [Tratamento de Erros](../../design/error-handling.md) existem anotações feitas a partir da leitura de outros textos sobre o tema.
:::

### Documentação e ajuda

O ideal é que tudo em seu site ou aplicativo possa ser feito de forma bem intuitiva, mas em alguns casos é preciso oferecer informação ou ajuda para seus usuários. Isso amenizará qualquer impacto que uma dúvida possa ter quando ele pretende concluir alguma tarefa.

:::note Exemplos
- Links para "onde encontrar esses códigos" para cartões e afins.
:::

## Arquitetura de Informação

A arquitetura da informação organiza e categoriza todo o conteúdo que você tem em seu produto. Esse esqueleto do seu site deve tornar mais fácil a usabilidade e contribuir para que seus usuários encontrem mais rapidamente o que eles procuram.

Camposta, basicamente, por duas frentes:

- Identificação e definição do conteúdo e funcionalidades do site.
- Organização, estrutura e nomenclatura do conteúdo.

Quando você desenha o mapa de um site, por exemplo, você está definindo como seu conteúdo vai ser agrupado e apresentado para seu usuário. Isso tudo precisa fazer sentido, principalmente, para quem vai usar o seu site. É exatamente nesse ponto que a arquitetura se mostra muito importante para a usabilidade. Se o usuário não encontrar o que ele procura ou se sentir que a organização do site está ruim ele não vai ficar.

### Etapas para Definir uma Arquitetura da Informação

- **Inventário de conteúdo:** é o momento de levantar e identificar todo o conteúdo existente no seu site.

- **Auditoria de conteúdo:** o conteúdo deve ser avaliado para saber o quanto ele é útil, qual é o seu tom de voz e se deve mesmo entrar no site.

- **Agrupamento de informações:** de forma bastante coerente e lógica, essa é a hora de agrupar o conteúdo por temas similares ou relação entre si.

- **Taxonomia:** é a nomenclatura que você dá para os agrupamentos que você criou e deve contemplar todo o conteúdo do site.

- **Informações descritivas:** é quando você define metadados úteis que poderão ser usados para gerar listas de "conteúdo relacionado" ou outros componentes de navegação que vão auxiliar os usuários a encontrar o que eles precisam.

### Formas de identificar problemas na arquitetura de informação

- **Baixo tráfego em determinada categoria**.
- **Conversão baixa** (conversão pode ser entendida por vendas, inscrições, leads, depende do modelo de negócios).
- **Altas taxas de rejeição**.
- **Baixo número de entradas**.
- **Alto volume de pesquisas** (se muita gente usa a sua busca no site, pode ser um sinal de que elas não estão encontrando o que precisam. Aproveite para avaliar os termos mais buscados e, com isso, fazer os ajustes necessários em suas categorias, taxonomia e menu).
