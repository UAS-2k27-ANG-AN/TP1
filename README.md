# Atelier & Co. — gestion de produits

Application Angular standalone d'une seule page (SPA) pour consulter et rechercher un catalogue de produits. Le projet met en pratique l'arborescence de composants, le data binding, les échanges parent-enfant, les pipes, les hooks du cycle de vie et les styles encapsulés.

## Lancer l’application

```bash
npm install
npm start
```

Ouvrir ensuite `http://localhost:4200/`. Pour créer une version de production :

```bash
npm run build
```

## Arborescence

```text
src/app/
├── app.component.ts               # AppComponent : Header, ProductList, Footer
├── components/
│   ├── header/                    # En-tête de l'application
│   ├── product-list/              # Recherche, liste et sélection
│   ├── product-item/              # Carte standalone avec @Input / @Output
│   ├── product-detail/            # Détail du produit sélectionné
│   └── footer/                    # Pied de page
├── models/product.ts              # Modèle Product
└── services/product.service.ts   # Catalogue et recherche
```

`ProductList` transmet chaque produit à `ProductItem` avec `@Input`. La carte émet `productSelected` avec `@Output`; la liste passe alors le produit sélectionné à `ProductDetail`. Le champ `[(ngModel)]` filtre le catalogue en temps réel. `CurrencyPipe` affiche les prix en euros et les hooks `ngOnInit`, `ngOnChanges` et `ngOnDestroy` illustrent le cycle de vie dans la console du navigateur.

Tous les composants sont standalone et les feuilles CSS de chaque composant sont encapsulées par Angular. Le catalogue comprend une recherche, un état vide si aucun résultat ne correspond et une fiche de détail mise à jour à la sélection.

## Nombre de pages

L'application comporte **1 page** : le catalogue avec recherche et détail produit. La navigation entre les composants se fait sans changement de page.

## Tests

```bash
npm test -- --watch=false
```
