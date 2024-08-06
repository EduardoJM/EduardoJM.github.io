---
id: implementations-of-micro-front-end
title: Formas de Implementação de Micro Front-End's
tags:
  - Micro Front-End
---

## Implementação em tempo de build

Usar diversos projetos, por exemplo no `npm`, integrados por um projeto maior. Por exemplo, no `package.json`:

```json
{
  "name": "@my-project/main",
  // ...
  "dependencies": {
    "@my-project/frontend-1": "1.0.0",
    "@my-project/frontend-2": "1.0.0",
    "@my-project/frontend-3": "1.0.0"
  }
}
```

Um problema disso é que as pipelines de build, test e deploy não são separados e independentes.

## Integração por meio de funções javascript

A ideia, dentro dessa forma de trabalho, é ter vários scripts (bundles) que disponibilizam funções para renderizar aquele micro front-end e, ter um script principal que gerencia chamada para essas funções. Um exemplo disso é:

```html
<script src="https://browse.example.com/bundle.js"></script>
<script src="https://order.example.com/bundle.js"></script>
<script src="https://profile.example.com/bundle.js"></script>

<div id="micro-frontend-root"></div>

<script type="text/javascript">
  const microFrontEndsByRoute = {
    '/': window.renderBrowseRestaurants,
    '/order-food': window.renderOrderFood,
    '/user-profile': window.renderUserProfile,
  };

  const renderFunction = microFrontendsByRoute[window.location.pathname];

  renderFunction('micro-frontend-root');
</script>
```

## Integração através de web components

A estratégia para essa abordagem é definir `web components` nativos do browser para os micro front-ends:

```html
<!-- /about -->
<div id="container">
  <about-micro-frontend></about-micro-frontend>
</div>
```

```html
<!-- /products -->
<div id="container">
  <products-micro-frontend></products-micro-frontend>
</div>
```

Ao utilizar web components para criar micro front-ends, é possível utilizar qualquer uma das duas abordagens anteriores para executar os componentes.

## Integração via iframes

```html
<!-- /about -->
<div id="container">
  <iframe src="https://about.example.com"></iframe>
</div>
```

```html
<!-- /products -->
<div id="container">
  <iframe src="https://products.example.com"></iframe>
</div>
```

## Referências

- [Micro Frontends](https://martinfowler.com/articles/micro-frontends.html)
