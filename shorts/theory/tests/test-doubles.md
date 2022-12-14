# Dublês de Testes

"Test Doubles” é um termo genérico para qualquer caso que você queira substituir um objeto de produção para fins de teste. Pense em "dublê", aqueles de cinema mesmo, que "simulam” a aparência e o comportamento dos atores em um filme. Você provavelmente deve conhecer o conceito de maneira generalizada como "mockar" ou pela palavra "Mock". O fato é que Mock é apenas um dos tipos de "dublês" que temos disponíveis.

## Tipos

- **Dummies:** são objetos ou dados fictícios que substituem dados reais mas que não utilizados nos testes geralmente. São usados para satisfazer parâmetros. Com o uso deles é possível diminuir a complexidade dos testes, focando no que importa.
- **Fakes:** são objetos reais que implementam um comportamento que os torna inviável para serem utilizados em produção (um In-Memory Database, por exemplo).
- **Spies:** são "espiões” para registrar as informações de uma determinada função. Pode ser usado para dizer se um específico método importante no escopo da função que está sendo testada foi chamado, quantas vezes, com quais argumentos e etc.
- **Stubs:** são semelhantes aos spies porém, ele consegue substituir toda a implementação de um específico método, mudando o seu comportamento. São úteis para simular uma possível exceção, evitar estresse na camada de serviço: persistência de dados (evitando de gravar um registro no banco de dados, por exemplo); chamada à uma API ou integração a outros serviços possibilitando a diminuição no tempo de execução do teste.
- **Mocks:** São similares ao stub porém, é a camada mais alta para tornar um comportamento falso, geralmente, são usados para emular um banco de dados, um output de dados ou até mesmo uma dependência, a diferença é que, com um stub, é possível testar diversas ramificações do seu código, já com o mock, é possível testar diversos comportamentos de uma só vez. Os Mocks tem expectativas sobre o jeito que ele deve ser chamado e, caso não seja chamado da forma correta, o teste deve falhar.

## Diferenças entre mocks e stubs

Para entender a diferença entre mocks e stubs vamos imaginar que toda vez que um usuário criar uma conta no nosso software, um e-mail é disparado com uma mensagem de boas-vindas e dados referente à sua conta. No nosso cenário de testes não queremos enviar esse e-mail. Podemos usar mocks ou stubs, mas afinal... qual é a diferença?

Lembra que falamos que os mocks tem expectativas sobre o jeito que ele deve ser chamado? Aqui criamos as expectativas (espera-se que o método mailer.send deve ser chamado ao menos 1 vez e o método warehouse.hasInventory seja chamado ao menos uma vez, com qualquer argumento e retornará false quando chamado. Se por ventura alguma dessas expectativas não forem atendidas, nosso teste falhará.

Em ambos os casos usamos Test Doubles ao invés do nosso serviço de e-mail (evitando o estresse externo). A principal diferença é que com stub utilizamos a verificação por estado e com o mock usamos a verificação do comportamento.

## Referência

William Queiroz. [Testes Unitários: Fundamentos e Qualidade de Software!](https://dev.to/wnqueiroz/testes-unitarios-fundamentos-e-qualidade-de-software-5af0)
