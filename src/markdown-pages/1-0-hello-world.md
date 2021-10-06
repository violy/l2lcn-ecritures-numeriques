---
index: 1.0
slug: "/hello-world"
date: "2021-10-01"
title: "Hello World"
next: "/html"
---

## Faire un `Hello World` avec codepen

C'est une tradition dans l'apprentissage informatique, commencer par écrire un petit morceau de code, faire un « Hello World ».

Commençons par ouvrir le site *codepen*. → https://codepen.io/

Le site *codepen* est un **éditeur** de type « bac à sable » dans le navigateur web. Il est en anglais uniquement, mais suffisament simple pour tous. Il vous permettra de retrouver vos enregistrements depuis n'importe quel ordinateur et vous pouvez échanger vos *pen* via leurs **URL**. 

Il nous permet de commencer à coder sans même avoir besoin d'installer un éditeur.

Cliquer sur le bouton Sign Up en haut à droite pour créer un compte. utilisez votre adresse e-mail universitaire. 

Après avoir créé votre compte, vous serez automatiquement redirigé vers la visite guidée, le Hello World de codepen → https://codepen.io/pen/tour/welcome/start

On découvre alors les 3 onglets de la partie supérieure de l'écran : 

- HTML
- CSS
- JS

En dessous, se trouve l'aperçu en direct 

L'aperçu embarqué de codepen me permettra d'intégrer au support de cours des extraits de code. 

<iframe height="300" style="width: 680px; max-width: 100%;" scrolling="no" title="Hello World" src="https://codepen.io/l2lcn/embed/KKqJKyv?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/l2lcn/pen/KKqJKyv">
  Hello World</a> by L2 LCN Écritures numériques (<a href="https://codepen.io/l2lcn">@l2lcn</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Les trois languages du Web `HTML/CSS/JS`

Dans l'onglet de code `HTML` on peut y voir : 

```html
<h1>👋 Hello World!</h1>
```

Dans l'onglet de code `CSS` on peut y voir :

```css
body {
font-family: system-ui;
background: #f06d06;
color: white;
text-align: center;
}
```

Dans l'onglet de code `JS` on peut y voir : 

```js
document.getElementsByTagName("h1")[0].style.fontSize = "6vw";
```

Cet ordre `HTML/CSS/JS` permet de comprendre la séquence dans laquelle le navigateur
va lire et interpreter ces codes. 

- D'abord le HTML, qui décrit le contenu du document.
- Ensuite le CSS, qui met en forme le contenu. 
- Enfin le JS (Javascript), qui permet de (re)programmer l'ensemble.

