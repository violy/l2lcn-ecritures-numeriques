---
index: 3.4
slug: "/typographie"
date: "2021-11-12"
title: "Typographie"
next: "/"
---

# Web Fonts

Comme vu dans le chapitre sur les propriétés textes, l'affectation d'une police d'écriture à un texte se fait par la propriétée CSS `font-family` et certaines polices sont universelles, Arial par exemple : 

```css
html{
  font-family: 'Arial', sans-serif;
}
```

NB : on observe ici une notation séparée par des virgules, c'est la police en première position qui est prioritaire, le système essaie ensuite en fonction des disponibilités de la police. 

## @font-face

Le nombre limité de police système oriente souvent à charger une police tierse. Pour charger une police personnalisée, on utilise le bloc CSS `@font-face` de la manière suivante : 

```css
@font-face {
  font-family: "myFont";
  src: url("myFont.ttf");
}
```

on pourra ainsi affecter la police de la manière suivante, en utilisant `myFont` comme nom. 

```css
html{
  font-family: "myFont", "Bitstream Vera Serif", serif;
}
```

Dans le premier block `@font-face` la valeur `url("myFont.ttf")` de la propriété `src` fait référence à une URL, l'adresse du fichier de police. 

## Types de polices : TTF, EOT, WOFF, WOFF2, SVG

L'histoire de la typographie et de son intégration sur le web a longtemps été complexe et une bataille entre les leaders de l'industrie : Adobe, Microsoft, Apple, Google et Mozilla.

Cela a conduit à produire plusieurs formats de fichier pour les polices, qui seront plus ou moins compatibles suivant les navigateurs : 

| Font format | Microsoft Edge  | Google Chrome   | Mozilla Firefox | Apple Safari    | Opera           |
| :---------- | --------------- | --------------- | --------------- | --------------- | --------------- |
| TTF/OTF     | 9.0*            | 4.0             | 3.5             | 3.1             | 10.0            |
| WOFF        | 9.0             | 5.0             | 3.6             | 5.1             | 11.1            |
| WOFF2       | 14.0            | 36.0            | 39.0            | 10.0            | 26.0            |
| SVG         | *Not supported* | *Not supported* | *Not supported* | 3.2             | *Not supported* |
| EOT         | 6.0             | *Not supported* | *Not supported* | *Not supported* | *Not supported* |

Les formats WOFF et WOFF2 — **Web Open Font Format** — sont aujourd'hui les plus supportés et les plus standards. 

### Polices et droit d'utilisation. 

La création typographique est **soumise au droit d'auteur/d'utilisation**. Il faudra donc vérifier que la license vous permettent l'usage d'une police. Certaines sont gratuites pour tout usage, d'autres sont des licences commerciales et/ou sont payantes. 

### Fonderies et répertoires de polices libres

- [Font Squirrel](https://www.fontsquirrel.com/)
- [Google Font](https://fonts.google.com/)
- [Velvetyne](http://velvetyne.fr/) :fr:
- [Atelier National de Recherche Typographique](https://anrt-nancy.fr/fr/fonts/) :fr:
- [Open Foundry](https://open-foundry.com/)

### Charger une Google Font

Google permet de charger ses polices via des CDN — c'est à dire que le fichier est hébergé directement par Google, vous n'avez pas besoin d'en faire une copie — cela accélère sont chargement, car ses serveurs sont très rapides. 

Google indique 2 méthodes et vous donne des copier-coller à faire. 

Voici des exemples pour la police `Roboto` Regular `400` et Bold `700`. 

#### méthode `<link>`

Avec du HTML

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
```

#### méthode `@import`

Avec du CSS

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
```

Puis, toujours en CSS, la propriété `font-family` avec la police nommée *Roboto*. 

```css
font-family: 'Roboto', sans-serif;
```





