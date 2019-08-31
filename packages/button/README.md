# Button

Implementation of an extensible botstrap themed button

## Theming

There are custom properties that permutate for each theme name and each contral state:

Theme names

- primary
- secondary
- success
- danger
- warning
- info
- light
- dark

Control states

- default
- hover
- focus
- active
- disabled

Property syntax:

- `--bs-button-{theme-name}-{state}-color`
- `--bs-button-{theme-name}-{state}-bg-color`
- `--bs-button-{theme-name}-{state}-border-color`

Property listing:

property                                 | default
-----------------------------------------|-------------------
--bs-button-primary-color                | #fff
--bs-button-primary-bg-color             | #007bff
--bs-button-primary-border-color         | #007bff
--bs-button-primary-hover-color          | #fff
--bs-button-primary-hover-bg-color       | #0069d9
--bs-button-primary-hover-border-color   | #0062cc
--bs-button-primary-focus-color          | #fff
--bs-button-primary-focus-bg-color       | #0069d9
--bs-button-primary-focus-border-color   | #0062cc
--bs-button-primary-outline-width        | 0.2rem
--bs-button-primary-outline-color        | rgba(38, 143, 255, 0.5)
--bs-button-primary-active-color         | #fff
--bs-button-primary-active-bg-color      | #0062cc
--bs-button-primary-active-border-color  | #005cbf

That allows a high degree of finite customization... but perhaps at the cost of being tedious? 14 properties for 1 theme

Another possible approach might be something similar to `web-padawan/aybolit` could also be utilized -- all color-related values are calculated. So you just set 3 properties per theme.. (rgb, or hsl). for example: `--bs-button-primary-r`, `--bs-button-primary-g`, `--bs-button-primary-b`

Additional theme options:

- `outline` variant
- size variations: `large`, `small`
- `block` level variant

## Methodology

Scss from `twbs/bootstrap` for come consistent property values.  Then a local set of scss scripts generates a lit-element css template literal which is used by the component.

## Developing

See notes in project root's readme