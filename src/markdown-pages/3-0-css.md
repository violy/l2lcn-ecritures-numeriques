---
index: 3.0
slug: "/css"
date: "2021-10-15"
title: "CSS"
next: "/selecteurs-css"
---

## CSS et *feuilles de style*

**CSS** est l'acronyme pour **Cascading Style Sheets** — en français *Feuilles de Style en Cascade*. 

Comme le HTML, c'est un langage *standard* du Web, définie par le W3C. Il s'est réellement imposé comme un standard 10 ans après le HTML, dans les années 2000. 

Les langages web HTML et CSS permettent de mettre en page des documents. On l’a déjà dit, le HTML permet de gérer l’aspect **sémantique** (le sens) et le CSS de gérer la **mise en forme**, éssentielement visuelle, graphique. On dit donc qu’il y a une séparation entre le contenu et le style, qui s’opère dans la pratique dans deux types de fichiers, le code HTML et le code CSS.

Mais comme le style s’applique toujours à un contenu, ces deux langages ont des articulations — **des sélecteurs** — qui permettent d’appliquer **un style** à un **élement HTML**

## l’articulation HTML/CSS par l’exemple

Rien ne vaut un exemple pour rapidement comprendre la liaison entre HTML et CSS

```html
<div>
	<h3>Extrait du Chapitre V.</h3>
	<p>Le soir précédent, j’avais bu en grande abondance d’un vin blanc appelé <em>glimigrim</em>, qui vient d’une province de Blefuscu, et qui est très-diurétique. Je me mis donc à uriner en si grande abondance, et j’appliquai l’eau si à propos et si adroitement aux endroits convenables, qu’en trois minutes le feu fut tout-à-fait éteint, et que le reste de ce superbe édifice, qui avait coûté des sommes immenses, fut préservé d’un fatal embrasement.</p>
	<p>J’ignorais si l’empereur me saurait gré du service que je venais de lui rendre ; car, par les lois fondamentales de l’empire, c’était un crime capital et digne de mort de faire de l’eau dans l’étendue du palais impérial ; mais je fus rassuré lorsque j’appris que sa majesté avait donné ordre au grand juge de m’expédier des lettres de grâce ; mais on m’apprit que l’impératrice, concevant la plus grande horreur de ce que je venais de faire, s’était transportée au côté le plus éloigné de la cour, et qu’elle était déterminée à ne jamais loger dans des appartements que j’avais osé souiller par une action malhonnête et impudente.</p>
</div>
```

```css
div{
  border: dotted red 5px;
}
h3{
	color: #ff3300;
	text-decoration: underline;
}
p{
	line-height: 30px;
}
em{
  background-color: black;
  color: #ffffff;
  display: inline-block;
}
```

>  Nous pouvons essayer de copier-coller ces deux extraits dans un codepen.

Dans l’exemple ci-dessus, c’est le selecteur CSS le plus simple qui est mis en place, celui du **selecteur d’élement**. Nous reviendrons sur les selecteurs dans le chapitre suivant. 

Dans la partie du code CSS, on voit 4 selecteurs, `div`, `h3`, `p` et `e`m qui ciblent les balises (ou élements) éponymes en HTML, les balises `<div></div>` , `<h3></h3>` ,`<h3></h3>` et `<em></em>`. Ces deux selecteurs CSS possèdent ensuites des **propriétés** CSS qui ont des **valeurs** — toutes celles-ci sont décritent entre les **accolades** `{` `}` —, qui permettent de modifier l’aspect visuel. 

Ici c’est `color`, `text-decoration` et `line-height` qui permettent respectivement de modifier *la couleur, le soulignement, et la hauteur de ligne*.

### Commentaires CSS et lisibilité du code

Comme en HTML, il est possible d'écrire du commentaire pour annoter son fichier `.css` ; on utilise la syntaxe suivante `/*` —`*/`

Par exemple

```css
div{
    /* color: red; */
    color: blue;
  
    /* 
    background: #f66;
    background: #f66;
    */
}

/* 
strong{display:none;}
*/
```

Comme pour le HTML, on utilisera les indentations (touche `TAB`) pour formater son code et conserver de la clarté. 

## Appliquer un style

Il y a **plusieurs manières** d'appliquer des styles à des élements du document HTML :

- inline style
- balise `style`
- balise `link`, avec une URL relative, ou absolue. 

### inline style

Le style **en-ligne** (***inline style*** en anglais) est la manière la plus forte — mais pas la plus astucieuse — d'appliquer directement un style à une balise : utiliser l'attribut HTML `style`. cela donne, par exemple : 

```html
<div style="color: green; font-size: 30px;"><span style="font-size: 60px;">J</span>e n’eus qu’un seul malheur, c’est que les rats du vaisseau emportèrent une de mes brebis. <span style="font-size: 40px;">J</span>e débarquai le reste de mon bétail en santé, et le mis paître dans un parterre de jeu de boules à Greenwich.</div>
```

Ces instructions **seront prioritaires** sur toutes les autres (à l'exception de l'usage d'instructions marquées `!important` — mais ne tentons pas le diable !)

Le grand défaut de cette méthode, c'est qu'on est obligé de l'appliquer à toutes les balises…

### balise `style`

La balise `<style></style>` permet d'embarquer et d'écrire le style directement dans le document HTML. Cette solution permet de ne jamais perdre le lien entre le HTML et son style

```html
<!-- le texte -->
<p>Avant que je parle de ma sortie de <strong>l’empire de Lilliput</strong>, il sera peut-être à propos d’instruire le lecteur d’une intrigue secrète qui se forma contre moi.</p>

<!-- le style -->
<style>
  body{
    font-family: "Helvetica", "Helvetica Neue", sans-serif;
    background: #000;
    width: 100%;
    position:relative;
    padding: 50px;
  }
  p{
    background: #f6e9d6;
    border: solid 10px #fff;
    color: #665599;
    padding: 1em;
    border-radius: 4px;
    width:500px;
    max-width:100%;
  }
  strong{
    background: #ffff;
    font-weight: normal;
    color: blue;
    border: solid 2px blue;
    font-size: 1.5em;
  }
</style>
```

### lien vers un fichier de style

C'est la méthode que je recommande, car elle permet d'**isoler le HTML du style**, et surtout, elle permet de **mutualiser une feuille de style**, donc un ensemble de règles entre plusieurs documents et pages Web. 

Je l'avais abordé dans le chapitre des en-têtes HTML, car c'est dans le `<head></head>` du document HTML qu'on insère traditionnellement la relation à un (ou plusieurs) fichier(s) de styles — dont l'extension de fichier est naturellement `.css`.

```html
<link rel='stylesheet' href='dossier-styles/mes-regles.css' />
```

**Attention**, il faut évidement que le fichier existe et que le chemin (*path* en anglais) spécifié soit le bon ; une bonne méthode est de créer un dossier pour ranger toutes les feuilles de style, ainsi que d'autres *assets* associés, comme par exemple des fichiers de police de caractère ou des images. 

### lien vers une feuille de style distante, via son URL

Il est également possible d'utiliser des **librairies externes préfabriquées**, des boites à outils (*Frameworks*) pour avancer vite. Citons quelques une des plus connues : 

```html
<!-- Bootstrap --> 
<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.2/css/bootstrap.min.css' />

<!-- Foundation -->
<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/foundation/6.5.0/css/foundation.min.css' />

<!-- Tailwind -->
<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.17/tailwind.min.css' />

<!-- Animate.css -->
<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' />
```

- Foundation : https://get.foundation/
- Bootstrap : https://getbootstrap.com/
- Tailwind : https://tailwindcss.com/
- Animate.css : https://animate.style/

On utilise ici **Internet** pour accéder à ces styles (les liaisons de l'attribut `href` commencent par `https://...`) ce qui *implique qu'on doit bien être en ligne* pendant qu'on travaille. 
