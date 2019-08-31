# Bootstrap Modules

This project has two high-level goals:

- CSS: Generate small, composible CSS modules out of bootstrap
- WebComponents

## CSS

See [packges/bootstrap-css](https://github.com/robrez/bootstrap-modules/tree/master/packages/bootstrap-css)

## WebComponents

Methodology TBD.  A first pass might be to try and consume the CSS output in the form of theme modules that work for particular component libraries.  For example, vaadin components are highly extensible and can consume themes.  Material components can consume custom properties, etc

There are some noteworthy community initiatives to make bootstrap-flavored webcomponents with which there may be potential synergies

project  | comments
---------|----------------
[web-padawan/aybolit](https://github.com/web-padawan/aybolit) | solid work, still ramping up on component coverage
[morbidick/bootstrap-webcomponents](https://github.com/morbidick/bootstrap-webcomponents) | not yet evaluated
[nik-christou/lit-element-bootstrap](https://github.com/nik-christou/lit-element-bootstrap) | looks very promising
[smart elements](https://github.com/HTMLElements/Bootstrap-Web-Components) | doesn't work under shadow dom

Additionally, the bootstrap maintainers [seem agreeable](https://github.com/twbs/bootstrap/issues/28131) to webcomponents.

`twbs/bootstrap` has eliminated jQuery and also now contains ESM for each component.  It could be possible to make web components that just consume those existing bootstrap esm classes. Initial research into this approach indicates it would require a lot of orchestration among the host component and the bootstrap classes.. may be better, lighter, easier and more efficient to just implement components

### Progress

To get a feel for different options, this repo has started implementing a component

See [packges/button](https://github.com/robrez/bootstrap-modules/tree/master/packages/button)

## Developing

- `npm install` -- install dependencies
- `npm run build` -- generate/compile all the things
- `npm run start` -- serve the demos
