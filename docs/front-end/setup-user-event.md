

```jsx
// setup userEvent
function setup(jsx) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}
 
describe("Form", () => {
  it("should save correct data on submit", async () => {
    const mockSave = jest.fn();
    const { user } = setup(<Form saveData={mockSave} />);
 
    await user.type(screen.getByRole("textbox", { name: "Name" }), "Test");
    await user.click(screen.getByRole("button", { name: "Sign up" }));
 
    expect(mockSave).toHaveBeenLastCalledWith({ ...defaultData, name: "Test" });
  });
});
```

## Referências

- [Best Practices for Writing Tests with React Testing Library](https://claritydev.net/blog/improving-react-testing-library-tests)

