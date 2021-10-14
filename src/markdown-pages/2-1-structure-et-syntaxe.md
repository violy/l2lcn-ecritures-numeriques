---
index: 2.1
slug: "/structure-et-syntaxe"
date: "2021-10-07"
title: "Structure et syntaxe du HTML"
next: "/html-atom"
---

## Aux origines du web

<iframe width="560" height="315" src="https://www.youtube.com/embed/k0gvAyCubGQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Un petit rappel d’où vient le web, pour comprendre les objectifs historiques du langage HTML.

## Les espaces, tabulations et retours à la ligne

Une chose importante, déjà : **Les espaces**.

le HTML est insensible au *espaces multiples, tabulations et retours à la ligne*. 
Ainsi, le texte HTML suivant :

```html
		Longtemps,
	je  me        suis

	couché
de        bonne         heure.
```

s’affichera de cette manière dans le navigateur

```html
Longtemps, je me suis couché de bonne heure.
```

Profitant de cela, on se servira des espaces, tabulations et des retours à la ligne, pour conserver la lisibilité du code, géré ce que l'on appelle l'indentation. 

Aussi, pour assurer des **retours à la ligne**, on utilisera la balise orpheline `<br/>`. 

Enfin pour forcer une espace, on utilisera le **code html** ` &nbsp;` (**n**o **b**reak **sp**ace) de **l'espace insécable**. 

Attention à ne pas trop abuser de ces techniques d'espacement par `<br/>` ou  ` &nbsp;` — il faudra apprendre le CSS pour appliquer des marges, et donner des dimensions aux **blocs**. 

## Les balises (tags)

En HTML, pour décrire le contenu, on utilise des **balises** (*tags* en anglais).

Chacune de ces balises ont un rôle particulier, qu’il faudra respecter.

Une balise HTML commence par le caractère `<` et se termine par un autre caractère, le `>`. 

## Les deux types de balises

Il existe deux types de balise, les balises **en paires** et les balises **orphelines**.

Les **balises paires** englobe du texte et peuvent contenir d’autres balises.

On écrit une balise ouvrante `<balise>` et une balise fermante `</balise>`

```html
<p>
	un exemple de paragraphe de texte
</p>
```

Les **balises orphelines** servent à insérer un élément à un endroit précis, comme une image ou un retour à la ligne `<balise />`.

```html
<br /> ceci est un retour à la ligne
```

## Les attributs (attributes)

La plupart des balises possède des *propriétés*, que l’on nomme **attribut**. on note les attributs d’une balise de cette manière `<balise attribut="valeur"></balise>`.

On utilise donc, après le nom de l'attribut, des guillemets simples `'` ou doubles `"` pour encadrer la **valeur** de celui-ci. 

Pour les balises orphelines, la syntaxe est la même `<balise attribut="valeur" />`.

Les balises peuvent avoir plusieurs attributs, certains sont obligatoires, d’autres sont facultatifs, on les notera de cette manière `<div id="exemple" class="classe"></div>` 

#### Guillemets simples et doubles

Les guillemets simples et doubles peuvent être interchangés pour les attributs. 

```html
<div id="exemple" class="classe"></div>
```

est équivalant à 

```html
<div id='exemple' class='classe'></div>
```

#### Attributs sans valeur

Certains attributs n'ont pas de valeur, par exemple pour cette case cochée : 

```html
<input type="checkbox" checked />
```

```html
<input type="radio" name="choix" />
<input type="radio" name="choix" />

<input type="checkbox" name="case" />
<input type="text" name="texte" placeholder="🤷" value="👋" />
```

<input type="radio" name="choix" />
<br/><input type="radio" name="choix" />
<br/><input type="checkbox" name="case" />
<br/><input type="text" name="texte" placeholder="🤷" value="👋" />

## Le commentaire

Comme dans beaucoup de langage informatique, le HTML permet d’inclure des commentaires dans le code, qui seront invisible à l’interprétation. Ces commentaires permettent d’insérer de remarques cachées, ou d’isoler du code HTML temporairement sans le supprimer. la notation du commentaire est aussi une paire ovrante `<!--` et fermante `-->`. Tous le texte situé entre ces deux balise sera ignorée.

```html
du texte visible
<!-- un commentaire invisible -->
un autre texte visible <!-- et un autre commentaire
avec <span>du code ignoré</span>
-->
```

## Des balises imbriquées

le langage HTML repose sur une imbrication de balise (hérité du XML). On l’a vu la vu précédement, les balise paires permettent d’inclure du texte. Elle permettent en outre d’inclure des balises. on parlera de balise **enfant/parent** et d’**arborescence** pour décrire cela

```xml
<racine>
	<parent>
		<enfant></enfant>
		<enfant>
			<petit />
			<petit />
			<petit />
		</enfant>
	</parent>
	<autre>
		<machin>
			<bidule />
		</machin>
		<chose />
		<truc />
	</autre>
</racine>
```

avec des vraies balises HTML et du texte, ça ressemble à ça

```html
<!doctype HTML>
<html>
	<head>
		<title>le titre</title>
	</head>
	<body>
		<div>
			<h1>un exemple réel</h1>
			<p>
				de paragraphe avec
				<b>du texte gras</b>
				et de
				<i>l’italique</i>
			</p>
		</div>
	</body>
</html>
```

## Structure du document HTML

Le HTML possède une structure minimum, un squelette obligatoire au bon fonctionnement de la page.

On va essayer de la décrire rapidement.

### `<!doctype HTML>`

Cette balise est spéciale, elle intervient toujours en début de document, elle est orpheline. Elle décrit le type de document HTML. si vous l’oubliez, la page sera chargé, mais le navigateur ne connaitra pas la norme HTML que vous utilisé (HTML5, XHTML, HTML4…) et utilisera une valeur par default. Le doctype pour HTML5 est assez simple c’est `<!doctype html>`

### `<html></html>`

C’est la balise racine (parente de toutes) les autres. elle contiendra toujours et seulement deux autres, `<head></head>` (l’entête de document) et `<body></body>` (le corps de document).

Il est important de lui préciser l'attribut `lang` avec le [code ISO de la langue](https://fr.wikipedia.org/wiki/Liste_des_codes_ISO_639-1) utilisé sur le document, par exemple `fr`  pour le français et `en` pour l'anglais.

```html
<!doctype HTML>
<html lang="fr">
  <head><!-- en-tête, méta-données --></head>
	<body><!-- corps du document --></body>
</html>
```

### `<head></head>`

C’est la balise d’entête, qui contient les informations générales sur la page comme le titre, l’encodage, les meta. On y déclarera aussi des liaisons vers les feuilles de style CSS et les script JavaScript.

### `<body></body>`

C’est la balise de corps, qui concerne donc la partie principale — visible — du contenu.

## Exemple de structure minimum

Étant donné qu’un fichier HTML doit comporter certaines balises de manière obligatoire (c’est le cas pour le `doctype`, `html`, `head`, `body`, `title`) on peut rapidement imaginer le code HTML minimum pour commencer, le voici :

```html
<!doctype HTML>
<html>
	<head>
        <meta charset="utf-8" />
		<title>document sans titre</title>
	</head>
	<body>
	</body>
</html>
```

Dans cet exemple, on voit apparaitre des balises que l'on va décrouvrir au chapitre suivant. Ces balises sont obligatoires, car elle concerne le **jeu de caractères** (*charset* en anglais). Nous utiliserons toujours le jeu de caractère `utf-8`, le plus universel.