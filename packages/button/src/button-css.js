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
  display: inline-flex;
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
  display: inline-flex;
}

:host([dark]) .btn {
  color: var(--bs-button-dark-color, #fff);
  background-color: var(--bs-button-dark-bg-color, #343a40);
  border-color: var(--bs-button-dark-border-color, #343a40);
}

:host([dark][outline]) .btn {
  color: var(--bs-button-dark-color, #343a40);
  background-color: transparent;
  border-color: var(--bs-button-dark-border-color, #343a40);
}

:host([dark]) .btn:hover {
  color: var(--bs-button-dark-hover-color, #fff);
  background-color: var(--bs-button-dark-hover-bg-color, #23272b);
  border-color: var(--bs-button-dark-hover-border-color, #1d2124);
}

:host([dark]) .btn:focus {
  color: var(--bs-button-dark-focus-color, #fff);
  background-color: var(--bs-button-dark-focus-bg-color, #23272b);
  border-color: var(--bs-button-dark-focus-border-color, #1d2124);
  box-shadow: 0 0 0 var(--bs-button-dark-outline-width, 0.2rem) var(--bs-button-dark-outline-color, rgba(82, 88, 93, 0.5));
}

:host([dark]) .btn:active {
  color: var(--bs-button-dark-active-color, #fff);
  background-color: var(--bs-button-dark-active-bg-color, #1d2124);
  border-color: var(--bs-button-dark-active-border-color, #171a1d);
}

:host([light]) .btn {
  color: var(--bs-button-light-color, #212529);
  background-color: var(--bs-button-light-bg-color, #f8f9fa);
  border-color: var(--bs-button-light-border-color, #f8f9fa);
}

:host([light][outline]) .btn {
  color: var(--bs-button-light-color, #f8f9fa);
  background-color: transparent;
  border-color: var(--bs-button-light-border-color, #f8f9fa);
}

:host([light]) .btn:hover {
  color: var(--bs-button-light-hover-color, #212529);
  background-color: var(--bs-button-light-hover-bg-color, #e2e6ea);
  border-color: var(--bs-button-light-hover-border-color, #dae0e5);
}

:host([light]) .btn:focus {
  color: var(--bs-button-light-focus-color, #212529);
  background-color: var(--bs-button-light-focus-bg-color, #e2e6ea);
  border-color: var(--bs-button-light-focus-border-color, #dae0e5);
  box-shadow: 0 0 0 var(--bs-button-light-outline-width, 0.2rem) var(--bs-button-light-outline-color, rgba(216, 217, 219, 0.5));
}

:host([light]) .btn:active {
  color: var(--bs-button-light-active-color, #212529);
  background-color: var(--bs-button-light-active-bg-color, #dae0e5);
  border-color: var(--bs-button-light-active-border-color, #d3d9df);
}

:host([danger]) .btn {
  color: var(--bs-button-danger-color, #fff);
  background-color: var(--bs-button-danger-bg-color, #dc3545);
  border-color: var(--bs-button-danger-border-color, #dc3545);
}

:host([danger][outline]) .btn {
  color: var(--bs-button-danger-color, #dc3545);
  background-color: transparent;
  border-color: var(--bs-button-danger-border-color, #dc3545);
}

:host([danger]) .btn:hover {
  color: var(--bs-button-danger-hover-color, #fff);
  background-color: var(--bs-button-danger-hover-bg-color, #c82333);
  border-color: var(--bs-button-danger-hover-border-color, #bd2130);
}

:host([danger]) .btn:focus {
  color: var(--bs-button-danger-focus-color, #fff);
  background-color: var(--bs-button-danger-focus-bg-color, #c82333);
  border-color: var(--bs-button-danger-focus-border-color, #bd2130);
  box-shadow: 0 0 0 var(--bs-button-danger-outline-width, 0.2rem) var(--bs-button-danger-outline-color, rgba(225, 83, 97, 0.5));
}

:host([danger]) .btn:active {
  color: var(--bs-button-danger-active-color, #fff);
  background-color: var(--bs-button-danger-active-bg-color, #bd2130);
  border-color: var(--bs-button-danger-active-border-color, #b21f2d);
}

:host([warning]) .btn {
  color: var(--bs-button-warning-color, #212529);
  background-color: var(--bs-button-warning-bg-color, #ffc107);
  border-color: var(--bs-button-warning-border-color, #ffc107);
}

:host([warning][outline]) .btn {
  color: var(--bs-button-warning-color, #ffc107);
  background-color: transparent;
  border-color: var(--bs-button-warning-border-color, #ffc107);
}

:host([warning]) .btn:hover {
  color: var(--bs-button-warning-hover-color, #212529);
  background-color: var(--bs-button-warning-hover-bg-color, #e0a800);
  border-color: var(--bs-button-warning-hover-border-color, #d39e00);
}

:host([warning]) .btn:focus {
  color: var(--bs-button-warning-focus-color, #212529);
  background-color: var(--bs-button-warning-focus-bg-color, #e0a800);
  border-color: var(--bs-button-warning-focus-border-color, #d39e00);
  box-shadow: 0 0 0 var(--bs-button-warning-outline-width, 0.2rem) var(--bs-button-warning-outline-color, rgba(222, 170, 12, 0.5));
}

:host([warning]) .btn:active {
  color: var(--bs-button-warning-active-color, #212529);
  background-color: var(--bs-button-warning-active-bg-color, #d39e00);
  border-color: var(--bs-button-warning-active-border-color, #c69500);
}

:host([info]) .btn {
  color: var(--bs-button-info-color, #fff);
  background-color: var(--bs-button-info-bg-color, #17a2b8);
  border-color: var(--bs-button-info-border-color, #17a2b8);
}

:host([info][outline]) .btn {
  color: var(--bs-button-info-color, #17a2b8);
  background-color: transparent;
  border-color: var(--bs-button-info-border-color, #17a2b8);
}

:host([info]) .btn:hover {
  color: var(--bs-button-info-hover-color, #fff);
  background-color: var(--bs-button-info-hover-bg-color, #138496);
  border-color: var(--bs-button-info-hover-border-color, #117a8b);
}

:host([info]) .btn:focus {
  color: var(--bs-button-info-focus-color, #fff);
  background-color: var(--bs-button-info-focus-bg-color, #138496);
  border-color: var(--bs-button-info-focus-border-color, #117a8b);
  box-shadow: 0 0 0 var(--bs-button-info-outline-width, 0.2rem) var(--bs-button-info-outline-color, rgba(58, 176, 195, 0.5));
}

:host([info]) .btn:active {
  color: var(--bs-button-info-active-color, #fff);
  background-color: var(--bs-button-info-active-bg-color, #117a8b);
  border-color: var(--bs-button-info-active-border-color, #10707f);
}

:host([success]) .btn {
  color: var(--bs-button-success-color, #fff);
  background-color: var(--bs-button-success-bg-color, #28a745);
  border-color: var(--bs-button-success-border-color, #28a745);
}

:host([success][outline]) .btn {
  color: var(--bs-button-success-color, #28a745);
  background-color: transparent;
  border-color: var(--bs-button-success-border-color, #28a745);
}

:host([success]) .btn:hover {
  color: var(--bs-button-success-hover-color, #fff);
  background-color: var(--bs-button-success-hover-bg-color, #218838);
  border-color: var(--bs-button-success-hover-border-color, #1e7e34);
}

:host([success]) .btn:focus {
  color: var(--bs-button-success-focus-color, #fff);
  background-color: var(--bs-button-success-focus-bg-color, #218838);
  border-color: var(--bs-button-success-focus-border-color, #1e7e34);
  box-shadow: 0 0 0 var(--bs-button-success-outline-width, 0.2rem) var(--bs-button-success-outline-color, rgba(72, 180, 97, 0.5));
}

:host([success]) .btn:active {
  color: var(--bs-button-success-active-color, #fff);
  background-color: var(--bs-button-success-active-bg-color, #1e7e34);
  border-color: var(--bs-button-success-active-border-color, #1c7430);
}

:host([secondary]) .btn {
  color: var(--bs-button-secondary-color, #fff);
  background-color: var(--bs-button-secondary-bg-color, #6c757d);
  border-color: var(--bs-button-secondary-border-color, #6c757d);
}

:host([secondary][outline]) .btn {
  color: var(--bs-button-secondary-color, #6c757d);
  background-color: transparent;
  border-color: var(--bs-button-secondary-border-color, #6c757d);
}

:host([secondary]) .btn:hover {
  color: var(--bs-button-secondary-hover-color, #fff);
  background-color: var(--bs-button-secondary-hover-bg-color, #5a6268);
  border-color: var(--bs-button-secondary-hover-border-color, #545b62);
}

:host([secondary]) .btn:focus {
  color: var(--bs-button-secondary-focus-color, #fff);
  background-color: var(--bs-button-secondary-focus-bg-color, #5a6268);
  border-color: var(--bs-button-secondary-focus-border-color, #545b62);
  box-shadow: 0 0 0 var(--bs-button-secondary-outline-width, 0.2rem) var(--bs-button-secondary-outline-color, rgba(130, 138, 145, 0.5));
}

:host([secondary]) .btn:active {
  color: var(--bs-button-secondary-active-color, #fff);
  background-color: var(--bs-button-secondary-active-bg-color, #545b62);
  border-color: var(--bs-button-secondary-active-border-color, #4e555b);
}

:host([primary]) .btn {
  color: var(--bs-button-primary-color, #fff);
  background-color: var(--bs-button-primary-bg-color, #007bff);
  border-color: var(--bs-button-primary-border-color, #007bff);
}

:host([primary][outline]) .btn {
  color: var(--bs-button-primary-color, #007bff);
  background-color: transparent;
  border-color: var(--bs-button-primary-border-color, #007bff);
}

:host([primary]) .btn:hover {
  color: var(--bs-button-primary-hover-color, #fff);
  background-color: var(--bs-button-primary-hover-bg-color, #0069d9);
  border-color: var(--bs-button-primary-hover-border-color, #0062cc);
}

:host([primary]) .btn:focus {
  color: var(--bs-button-primary-focus-color, #fff);
  background-color: var(--bs-button-primary-focus-bg-color, #0069d9);
  border-color: var(--bs-button-primary-focus-border-color, #0062cc);
  box-shadow: 0 0 0 var(--bs-button-primary-outline-width, 0.2rem) var(--bs-button-primary-outline-color, rgba(38, 143, 255, 0.5));
}

:host([primary]) .btn:active {
  color: var(--bs-button-primary-active-color, #fff);
  background-color: var(--bs-button-primary-active-bg-color, #0062cc);
  border-color: var(--bs-button-primary-active-border-color, #005cbf);
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
}

:host([group]:first-child) .btn {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

:host([group]:not(:first-child):not(:last-child)) .btn {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

:host([group]:last-child) .btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}


`;
