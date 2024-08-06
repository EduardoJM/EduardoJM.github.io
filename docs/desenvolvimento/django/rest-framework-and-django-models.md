# Django-Rest-Framework e a API de models do Django

O django-rest-framework possui serializers que se integram muito bem com os models do django, mas é importante ressaltar que o objetivo do rest-framework não é funcionar (e suportar) do mesmo modo a api de models do django e, portanto, algumas funcionalidades "padrão" podem se perder. Um exemplo disso, relatado em [Issue #7159 no GitHub](https://github.com/encode/django-rest-framework/issues/7159) é o método `clean()` dentro do model.

```python
from django.core.exceptions import ValidationError
from django.db import models
from rest_framework import serializers
from django import forms
from django.test import TestCase

class Sample(models.Model):
    title = models.CharField(max_length=50)

    def clean(self):
        raise ValidationError('')

class SampleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sample
        fields = '__all__'

class SampleForm(forms.ModelForm):
    class Meta:
        model = Sample
        fields = "__all__"

class SampleTests(TestCase):
    def test_form(self):
        form = SampleForm({"title": "test"})
        self.assertFalse(form.is_valid())

    def test_serializer(self):
        serializer = SampleSerializer(data={"title": "test"})
        self.assertFalse(serializer.is_valid())
```
