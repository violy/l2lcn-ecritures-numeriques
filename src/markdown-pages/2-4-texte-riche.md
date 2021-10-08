---
index: 2.4
slug: "/texte-riche"
date: "2021-10-07"
title: "Texte riche"
next: "/texte-riche"
---

## Balise Hyperlien

C’est la balise la plus simple et la plus importante de toute : la balise `a`. L’hypertexte est la base même de l'interaction sur le web. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/hUHsmnWmI3k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Elle tient son nom de l'anglais **anchor** — l'ancre **⚓︎** ; encore un symbole de marine.

```html
Prenons la direction <a href="lilliput.html">L’île de lilliput</a>
```



## Web historique et Web sémantique

Le HTML a existé avant le CSS, et a tout un ensemble de balise dédié à la mise en forme du texte. Avec le temps, il s'est normalisé et les balises historiques ont évoluées vers ce que l'on appelle le Web sémantique : la balise a un sens et non une forme.

## Balises de texte riche

#### b / strong

l'exemple le plus simple à comprendre est l'évolution de la balise `<b></b>` qui s'est transformer en `<strong></strong>`. Le **B** signifie **gras** (***bold*** en anglais*) — et correspond à une mise en forme plus grasse de la typographie. Le mot **strong** est lui plus **symbolique** — et ne correspond pas explicitement au gras. 

#### i / em

Le même phénomène a eu lieu avec la balise `<i></i>` avec le **I** de **Italique** qui s'est transformé en `<em></em>` d'**emphase** (***emphasis*** en anglais.)

#### u / mark

 La balise `<u></u>` quand à elle, **u** pour le **soulignement** (***underline*** en anglais) a un équivalent sémantique proche `<mark></mark>` pour **marquer le texte**, mais le style par défaut n'est pas le même :  souligné pour <u>l'un</u>, <mark>surligné</mark> pour l'autre. 

```html
texte en <i>italique</i>
et en <em>emphase</em>
<br/>

et aussi <b>gras</b>
et <strong>fort</strong>

<br/>
le <u>souligné</u> n'a pas d'équivalent sémantique. 

<em><strong>on <u>peut</u> additionner <mark>les balises</mark>.</strong></em> 

```

## Listes

Plusieurs type de liste existent en HTML et permettent de décrire différents objets. 

Les lignes des listes sont représentées par la balise `<li></li>`.

#### Liste à puce `<ul>`

C'est la plus commune de toute. Elle représente une liste d'éléments sans ordre particulier. Il est souvent représenté par une liste à puces. 

```html
<ul>
  <li>Description de Mildendo, capitale de Lilliput, et du palais de l’empereur.</li>
  <li>Conversation entre l’auteur et un secrétaire d’État, touchant les affaires de l’empire.</li>
  <li>Offres que l’auteur fait de servir l’empereur dans ses guerres.</li>
</ul>
```

#### Liste ordonnée `<ol>`

C'est la plus commune de toute. Les éléments d'une telle liste sont généralement affichés avec un indicateur ordinal pouvant prendre la forme de nombres, de lettres, de chiffres romains ou de points. La mise en forme de la numérotation n'est pas utilisée dans la description HTML mais dans la feuille de style CSS associée grâce à la propriété `list-style-type`.

```html
<ol>
  <li>L’auteur, par un stratagème très-extraordinaire, s’oppose à une descente des ennemis.</li>
  <li>L’empereur lui confère un grand titre d’honneur.</li>
  <li>Des ambassadeurs arrivent de la part de l’empereur de Blefuscu pour demander la paix.</li>
  <li>Le feu prend à l’appartement de l’impératrice. — L’auteur contribue beaucoup à éteindre l’incendie.</li>
</ol>
```

## Balise de hiérarchie du texte

### Balise paragraphe `<p>`

La balise de paragraphe est l'une des plus utilisée. Elle permet de définir un paragraphe.

Voici un exemple avec les 3 premiers paragraphes du [premier livre, du Voyage à Lilliput](https://fr.wikisource.org/wiki/Les_Voyages_de_Gulliver/Voyage_à_Lilliput/I). 

```html
<p>Mon père, dont le bien, situé dans la province de Nottingham, était médiocre, avait cinq fils : j’étais le troisième, et il m’envoya au collège d’Emmanuel, à Cambridge, à l’âge de quatorze ans. J’y demeurai trois années, que j’employai utilement. Mais la dépense de mon entretien au collège était trop grande, on me mit en apprentissage sous M. Jacques Bates, fameux chirurgien à Londres, chez qui je demeurai quatre ans. Mon père m’envoyant de temps en temps quelques petites sommes d’argent, je les employai à apprendre le pilotage et les autres parties des mathématiques les plus nécessaires à ceux qui forment le dessein de voyager sur mer, ce que je prévoyais être ma destinée. Ayant quitté M. Bates, je retournai chez mon père ; et, tant de lui que de mon oncle Jean et de quelques autres parents, je tirai la somme de quarante livres sterling par an pour me soutenir à Leyde. Je m’y rendis et m’y appliquai à l’étude de la médecine pendant deux ans et sept mois, persuadé qu’elle me serait un jour très utile dans mes voyages.
</p>

<p>Bientôt après mon retour de Leyde, j’eus, à la recommandation de mon bon maître M. Bates, l’emploi de chirurgien sur <i>l’Hirondelle</i>, où je restai trois ans et demi, sous le capitaine Abraham Panell, commandant. Je fis pendant ce temps-là des voyages au Levant et ailleurs. À mon retour, je résolus de m’établir à Londres. M. Bates m’encouragea à prendre ce parti, et me recommanda à ses malades. Je louai un appartement dans un petit hôtel situé dans le quartier appelé Old-Jewry&nbsp;; et bientôt après j’épousai mademoiselle Marie Burton, seconde fille de M. Édouard Burton, marchand dans la rue de Newgate, laquelle m’apporta quatre cents livres sterling en mariage.
</p>

<p>Mais mon cher maître, M. Bates, étant mort deux ans après, et n’ayant plus de protecteur, ma pratique commença à diminuer. Ma conscience ne me permettait pas d’imiter la conduite de la plupart des chirurgiens, dont la science est trop semblable à celle des procureurs&nbsp;: c’est pourquoi, après avoir consulté ma femme et quelques autres de mes intimes amis, je pris la résolution de faire encore un voyage de mer. Je fus chirurgien successivement dans deux vaisseaux&nbsp;; et plusieurs autres voyages que je fis, pendant six ans, aux Indes orientales et occidentales, augmentèrent un peu ma petite fortune. J’employais mon loisir à lire les meilleurs auteurs anciens et modernes, étant toujours fourni d’un certain nombre de livres&nbsp;; et, quand je me trouvais à terre, je ne négligeais pas de remarquer les mœurs et les coutumes des peuples, et d’apprendre en même temps la langue du pays&nbsp;; ce qui me coûtait peu, ayant la mémoire très-bonne.
</p>
```

### Balises de titres h1 ↔︎ h6

Les différents niveau de titre d'un document sont normés de 1 à 6. Leur balises sont préfixées par la lettre **h** (***heading*** en anglais) et vont donc de `<h1></h1>` à `<h6></h6>`.

H1 est le niveau le plus important, H6 le plus faible. 

```
<h1>
<small>VOYAGES</small> 
<br/>DE GULLIVER,
</h1>

<h2>PAR SWIFT,</h2>

<h3>TRADUITS PAR L’ABBÉ DESFONTAINES.</h3>

<h4>TOME PREMIER.</h4>

<h5>VOYAGE À LILLIPUT.</h5>

<h6>Chapitre premier</h6>
```

### Balises de division du document

Un document HTML peut être constitué de plusieurs parties, qui peuvent être hiérarchisés sémantiquement.

#### Balise article

Cette balise permette de marquer le contour d'un article. 
On peut avoir plusieurs articles dans une même page. 

#### Balise header, main et footer

Ces 3 balisent marquent l'**en-tête**, la **partie principale** et le **pied-de-page** d'un article ou d'une page.

#### Balise nav

Cette balise permet d'indique que les élements servent pour la **navigation** — ils auront donc moins de valeur sémantique. 

#### Balise section

Cette balise divise un article en plusieurs section. Une représente une section générique d'un document, par exemple un groupe de contenu thématique. Une section commence généralement avec un titre et peut contenir plusieurs paragraphes

```html
<nav>...</nav>
<article>
  
  <header>
  	<h1>VOYAGE À LILLIPUT.</h1>
  </header>
  
  <main>
    <section>
      <h2>Chapitre premier</h2>
      <p>...</p>
    </section>

    <section>
      <h2>Chapitre second</h2>
      <p>...</p>
    </section>
  </main>
  
  <footer>Note de bas de page.</footer>
  
</article>
```

 

