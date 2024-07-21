# QuerySet

Um `QuerySet` representa uma coleção de objetos do banco de dados. Em comparação com **SQL**, um `QuerySet` equivale a um `SELECT`. Quando utilizamos o método `filter()` de um queryset, adicionamos cláusulas limitantes como `WHERE` ou `LIMIT`.

Ao usar o QuerySet, fazer diversas operações tipo `filter()` não irá acessar o banco de dados. Por exemplo:

```python
users = User.objects.filter(email__icontains='...').filter(is_active=True).filter(...)
```

Mesmo adicionando vários filtros, o `QuerySet` não será computado e, portanto, não irá consultar o banco de dados. Para computar um `QuerySet`, é necessário utilizar algum dos métodos: `.get()`, `.first()`, etc. conforme [QuerySet API reference](https://docs.djangoproject.com/en/5.0/ref/models/querysets/#methods-that-do-not-return-querysets) ou usando algum dos métodos para forçar que o `QuerySet` seja computado: [QuerySet API reference](https://docs.djangoproject.com/en/5.0/ref/models/querysets/#when-querysets-are-evaluated).

---

Conhecer esses aspectos do `QuerySet` é importante para evitar escrever códigos problemáticos como, por exemplo:

```python
ids = [...]
queryset = User.objects.filter(is_active=True)
for id in ids:
    user = queryset.get(id=id)
```

O uso do `QuerySet` como no exemplo acima irá executar uma query no banco de dados para cada ID, enquanto que alterando a lógica para que o método `.get()` não seja chamado, apenas uma consulta ao banco de dados será realizada:

```python
ids = [...]
queryset = User.objects.filter(is_active=True, id__in=ids)
for user in queryset:
    print(user)
```
