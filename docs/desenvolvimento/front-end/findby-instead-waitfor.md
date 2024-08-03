
## Componente

```jsx
export const ListPage = () => {
  const [items, setItems] = useState([]);
 
  useEffect(() => {
    const loadItems = async () => {
      setTimeout(() => setItems(["Item 1", "Item 2"]), 100);
    };
    loadItems();
  }, []);
 
  if (!items.length) {
    return <div>Loading...</div>;
  }
 
  return (
    <div className="text-list__container">
      <h1>List of items</h1>
      <ItemList items={items} />
    </div>
  );
};
```

## Test with waitFor

```jsx
import { waitFor } from "@testing-library/react";
 
//...
 
describe("ListPage", () => {
  it("renders without breaking", async () => {
    render(<ListPage />);
 
    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: "List of items" }),
      ).toBeInTheDocument();
    });
  });
});

```

## Test with findBy

```jsx
describe("ListPage", () => {
  it("renders without breaking", async () => {
    render(<ListPage />);
    expect(
      await screen.findByRole("heading", { name: "List of items" }),
    ).toBeInTheDocument();
  });
});
```

## Referências

- [Best Practices for Writing Tests with React Testing Library](https://claritydev.net/blog/improving-react-testing-library-tests)

