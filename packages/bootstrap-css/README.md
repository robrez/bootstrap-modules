# Bootstrap CSS

This package will aim to use bootstrap's sass library as-is -- as published by `twbs/bootstrap`.

An expected outcome will be to export:

- Plain CSS files
- LitElement style CSS template modules
- Legacy polymer dom-modules

This will enable authors of webComponents who might be using shadow dom to import bits of bootstrap a-la-carte into an shadow root. For example, need the bootstrap grid? import just that.

The effectiveness and development experience of this methodology will be evaluated... some things may end up need to be promoted to web-components

## Differences

Although this package will aim to use things as-is, there are some areas that have potential for improvement.  These areas will be evaluated:

- eliminate `!important`
- stop using `position: relative` in grid
- make use of css custom properties for better extensibility.. this is very likely to happen
- create a responsive wrapper that is based on "element queries" rather than media queries... this would be a fantastic improvement

Any distinguishing characteristics will be documented

## Utilities

Bootstrap utilites api will generate rules for each entry in `$utilities`. Each of these rules will also contain media-specific variants for each breakpoint in `$grid-breakpoints`

The scripts here will breakup utilities into more modular categories:

- Display
- Flexbox
- Sizing
- Spacing
- Text
- Style
