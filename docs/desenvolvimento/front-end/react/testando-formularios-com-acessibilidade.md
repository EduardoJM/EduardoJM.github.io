---
tags:
  - React
  - Testes
  - testing-library
  - Acessibilidade
  - Forms
---

# Testando formulários com acessibilidade

Existem algumas técnicas que podem ser utilizadas para testar formulários com acessibiliade utilizando React e a testing-library. Abaixo, veja sobre input's e sobre botões de envio.

## Input's

### Componente

```tsx
<label htmlFor="name">Name</label>
<input
  id="name"
  onChange={onFieldChange}
  placeholder="Enter your name"
/>
```

### Procurando pelos elementos

```tsx
user.type(screen.getByRole('textbox', { name: 'Name' }), 'Test');
```

:::info Nome acessível
O `{ name: "Name" }` procura pelo nome acessível (label, por exemplo) e não pelo atributo `name` do input.
:::

## Submit Buttons

Use os métodos do tipo `*ByRole`:

### Componente

```tsx
<button type='submit'>Sign up</button>
```

### Procurando pelos elementos

```tsx
screen.getByRole('button', { name: 'Sign up' });
```

:::info Nome acessível
O nome acessível dessa vez é o texto atual do botão. Perceba que se adicionarmos um atributo `aria-label` no botão, o nome acessível passa a ser o conteúdo do atributo `aria-label`.
:::

## Referências

- [Best Practices for Writing Tests with React Testing Library](https://claritydev.net/blog/improving-react-testing-library-tests)
