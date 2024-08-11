---
tags:
  - React
  - Testes
  - testing-library
  - accessibility
  - forms
---

# Testando formulários com acessibilidade

Existem algumas técnicas que podem ser utilizadas para testar formulários com acessibiliade utilizando React e a testing-library.

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

### Querying

```tsx
user.type(screen.getByRole('textbox', { name: 'Name' }), 'Test');
```

> The `{ name: "Name" }` query for acessible name and not for the input name property.

## Submit Button

Use the `*ByRole` methods:

### Componente

```tsx
<button type='submit'>Sign up</button>
```

### Querying

```tsx
screen.getByRole('button', { name: 'Sign up' });
```

> The accessible name this time is the actual text content of the button. Note that if we add an `aria-label` to the button, the accessible name will be the text content of that `aria-label`.

## Referências

- [Best Practices for Writing Tests with React Testing Library](https://claritydev.net/blog/improving-react-testing-library-tests)
