# Guide UI — Monolithe Climbing

[[DOC:UI_GUIDELINES]]
[[VERSION:1.0]]
[[STATUS:READY_FOR_DEV_AI]]
[[SCOPE:WEBSITE_UI_SYSTEM]]

## [[SECTION:OBJECTIF_DU_DOCUMENT]]

Ce document définit la direction UI complète du site Monolithe Climbing.

Il doit être utilisé par le développeur AI comme **source de vérité visuelle** pour construire l'interface du site. Il complète le brief stratégique et la rédaction balisée déjà fournis.

Le but n'est **pas** de créer un site "underground", "brutaliste" ou "fanzine". L'interface doit au contraire inspirer :

- la solidité,
- la nature,
- la maîtrise technique,
- le sérieux institutionnel,
- une perception premium,
- la confiance pour les collectivités territoriales.

L'ensemble doit évoquer une rencontre entre :

- un acteur d'aménagement sportif,
- une marque outdoor premium,
- une communication de fédération sportive moderne,
- un studio de design éditorial sobre.

---

## [[SECTION:PRINCIPE_DIRECTEUR]]

### [[COPY:UI_VISION]]
Créer une interface **claire, aérée, minérale, élégante et rassurante**, capable de convaincre une mairie, une métropole, une communauté de communes, un service des sports, un aménageur ou un élu que Monolithe est un partenaire fiable pour concevoir un espace sportif naturel dans l'espace public.

### [[NOTE_DEV:POSITIONNEMENT_UI]]
Le site doit être perçu comme :

- institutionnel sans être administratif,
- premium sans être luxueux,
- naturel sans tomber dans le rustique,
- technique sans être froid,
- contemporain sans effet de mode agressif.

### [[DO:TON_VISUEL]]
- privilégier la sobriété,
- utiliser des contrastes doux,
- laisser beaucoup de respiration,
- faire émerger la matière rocheuse par les visuels,
- organiser l'information de manière hiérarchique et calme.

### [[DONT:TON_VISUEL]]
- pas de noir pur omniprésent,
- pas de grosses bordures noires,
- pas d'ombres diffuses lourdes,
- pas de dégradés tape-à-l'oeil,
- pas de style startup flashy,
- pas de saturation excessive,
- pas de brutalist web design,
- pas d'interface dense ou compacte.

---

## [[SECTION:DESIGN_TOKENS]]

## [[SUBSECTION:COULEURS]]

### [[TOKEN:COLOR_BACKGROUND_PRIMARY]]
- **Nom** : Background Primary
- **Hex** : `#F5F5F2`
- **Usage** : fond principal du site
- **Intention** : écru / beige très clair, mat, minéral, organique

### [[TOKEN:COLOR_TEXT_PRIMARY]]
- **Nom** : Text Primary
- **Hex** : `#1C1E21`
- **Usage** : titres, texte principal, liens de navigation, labels importants
- **Intention** : anthracite profond, plus doux qu'un noir pur

### [[TOKEN:COLOR_TEXT_SECONDARY]]
- **Nom** : Text Secondary
- **Hex** : `#5E646A`
- **Usage** : paragraphes secondaires, légendes, texte d'aide, métadonnées
- **Intention** : gris ardoise moyen pour hiérarchiser l'information

### [[TOKEN:COLOR_ACCENT_PRIMARY]]
- **Nom** : Accent Primary
- **Hex** : `#2A4B42`
- **Usage** : boutons principaux, liens actifs, états hover, éléments de réassurance clés
- **Intention** : vert forêt profond, désaturé, institutionnel et naturel

### [[TOKEN:COLOR_SURFACE_WHITE]]
- **Nom** : Surface White
- **Hex** : `#FFFFFF`
- **Usage** : cartes de premier niveau, blocs mis en avant, formulaires, panneaux d'information
- **Intention** : surface claire pour détacher les contenus du fond écru

### [[TOKEN:COLOR_SURFACE_MUTED]]
- **Nom** : Surface Muted
- **Hex** : `#EBEBE6`
- **Usage** : sections alternées, bandeaux de transition, zones de contenu secondaires
- **Intention** : gris minéral légèrement plus soutenu que le fond principal

### [[TOKEN:COLOR_BORDER_SUBTLE]]
- **Nom** : Border Subtle
- **Hex** : `#D8D8D4`
- **Usage** : séparateurs, bordures fines, champs de formulaire, délimitations discrètes
- **Intention** : structure légère sans lourdeur visuelle

### [[TOKEN:COLOR_FOCUS_RING]]
- **Nom** : Focus Ring
- **Hex recommandé** : `#4D6F65`
- **Usage** : focus visible accessible sur boutons, liens, champs
- **Intention** : variante plus claire du vert accent pour rester cohérent

### [[TOKEN:COLOR_SUCCESS_SOFT]]
- **Nom** : Success Soft
- **Hex recommandé** : `#E4EEE9`
- **Usage** : confirmations, messages positifs, validation de formulaire

### [[TOKEN:COLOR_WARNING_SOFT]]
- **Nom** : Warning Soft
- **Hex recommandé** : `#F4EBDD`
- **Usage** : messages d'attention non critiques

### [[TOKEN:COLOR_ERROR_SOFT]]
- **Nom** : Error Soft
- **Hex recommandé** : `#F7E3E0`
- **Usage** : erreurs de formulaire, messages d'échec

### [[NOTE_DEV:COLOR_USAGE_RULES]]
Règles impératives :

1. Le fond global du site doit utiliser `#F5F5F2` comme base dominante.
2. Le noir pur `#000000` ne doit pas être utilisé comme couleur principale d'interface.
3. Le vert accent doit rester parcimonieux et réservé aux actions, liens actifs et éléments de confiance.
4. Les couleurs ne doivent jamais devenir décoratives au détriment de la lisibilité.
5. Les contrastes doivent respecter l'accessibilité AA au minimum.

---

## [[SUBSECTION:TYPOGRAPHIE]]

### [[TOKEN:FONT_HEADINGS]]
- **Police prioritaire** : `Montserrat`
- **Alternative acceptable** : `Syne`
- **Catégorie** : sans-serif géométrique
- **Usage** : H1, H2, H3, intertitres structurants, quelques labels premium

### [[TOKEN:FONT_BODY]]
- **Police prioritaire** : `Inter`
- **Alternative acceptable** : `Helvetica Now` ou `Helvetica, Arial, sans-serif`
- **Catégorie** : sans-serif neutre
- **Usage** : paragraphes, navigation, boutons, formulaires, listes, légendes, FAQ

### [[TOKEN:FONT_WEIGHT_HEADINGS]]
- **Titres** : `600` ou `700`
- **Règle** : utiliser `700` pour H1 et grands titres héro, `600` pour H2/H3 dans la plupart des cas

### [[TOKEN:FONT_WEIGHT_BODY]]
- **Texte courant** : `400`
- **Texte renforcé** : `500`
- **Boutons / liens navigation** : `500`

### [[TOKEN:TEXT_CASE_RULES]]
- utiliser la casse normale pour les titres et intertitres,
- réserver les capitales complètes à des surtitres très courts,
- éviter le tout-majuscule systématique,
- éviter les styles agressifs ou militarisés.

### [[TOKEN:LETTER_SPACING_HEADINGS]]
- **Grands titres** : `-0.02em`
- **Titres intermédiaires** : entre `-0.01em` et `0em`
- **Texte courant** : normal

### [[TOKEN:LINE_HEIGHT]]
- **Texte courant** : `1.6`
- **Titres** : entre `1.05` et `1.2` selon la taille
- **Légendes / metadata** : `1.4` à `1.5`

### [[TOKEN:TYPE_SCALE_RECOMMENDED]]
Échelle recommandée :

- `H1`: 48–64px desktop / 36–42px tablet / 30–36px mobile
- `H2`: 36–44px desktop / 28–34px tablet / 24–30px mobile
- `H3`: 24–30px desktop / 22–26px tablet / 20–24px mobile
- `Lead`: 20–22px desktop / 18–20px mobile
- `Body`: 16–18px
- `Small`: 14px
- `Micro`: 12–13px

### [[NOTE_DEV:TYPOGRAPHY_RULES]]
Le rendu doit privilégier :

- une hiérarchie très lisible,
- des titres affirmés mais pas écrasants,
- des paragraphes assez larges pour respirer,
- une lecture confortable sur desktop et mobile,
- un ton éditorial haut de gamme.

---

## [[SUBSECTION:ESPACEMENT]]

### [[TOKEN:SPACING_SYSTEM]]
Utiliser un système d'espacement fondé sur des multiples de `8px`.

Échelle recommandée :

- `8px`
- `16px`
- `24px`
- `32px`
- `40px`
- `48px`
- `64px`
- `80px`
- `96px`
- `128px`

### [[TOKEN:SECTION_PADDING]]
- **Desktop** : `96px` à `128px` verticalement pour les grandes sections
- **Tablet** : `72px` à `96px`
- **Mobile** : `48px` à `64px`

### [[TOKEN:CONTENT_MAX_WIDTH]]
- **Large content wrapper** : `1280px`
- **Standard wrapper** : `1200px`
- **Text column max width** : `720px` à `780px`

### [[NOTE_DEV:WHITESPACE_RULES]]
Le site doit donner une impression d'espace et de calme.

Règles :

- ne pas compresser les sections,
- éviter les enchaînements serrés de cartes,
- garder de grands marges extérieures,
- donner aux visuels de l'ampleur,
- ne jamais chercher à "faire rentrer plus" au détriment du souffle visuel.

---

## [[SUBSECTION:BORDURES_ET_FORMES]]

### [[TOKEN:BORDER_RADIUS_GLOBAL]]
- **Valeur** : `0px`
- **Usage** : boutons, cartes, images, champs, blocs, modales
- **Intention** : angles droits pour préserver l'identité Monolithe, minérale et rigoureuse

### [[TOKEN:BORDER_WIDTH_STANDARD]]
- **Valeur** : `1px`
- **Couleur** : `#D8D8D4`

### [[TOKEN:BOX_SHADOW_POLICY]]
- **Règle** : pas d'ombre portée diffuse standard
- **Exception** : aucune ombre décorative lourde
- **Profondeur** : créée via contraste de surfaces, séparation, rythme typographique et photographie

### [[NOTE_DEV:VISUAL_STRUCTURE]]
L'interface ne doit pas ressembler à une collection de boîtes lourdes. Les blocs existent, mais ils sont posés avec retenue sur la page.

---

## [[SECTION:LAYOUT_SYSTEM]]

## [[SUBSECTION:GRILLE]]

### [[TOKEN:GRID_DESKTOP]]
- grille de `12 colonnes`
- gouttières de `24px` à `32px`
- marges latérales généreuses

### [[TOKEN:GRID_TABLET]]
- grille de `8 colonnes`
- réduction contrôlée des marges

### [[TOKEN:GRID_MOBILE]]
- grille simple `4 colonnes` ou flux mono-colonne structuré
- padding latéral recommandé : `20px` à `24px`

### [[NOTE_DEV:LAYOUT_BEHAVIOR]]
L'interface doit alterner entre :

- grands blocs pleine largeur pour les sections visuelles,
- colonnes texte + visuel,
- cartes structurées pour les bénéfices,
- zones de respiration entre les modules.

### [[DO:LAYOUT]]
- utiliser des largeurs de texte raisonnables,
- aligner rigoureusement les titres, paragraphes et CTA,
- créer des variations de rythme entre sections claires et sections de surface,
- conserver une structure éditoriale.

### [[DONT:LAYOUT]]
- pas de mosaïque désordonnée,
- pas de composant collé au bord,
- pas de densité excessive,
- pas de surcouche décorative inutile.

---

## [[SECTION:COMPOSANTS_UI]]

## [[COMPONENT:NAVIGATION_HEADER]]

### [[SPEC:HEADER_STYLE]]
- fond : `#F5F5F2` ou fond semi-opaque proche du fond principal
- hauteur confortable
- bordure basse fine `1px #D8D8D4`
- aucun effet glassmorphism
- aucune ombre lourde

### [[SPEC:HEADER_LAYOUT]]
- logo à gauche
- navigation primaire au centre ou légèrement décalée à droite
- CTA principal à droite
- structure très lisible

### [[SPEC:HEADER_BEHAVIOR]]
- sticky sobre autorisé
- transition douce au scroll
- ne pas réduire trop agressivement la hauteur
- conserver l'élégance institutionnelle

### [[SPEC:NAV_LINKS]]
- police Inter 500
- couleur texte principale
- hover : accent forestier
- active : accent + soulignement discret ou filet inférieur

### [[NOTE_DEV:HEADER_TONE]]
Le header doit inspirer une marque fiable, pas une plateforme produit flashy.

---

## [[COMPONENT:HERO_SECTION]]

### [[SPEC:HERO_LAYOUT]]
Le hero de la homepage doit être large, respirant, premium et immédiatement compréhensible.

Composition recommandée :

- colonne texte claire,
- visuel ample ou image panoramique,
- CTA principal visible,
- CTA secondaire discret,
- éventuellement une bande de réassurance sous le hero.

### [[SPEC:HERO_VISUAL]]
- utiliser une photographie forte de roche naturelle intégrée dans un environnement réel,
- éviter les visuels trop sombres,
- privilégier la lumière naturelle,
- montrer la matière, l'échelle et l'insertion dans l'espace public.

### [[SPEC:HERO_TEXT_STYLE]]
- H1 fort mais pas crié,
- lead text lisible et aéré,
- CTA alignés proprement,
- pas d'effets de texte gadget.

### [[DONT:HERO]]
- pas de plein écran oppressant avec image noire,
- pas de slogans cryptiques,
- pas de surimpression difficile à lire,
- pas de typographie ultra-compressée ou militante.

---

## [[COMPONENT:BUTTONS]]

### [[SPEC:BUTTON_PRIMARY]]
- fond : `#2A4B42`
- texte : `#FFFFFF`
- bordure : `1px solid #2A4B42`
- rayon : `0px`
- padding généreux
- graisse : `500`
- transition discrète

### [[SPEC:BUTTON_PRIMARY_HOVER]]
- légère variation plus sombre ou plus dense du vert
- pas d'animation excessive
- pas d'ombre portée

### [[SPEC:BUTTON_SECONDARY]]
- fond : transparent ou `#FFFFFF`
- texte : `#1C1E21`
- bordure : `1px solid #D8D8D4` ou accent selon contexte
- même géométrie que le bouton principal

### [[SPEC:BUTTON_TERTIARY_LINK]]
- lien texte simple avec soulignement subtil ou flèche discrète
- utiliser pour actions secondaires éditoriales

### [[SPEC:BUTTON_SIZING]]
- hauteur confortable
- ne jamais produire de boutons trop petits ou très arrondis
- laisser de l'air autour du texte

### [[NOTE_DEV:BUTTON_RULES]]
Les boutons doivent paraître robustes, sobres, institutionnels. Pas de style app mobile lisse ou ludique.

---

## [[COMPONENT:CARDS]]

### [[SPEC:CARD_STANDARD]]
- fond : `#FFFFFF`
- bordure : `1px solid #D8D8D4`
- rayon : `0px`
- ombre : aucune
- padding : `24px` à `32px`

### [[SPEC:CARD_CONTENT]]
- hiérarchie claire : surtitre éventuel, titre, texte, lien
- alignement strict
- icône facultative en line icon

### [[SPEC:CARD_VARIANTS]]
1. **Card bénéfice**
2. **Card réalisation**
3. **Card réassurance**
4. **Card FAQ**
5. **Card statistique / preuve**

### [[NOTE_DEV:CARD_USAGE]]
Les cartes servent à clarifier et rassurer, pas à produire une interface "catalogue" surchargée.

---

## [[COMPONENT:SECTIONS_ALTERNEES]]

### [[SPEC:SECTION_BACKGROUND_ALTERNATION]]
Alterner subtilement entre :

- fond principal `#F5F5F2`,
- surface atténuée `#EBEBE6`,
- bloc blanc structurant `#FFFFFF`.

### [[NOTE_DEV:SECTION_RHYTHM]]
Cette alternance est le principal levier de profondeur du site. Elle remplace les ombres et les artifices décoratifs.

---

## [[COMPONENT:FORMS]]

### [[SPEC:FORM_CONTAINER]]
- fond : `#FFFFFF`
- bordure : `1px solid #D8D8D4`
- padding : `32px` à `40px`
- structure très claire

### [[SPEC:FORM_FIELDS]]
- hauteur confortable
- fond blanc ou légèrement cassé
- bordure fine
- pas d'arrondis
- texte lisible
- labels visibles au-dessus du champ

### [[SPEC:FORM_PLACEHOLDERS]]
- couleur discrète
- jamais utilisés comme seul label

### [[SPEC:FORM_STATES]]
- focus visible avec anneau cohérent accentué
- erreur claire mais douce
- succès lisible sans vert vif saturé

### [[NOTE_DEV:FORM_TONE]]
Le formulaire doit inspirer le sérieux d'une prise de contact professionnelle, pas d'une landing page agressive.

---

## [[COMPONENT:FAQ_ACCORDION]]

### [[SPEC:FAQ_STYLE]]
- liste verticale sobre
- bordures fines entre items
- typographie claire
- animation discrète
- icône plus / moins ou chevron simple en ligne icon

### [[DONT:FAQ_STYLE]]
- pas de gros panneaux lourds,
- pas de cartes ultra-ombrées,
- pas d'animation gadget.

---

## [[COMPONENT:FOOTER]]

### [[SPEC:FOOTER_STYLE]]
- fond : surface muted ou anthracite doux selon contraste global
- rester élégant et institutionnel
- forte lisibilité
- structure claire en colonnes

### [[SPEC:FOOTER_CONTENT]]
- navigation secondaire
- coordonnées
- lien vers plaquette
- mentions légales
- contact

### [[NOTE_DEV:FOOTER_RULE]]
Si un footer sombre est utilisé, il doit rester doux et minéral, jamais noir pur et agressif.

---

## [[SECTION:TRAITEMENT_PHOTOGRAPHIQUE]]

## [[SUBSECTION:PHOTOGRAPHIES]]

### [[RULE:PHOTO_STYLE_GLOBAL]]
Les photographies doivent être au coeur de l'identité visuelle.

Leur rôle est de montrer :

- la matière rocheuse,
- l'usage réel,
- l'intégration paysagère,
- la qualité de l'installation,
- la crédibilité du projet.

### [[RULE:PHOTO_COLOR_TREATMENT]]
- privilégier des tons naturels,
- légèrement désaturés,
- cohérents avec le fond écru et le vert forêt,
- éviter les filtres trop froids ou trop orangés,
- éviter les couleurs fluo.

### [[RULE:PHOTO_BW_TREATMENT]]
Si noir et blanc :

- traitement doux,
- nuances de gris riches,
- contraste modéré,
- jamais style photocopie, fanzine ou poster punk.

### [[RULE:PHOTO_SUBJECTS]]
Privilégier :

- vues larges du site,
- détails de roche,
- usagers en situation,
- contexte de parc ou d'esplanade,
- signalétique,
- interaction entre équipement et environnement.

### [[DONT:PHOTO_SUBJECTS]]
- pas de visuels trop sombres,
- pas de photos floues ou trop artistiques,
- pas de cliché extrême sport anxiogène,
- pas d'iconographie indoor qui brouille le positionnement collectivités.

---

## [[SUBSECTION:ICONOGRAPHIE]]

### [[RULE:ICON_STYLE]]
- icônes linéaires uniquement,
- stroke fin et uniforme,
- style géométrique,
- sans remplissage,
- sans effet 3D,
- sans pictogrammes cartoon.

### [[RULE:ICON_STROKE]]
- épaisseur recommandée : `1.5px` ou `2px`

### [[RULE:ICON_USAGE]]
Utiliser les icônes avec parcimonie pour :

- bénéfices,
- sécurité,
- étapes projet,
- informations de contact,
- FAQ.

### [[NOTE_DEV:ICON_TONE]]
L'icône doit accompagner l'information, jamais dominer la composition.

---

## [[SECTION:HIERARCHIE_DES_PAGES]]

## [[LAYOUT:HOMEPAGE_UI]]

### [[UI_BLOCK:HERO]]
- grande zone respirante
- texte à gauche ou sur colonne éditoriale
- image forte à droite ou en fond cadré avec beaucoup d'air
- CTA principal + secondaire
- preuve immédiate sous hero

### [[UI_BLOCK:REASSURANCE_BAR]]
- bandeau horizontal ou grille de 4 à 5 éléments
- fond légèrement différencié
- typographie discrète mais forte
- usage d'icônes linéaires facultatif

### [[UI_BLOCK:WHY_MONOLITHE]]
- cartes sobres sur fond clair
- mise en avant de bénéfices institutionnels
- éviter le ton marketing bruyant

### [[UI_BLOCK:DIFFERENCE_MONOLITHE]]
- composition texte + visuel matière
- une grande image forte peut dominer
- bloc très éditorial

### [[UI_BLOCK:PROCESS]]
- frise horizontale desktop
- empilement vertical mobile
- étapes numérotées très claires
- séparateurs fins

### [[UI_BLOCK:REALISATION]]
- grand visuel ou galerie disciplinée
- fiche projet structurée
- données clés clairement hiérarchisées

### [[UI_BLOCK:SECURITE]]
- ton très rassurant
- surface claire ou muted
- cartes preuves / normes / validation

### [[UI_BLOCK:FAQ]]
- largeur de lecture confortable
- structure simple
- bonne respiration verticale

### [[UI_BLOCK:FINAL_CTA]]
- bloc de conclusion fort
- texte large
- contraste de surface net
- formulaire ou CTA principal très visible

---

## [[LAYOUT:PAGE_REALISATIONS_UI]]

### [[SPEC:GRID_REALISATIONS]]
- grille sobre, large, régulière
- visuels généreux
- fiches projet avec metadata lisibles
- possibilité de mise en avant d'un projet phare en pleine largeur

### [[NOTE_DEV:REALISATIONS_TONE]]
Cette page doit ressembler à un portfolio institutionnel premium, pas à une galerie Instagram.

---

## [[LAYOUT:PAGE_SECURITE_UI]]

### [[SPEC:SAFETY_PAGE_STYLE]]
- structure pédagogique,
- sections hiérarchisées,
- ton documentaire rassurant,
- usage possible de schémas simples ou d'icônes linéaires,
- pas d'alarmisme visuel.

---

## [[LAYOUT:PAGE_COLLECTIVITES_UI]]

### [[SPEC:COLLECTIVITES_PAGE_STYLE]]
- style très lisible,
- blocs argumentaires structurés,
- CTA d'étude de faisabilité,
- forte sensation de sérieux,
- excellente lisibilité des contenus décisionnels.

---

## [[SECTION:MOTION_ET_INTERACTIONS]]

### [[RULE:MOTION_GLOBAL]]
L'animation doit être discrète, lente, utile et premium.

### [[RULE:MOTION_ALLOWED]]
- léger fade-in,
- translate subtil sur apparition,
- hover très modéré,
- accordéon fluide,
- transition de couleur douce.

### [[RULE:MOTION_FORBIDDEN]]
- pas de parallax lourde,
- pas de scroll theatrics,
- pas d'animations rebondissantes,
- pas de micro-interactions ludiques qui décrédibilisent l'offre,
- pas de bruit visuel cinétique.

### [[NOTE_DEV:MOTION_ACCESSIBILITY]]
Respecter `prefers-reduced-motion`.

---

## [[SECTION:ACCESSIBILITE]]

### [[RULE:A11Y_CONTRAST]]
Tous les textes et actions doivent respecter un contraste accessible au minimum niveau AA.

### [[RULE:A11Y_FOCUS]]
Tous les éléments interactifs doivent posséder un focus visible clair et cohérent.

### [[RULE:A11Y_TEXT]]
- ne pas descendre sous `16px` pour le corps principal,
- éviter les blocs de texte trop larges,
- utiliser des espacements confortables.

### [[RULE:A11Y_FORMS]]
- labels visibles,
- messages d'erreur explicites,
- états clairs,
- navigation clavier complète.

### [[RULE:A11Y_IMAGES]]
- alt text pertinents,
- ne pas faire reposer une information critique uniquement sur l'image.

---

## [[SECTION:RESPONSIVE_RULES]]

### [[RULE:RESPONSIVE_GLOBAL]]
Le responsive doit conserver la sensation premium et respirante.

### [[RULE:RESPONSIVE_MOBILE]]
- ne pas écraser les paddings,
- garder des titres nets,
- éviter les cartes trop hautes et trop étroites,
- empiler proprement les contenus,
- conserver des CTA visibles.

### [[RULE:RESPONSIVE_HERO]]
- priorité à la lisibilité du message,
- image toujours qualitative,
- CTA facilement activables,
- pas de texte sur image si le contraste mobile devient faible.

### [[RULE:RESPONSIVE_GRID]]
- réduire les colonnes progressivement,
- préserver les hiérarchies,
- ne pas transformer les sections en liste dense illisible.

---

## [[SECTION:IMPLEMENTATION_TOKENS]]

## [[SUBSECTION:CSS_VARIABLES_RECOMMANDEES]]

```css
:root {
  --bg-primary: #F5F5F2;
  --surface-white: #FFFFFF;
  --surface-muted: #EBEBE6;
  --text-primary: #1C1E21;
  --text-secondary: #5E646A;
  --accent-primary: #2A4B42;
  --border-subtle: #D8D8D4;
  --focus-ring: #4D6F65;

  --font-heading: "Montserrat", "Syne", sans-serif;
  --font-body: "Inter", "Helvetica Neue", Arial, sans-serif;

  --radius-none: 0px;
  --border-width: 1px;

  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 32px;
  --space-5: 40px;
  --space-6: 48px;
  --space-7: 64px;
  --space-8: 80px;
  --space-9: 96px;
  --space-10: 128px;

  --container-standard: 1200px;
  --container-wide: 1280px;
  --reading-width: 760px;
}
```

### [[NOTE_DEV:TAILWIND_MAPPING_OPTION]]
Si le projet utilise Tailwind, mapper exactement ces tokens dans le thème global et interdire les couleurs non prévues sauf besoin fonctionnel précis.

---

## [[SECTION:DO_AND_DONT_GLOBAL]]

### [[DO:GLOBAL_UI]]
- utiliser un fond écru mat,
- conserver une composition éditoriale,
- privilégier la photographie de qualité,
- structurer avec des surfaces et séparateurs fins,
- garder une forte lisibilité,
- créer une impression premium par la retenue,
- montrer la roche et le territoire,
- construire une interface rassurante pour des décideurs publics.

### [[DONT:GLOBAL_UI]]
- ne pas faire un site de salle d'escalade underground,
- ne pas utiliser du noir pur comme langage principal,
- ne pas multiplier les effets,
- ne pas charger les pages en composants décoratifs,
- ne pas saturer les couleurs,
- ne pas arrondir les éléments,
- ne pas utiliser d'ombres diffuses lourdes,
- ne pas chercher un style startup SaaS,
- ne pas basculer vers un univers extrême sport agressif.

---

## [[SECTION:CRITERES_D_ACCEPTATION_UI]]

Le développement UI sera considéré comme conforme seulement si :

1. le site repose visuellement sur le fond écru `#F5F5F2`,
2. les angles restent droits sur les composants,
3. les bordures sont fines et discrètes,
4. les ombres diffuses sont absentes,
5. la hiérarchie typographique est claire et premium,
6. l'accent forestier `#2A4B42` est utilisé de manière disciplinée,
7. le rendu global inspire confiance à une collectivité,
8. la mise en page respire sur desktop comme sur mobile,
9. la photographie est traitée avec sobriété,
10. l'ensemble paraît institutionnel, contemporain et haut de gamme.

---

## [[SECTION:INSTRUCTION_FINALE_POUR_DEV_AI]]

Tu dois implémenter l'UI du site Monolithe en suivant ce document de manière stricte.

En cas d'arbitrage, prioriser toujours dans cet ordre :

1. lisibilité,
2. confiance institutionnelle,
3. cohérence premium,
4. sobriété minérale,
5. clarté de l'information,
6. fidélité aux tokens et règles définis ici.

### [[NOTE_DEV:INTERDICTION]]
Ne pas improviser une direction artistique plus sombre, plus flashy, plus sportive ou plus brutaliste que celle définie dans ce document.

### [[NOTE_DEV:ALIGNEMENT]]
L'UI doit rester parfaitement alignée avec :

- le brief stratégique Monolithe,
- la rédaction balisée des pages,
- le positionnement collectivités,
- la promesse d'un aménagement sportif naturel, durable, sécurisé et premium.

