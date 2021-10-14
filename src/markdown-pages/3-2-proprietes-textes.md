---
index: 3.2
slug: "/selecteurs-css"
date: "2021-10-15"
title: "Mettre en forme le texte"
next: "/"

---

Le web est par nature — on l’a vu — **textuel, hypertextuel**. Il est donc naturel de se pencher sur la mise en place des styles sur le texte.

## Les caractères

Voici une liste des propriétés CSS modifiant les caractères en eux-même. On verra ensuite comment modifier les espaces typographiques.

### `color` : couleur

```css
color: #f99900;
```

### `font-size` : taille

```css
font-size: 12px;
```

Il représente la hauteur d’un `em` — ou cadratin, la hauteur de M.

### `font-family` : famille

```css
font-family: "Helvetica", "Arial", sans-serif;
```

On peut mettre plusieurs nom de polices les un après les autres. Cela sert à utiliser des polices de substitution, si les polices de rang un ne sont pas disponibles. 

Les **polices web sécurisées** — cette à dire installées sur une majorité de système d'exploitation : Windows, Android, iOS, macOs, Linux — sont les suivantes : 

- Arial (sans-serif)
- Verdana (sans-serif)
- Helvetica (sans-serif)
- Tahoma (sans-serif)
- Trebuchet MS (sans-serif)
- Times New Roman (serif)
- Georgia (serif)
- Garamond (serif)
- Courier New (monospace)
- Brush Script MT (cursive)

Vous pouvez les voir sur le site [w3schools](https://www.w3schools.com/cssref/css_websafe_fonts.asp). 

Nous verront plus tard comment installer une **[Google Fonts](https://fonts.google.com/)** sur une page web, pour avoir un choix plus vaste, mais gratuit, de police de caractères.

### `font-weight` : graisse

### `font-style` : italique

### `font-variant` : petites capitales

### `font-stretch` : étirement

```css
font-weight: bold;
font-style: italic;
font-variant: small-caps;
font-stretch: condensed;
```

On peut utiliser plusieurs type de graisse, mais celles-ci doivent être disponible dans la police utilisée. À défaut, un **faux gras** peut-être appliqué, ce qui est mauvais.

```css
font-weight: bold;
font-weight: 100;
font-weight: 900;
```

Les graisses sont soit exprimées en mot, comme `strong` ou `normal`, soit en valeur numérique. Les seules valeurs numériques acceptées sont `100, 200, 300, 400, 500, 600, 700, 800, 900`. `100` correspond à *thin* et *black*, `normal` équivalent `500`. On peut aussi utiliser des valeurs de graisse relative `stronger` et `lighter`.

`font-style` gère principalement l’italique, `font-stretch` le type d’étirement et `font-variant` les petites capitales. Comme pour la graisse, Elle doit être disponible dans la police utilisée. On se sert rarement de `font-stretch` car rarement disponible.

### `text-transform` : capitale ou bas-de-casse

```css
text-transform: uppercase; /* FORCE LES CAPITALES */
text-transform: lowercase; /* force les bas-de-casse */
text-transform: capitalize; /* Force Les Capitales En Début De Mot */
```

Ces styles forceront l’éditeur à respecter la charte graphique.

### `text-shadow` : ombre portée

```css
text-shadow: blue 10px 10px 20px;
```

Sert à mettre une ombre portée, d’une certaine **couleur**, à un certain décallage **en x** et **en y**, avec un certain **flou**. Toutes ces options sont séparées par des espaces.

Cette propriétée — *associée à texte transparent* — permet un **flou** sur une typographie.

```css
text-shadow: black 0 0 5px;
color: transparent;
```

![text blur](images/text-shadow-blur.png)

### `text-decoration` : souligné

```css
text-decoration:underline;
```

Souligne le texte. On peut aussi le barré avec `line-through` ou le sur-ligné avec `overline`. Par défaut, c’est la couleur du texte qui est utilisée.