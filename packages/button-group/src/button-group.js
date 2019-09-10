import { css, html, LitElement } from 'lit-element';

class BsButtonGroup extends LitElement {
  //TODO control-state-mixin for focus delegation

  static get styles() {
    return css`
      :host {
        display: inline-flex;
      }
    `;
  }

  createRenderRoot() {
    return this.attachShadow({ mode: 'open' });
  }

  render() {
    return html`
      <slot id="contentSlot" @slotchange="${this._onSlotChanged}"></slot>
    `;
  }

  get _contentSlot() {
    if (this.shadowRoot) {
      return this.shadowRoot.querySelector("#contentSlot");
    } else {
      return;
    }
  }

  _onSlotChanged(e) {
    const elements = this._contentSlot.assignedElements();
    elements.forEach(this._ensureGroupAttr.bind(this));
  }

  _ensureGroupAttr(el) {
    if (el && el.setAttribute && !el.hasAttribute("group")) {
      el.setAttribute("group", "");
    }
  }

}

window.customElements.define('bs-button-group', BsButtonGroup);