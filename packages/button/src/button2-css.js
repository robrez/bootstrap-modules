import { css } from 'lit-element';

export default css`button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}

button {
  border-radius: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: inherit;
  line-height: inherit;
  overflow: visible;
  text-transform: none;
  -webkit-appearance: button;
}

.btn {
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }
}
.btn:hover {
  color: #212529;
  text-decoration: none;
}

.btn:focus, .btn.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.btn.disabled, .btn:disabled {
  opacity: 0.65;
}

:host {
  outline: none;
  display: inline-block;
}

:host .btn {
  --contrast-ratio: 25;
  /* The foreground color with contrast adjuster. */
  --bs-button-contrast: hsl(
    var(--bs-button-h),
    calc(var(--bs-button-s) * 1%),
    calc(
      (-2500 * (var(--contrast-ratio) * 1% / 100 + 1%)) /
        (var(--bs-button-l) - 49.999) +
        var(--bs-button-l) *
        1%
    )
  );
  color: var(--bs-button-contrast);
  background-color: hsl(var(--bs-button-h), calc( var(--bs-button-s) * 1% ), calc( var(--bs-button-l) * 1%));
  border-color: hsl(var(--bs-button-h), calc( var(--bs-button-s) * 1% ), calc( var(--bs-button-l) * 1%));
  --outline-color: hsla(var(--bs-button-h), calc( var(--bs-button-s) * 1% ), calc( var(--bs-button-l) * 1%), .5);
}

:host .btn:hover {
  color: var(--bs-button-color, #fff);
  background-color: hsl(var(--bs-button-h), calc(var(--bs-button-s) * 1%), calc( calc(var(--bs-button-l) * 1%) - var(--bs-button-hover-background-ratio, 7.5%) ));
  border-color: hsl(var(--bs-button-h), var(--bs-button-s), calc( var(--bs-button-l) - var(--bs-button-hover-border-ratio, 10%) ));
}

:host .btn:focus {
  color: var(--bs-button-color, #fff);
  background-color: hsl(var(--bs-button-h), calc(var(--bs-button-s) * 1%), calc( calc(var(--bs-button-l) * 1%) - var(--bs-button-focus-background-ratio, 7.5%) ));
  border-color: hsl(var(--bs-button-h), var(--bs-button-s), calc( var(--bs-button-l) - var(--bs-button-focus-border-ratio, 10%) ));
  box-shadow: 0 0 0 var(--bs-button-outline-width, 2px) var(--outline-color);
}

:host .btn:active {
  color: var(--bs-button-color, #fff);
  background-color: hsl(var(--bs-button-h), calc(var(--bs-button-s) * 1%), calc( calc(var(--bs-button-l) * 1%) - var(--bs-button-active-background-ratio, 10%) ));
  border-color: hsl(var(--bs-button-h), var(--bs-button-s), calc( var(--bs-button-l) - var(--bs-button-active-border-ratio, 12.5%) ));
}

:host([dark]) .btn {
  --bs-button-h: var(--bs-button-dark-h, 210);
  --bs-button-s: var(--bs-button-dark-s, 10);
  --bs-button-l: var(--bs-button-dark-l, 23);
}

:host([light]) .btn {
  --bs-button-h: var(--bs-button-light-h, 210);
  --bs-button-s: var(--bs-button-light-s, 17);
  --bs-button-l: var(--bs-button-light-l, 98);
}

:host([danger]) .btn {
  --bs-button-h: var(--bs-button-danger-h, 354);
  --bs-button-s: var(--bs-button-danger-s, 70);
  --bs-button-l: var(--bs-button-danger-l, 54);
}

:host([warning]) .btn {
  --bs-button-h: var(--bs-button-warning-h, 45);
  --bs-button-s: var(--bs-button-warning-s, 100);
  --bs-button-l: var(--bs-button-warning-l, 51);
}

:host([info]) .btn {
  --bs-button-h: var(--bs-button-info-h, 188);
  --bs-button-s: var(--bs-button-info-s, 78);
  --bs-button-l: var(--bs-button-info-l, 41);
}

:host([success]) .btn {
  --bs-button-h: var(--bs-button-success-h, 134);
  --bs-button-s: var(--bs-button-success-s, 61);
  --bs-button-l: var(--bs-button-success-l, 41);
}

:host([secondary]) .btn {
  --bs-button-h: var(--bs-button-secondary-h, 208);
  --bs-button-s: var(--bs-button-secondary-s, 7);
  --bs-button-l: var(--bs-button-secondary-l, 46);
}

:host([primary]) .btn {
  --bs-button-h: var(--bs-button-primary-h, 211);
  --bs-button-s: var(--bs-button-primary-s, 100);
  --bs-button-l: var(--bs-button-primary-l, 50);
}

:host([large]) .btn {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-radius: 0.3rem;
}

:host([small]) .btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
}

:host([block]) {
  display: block;
  width: 100%;
}
:host([block]) .btn {
  display: block;
  width: 100%;
}

:host([disabled]) {
  pointer-events: none;
  opacity: 0.65;
}`;
