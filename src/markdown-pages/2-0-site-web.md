---
index: 2.0
slug: "/site-web"
date: "2021-10-01"
title: "Site Web"
next: "/structure-et-syntaxe"

---

## Site web et page web

Un site web (dans sa forme la plus élémentaire) est constitué d’un ensemble de fichiers, déposés sur un serveur web qui héberge ce site. tous les sites web utilisent le langage *HTML*. le moyen le plus simple pour créer des sites web est donc de créer directement des fichiers HTML et de les déposer sur le serveur web. Ces sites sont *statiques* (car le seul moyen de les éditer et de le faire à la main). il existe d’autre type de sites web — *dynamiques* — qui utilisent des modèles de page (template) généralement avec des technologies PHP et des bases de données Mysql — ou encore node, python, go etc. Ces langages serveurs (PHP, Mysql, etc) ne seront pas abordé dans ce cours.

## Fonctionnement du HTML

HTML est l’acronyme de **HyperText Markup Language** (language hypertexte en balises.)

un fichier HTML est un fichier texte, constitué en **balises** (*markup* en anglais, ou *tag*.)

```html
<div>un exemple de texte très simple.</div>
```

Ce fichier, est interprété par un **navigateur (browser)** tel que Mozilla Firefox, Goolge Chrome, Apple Safari ou Microsoft Edge.

Cette interprétation fait disparaitre les balises HTML, elle les traduit visuellement. le HTML est un langage **sémantique**, et sert donc à décrire des documents qui font *sens*.

Par *sens*, on peut entendre *contenu* de la page. On le distingue de la *forme*. Sur le web, cette distinction contenu/forme passe par le couple de langage HTML/CSS. les CSS permette de gérer la forme, la mise en page.

```html
<div>
			un exemple de texte très simple,
  		<strong>mais important</strong>.
</div>
```

Les balises qui compose le document HTML prend la forme d'une **arborescence**. Les balises html viennent s'encapsuler l'une *dans l'autre*. Dans l'exemple ci-dessus, la balise `<div></div>` encapsule la phrase, ainsi qu'une autre balise `<strong></strong>`

## CSS

CSS est l’acronyme de **Cascading Styles Sheet** (feuille de Style en cascade) comme le HTML, le CSS est un fichier texte.

```css
.titre{
	color:white;
	font-size:10px;
}
```

Ce langage permet de gérer le positionnement, les couleurs, les typographies, les décorations et tout ce qui concerne la **mise en page**. Les feuilles de style sont généralement placées dans des fichiers `.css` à côté de la page `.html` même si on peut intégrer des styles CSS directement dans le code HTML. Cette séparation permet de facilement changer les contenus ou la mise en page de manière autonome, car **le contenu et le contenant sont séparés**. Cela permet également de partager un même style entre plusieurs documents d'un même site. 