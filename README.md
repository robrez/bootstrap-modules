# Bootstrap Modules

This project has two high-level goals:

- CSS: Generate small, composible CSS modules out of bootstrap
- WebComponents (TBD)

## CSS

This project will aim to use bootstrap's sass library as-is -- as published by `twbs/bootstrap`.

An expected outcome will be to export:

- Plain CSS files
- LitElement style CSS template modules
- Legacy polymer dom-modules

This will enable authors of webComponents who might be using shadow dom to import bits of bootstrap a-la-carte into an shadow root. For example, need the bootstrap grid? import just that.

### Differences

Although this project will aim to use things as-is, there are some areas that have potential for improvement.  These areas will be evaluated:

- eliminate `!important`
- stop using `position: relative` in grid
- make use of css custom properties for better extensibility.. this is very likely to happen
- create a responsive wrapper that is based on "element queries" rather than media queries... this would be a fantastic improvement

Any distinguishing characteristics will be documented

### Utilities

Bootstrap utilites api will generate rules for each entry in `$utilities`. Each of these rules will also contain media-specific variants for each breakpoint in `$grid-breakpoints`

The scripts here will breakup utilities into more modular categories:

- Display
- Flexbox
- Sizing
- Spacing
- Text
- Style

## WebComponents

Methodology TBD.  A first pass might be to try and consume the CSS output in the form of theme modules that work for particular component libraries.  For example, vaadin components are highly extensible and can consume themes.  Material components can consume custom properties, etc

There are some noteworthy community initiatives to make bootstrap-flavored webcomponents with which there may be potential synergies

project  | comments
---------|----------------
[web-padawan/aybolit](https://github.com/web-padawan/aybolit) | solid work, still ramping up on component coverage
[morbidick/bootstrap-webcomponents](https://github.com/morbidick/bootstrap-webcomponents) | not yet evaluated
[nik-christou/lit-element-bootstrap](https://github.com/nik-christou/lit-element-bootstrap) | looks very promising
[smart elements](https://github.com/HTMLElements/Bootstrap-Web-Components) | doesn't work under shadow dom

`twbs/bootstrap` has eliminated jQuery and also now contains ESM for each component.  It could be possible to make web components that just consume those existing bootstrap esm classes. Initial research into this approach indicates it would require a lot of orchestration among the host component and the bootstrap classes.. may be better, lighter, easier and more efficient to just implement components

### Progress

To get a feel for different options, this repo has started implementing `packages/bs-button`

## Developing

- `npm install` -- install dependencies
- `npm run build` -- generate/compile all the things
- `npm run start` -- serve the demos
