---
tags:
  - React
  - Lazy-Loading
---

# Chunk Names

Usando lazy-loading é possível definir o nome dos chunks:

```js
React.lazy(() => import(/* webpackChunkName: lazy-component */ './component'));
```

E usar uma função para que o lazy utilize o nome do caminho no chunk:

```js
const lazyImport = (path) => {
  return import(/* webpackChunkName: "[request]" */ `${path}`);
};

const Home = React.lazy(() => lazyImport('../../pages/Home'));
// Chunk name will be pages-Home.chunk.js
```

## Referências

- [Cu & Código - Bluesky](https://bsky.app/profile/lixeletto.bsky.social/post/3l5m4z6nvvn2h)
- [Stackoverflow](https://stackoverflow.com/questions/63808927/reactjs-create-chunks-automatically-with-lazy-loading)
