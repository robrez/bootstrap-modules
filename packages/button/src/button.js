import { css, html, LitElement } from 'lit-element';
import buttonCss from './button-css';

class BsButton extends LitElement {
  //TODO control-state-mixin for focus delegation

  static get properties() {
    return {
      disabled: { type: Boolean }
    };
  }

  static get styles() {
    return [
      css`:host {
        outline: none;
        display: inline-block;
      }`,
      buttonCss
    ];
  }

  createRenderRoot() {
    return this.attachShadow({ mode: 'open', delegatesFocus: true });
  }

  render() {
    return html`
      <button class="btn" ?disabled=${this.disabled}><slot></slot></button>
    `;
  }

}

window.customElements.define('bs-button', BsButton);