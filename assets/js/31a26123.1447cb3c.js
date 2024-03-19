"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[5447],{5895:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>l,contentTitle:()=>t,default:()=>c,frontMatter:()=>n,metadata:()=>d,toc:()=>m});var r=a(5893),s=a(1151);const n={},t="Django-Rest-Framework e a API de models do Django",d={id:"django/rest-framework-and-django-models",title:"Django-Rest-Framework e a API de models do Django",description:'O django-rest-framework possui serializers que se integram muito bem com os models do django, mas \xe9 importante ressaltar que o objetivo do rest-framework n\xe3o \xe9 funcionar (e suportar) do mesmo modo a api de models do django e, portanto, algumas funcionalidades "padr\xe3o" podem se perder. Um exemplo disso, relatado em Issue #7159 no GitHub \xe9 o m\xe9todo clean() dentro do model.',source:"@site/docs/django/rest-framework-and-django-models.md",sourceDirName:"django",slug:"/django/rest-framework-and-django-models",permalink:"/docs/django/rest-framework-and-django-models",draft:!1,unlisted:!1,editUrl:"https://github.com/EduardoJM/EduardoJM.github.io/tree/main/docs/django/rest-framework-and-django-models.md",tags:[],version:"current",lastUpdatedBy:"Eduardo Oliveira",lastUpdatedAt:1710872836,formattedLastUpdatedAt:"19 de mar. de 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Django",permalink:"/docs/category/django"},next:{title:"Front-End",permalink:"/docs/category/front-end"}},l={},m=[];function i(e){const o={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h1,{id:"django-rest-framework-e-a-api-de-models-do-django",children:"Django-Rest-Framework e a API de models do Django"}),"\n",(0,r.jsxs)(o.p,{children:['O django-rest-framework possui serializers que se integram muito bem com os models do django, mas \xe9 importante ressaltar que o objetivo do rest-framework n\xe3o \xe9 funcionar (e suportar) do mesmo modo a api de models do django e, portanto, algumas funcionalidades "padr\xe3o" podem se perder. Um exemplo disso, relatado em ',(0,r.jsx)(o.a,{href:"https://github.com/encode/django-rest-framework/issues/7159",children:"Issue #7159 no GitHub"})," \xe9 o m\xe9todo ",(0,r.jsx)(o.code,{children:"clean()"})," dentro do model."]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-python",children:'from django.core.exceptions import ValidationError\nfrom django.db import models\nfrom rest_framework import serializers\nfrom django import forms\nfrom django.test import TestCase\n\nclass Sample(models.Model):\n    title = models.CharField(max_length=50)\n\n    def clean(self):\n        raise ValidationError(\'\')\n\nclass SampleSerializer(serializers.ModelSerializer):\n    class Meta:\n        model = Sample\n        fields = \'__all__\'\n\nclass SampleForm(forms.ModelForm):\n    class Meta:\n        model = Sample\n        fields = "__all__"\n\nclass SampleTests(TestCase):\n    def test_form(self):\n        form = SampleForm({"title": "test"})\n        self.assertFalse(form.is_valid())\n\n    def test_serializer(self):\n        serializer = SampleSerializer(data={"title": "test"})\n        self.assertFalse(serializer.is_valid())\n'})})]})}function c(e={}){const{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},1151:(e,o,a)=>{a.d(o,{Z:()=>d,a:()=>t});var r=a(7294);const s={},n=r.createContext(s);function t(e){const o=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(n.Provider,{value:o},e.children)}}}]);