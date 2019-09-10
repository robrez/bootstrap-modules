import { css, html, LitElement } from 'lit-element';
import Popper from 'popper.js/dist/esm/popper';

class BsPopover extends LitElement {
  //TODO control-state-mixin for focus delegation

  static get properties() {
    return {
      opened: { type: Boolean }
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      #contentSlot:not([opened]) {
        visibility: hidden;
        display: none;
      }

      /*copied from popper.css*/
     .popper {
        position: absolute;
        display: block;
        background-clip: padding-box;
        background: #FFC107;
        color: black;
        border-radius: 3px;
        box-shadow: 0 0 2px rgba(0,0,0,0.5);
        padding: 10px;
        text-align: center;
     }
     .popper .popper__arrow {
        width: 0;
        height: 0;
        border-style: solid;
        position: absolute;
        margin: 5px;
     }

     .popper .popper__arrow {
        border-color: #FFC107;
     }
     .popper[x-placement^="top"] {
        margin-bottom: 5px;
     }
     .popper[x-placement^="top"] .popper__arrow {
        border-width: 5px 5px 0 5px;
        border-left-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        bottom: -5px;
        left: calc(50% - 5px);
        margin-top: 0;
        margin-bottom: 0;
     }
     .popper[x-placement^="bottom"] {
        margin-top: 5px;
     }
     .popper[x-placement^="bottom"] .popper__arrow {
        border-width: 0 5px 5px 5px;
        border-left-color: transparent;
        border-right-color: transparent;
        border-top-color: transparent;
        top: -5px;
        left: calc(50% - 5px);
        margin-top: 0;
        margin-bottom: 0;
     }
     .popper[x-placement^="right"] {
         margin-left: 5px;
     }
     .popper[x-placement^="right"] .popper__arrow {
        border-width: 5px 5px 5px 0;
        border-left-color: transparent;
        border-top-color: transparent;
        border-bottom-color: transparent;
        left: -5px;
        top: calc(50% - 5px);
        margin-left: 0;
        margin-right: 0;
     }
     .popper[x-placement^="left"] {
        margin-right: 5px;
     }
     .popper[x-placement^="left"] .popper__arrow {
        border-width: 5px 0 5px 5px;
        border-top-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        right: -5px;
        top: calc(50% - 5px);
        margin-left: 0;
        margin-right: 0;
     }


    `;
  }

  render() {
    return html`
      <button id="toggle" @click="${this._onClick}">click</button>
      <div id="contentSlot" class="popper" ?opened="${this.opened}">
        <div id="arrow" class="popper__arrow"></div>
        <slot id="contentSlotz"></slot>
      </div>
    `;
  }

  get _contentSlot() {
    if (this.shadowRoot) {
      return this.shadowRoot.querySelector("#contentSlot");
    }
  }

  get _arrow() {
    if (this.shadowRoot) {
      return this.shadowRoot.querySelector("#arrow");
    }
  }

  get _toggle() {
    if (this.shadowRoot) {
      return this.shadowRoot.querySelector("#toggle");
    }
  }

  _createPopper() {
    if (this._popper) {
      this._popper.destroy();
      this._popper = null;
    }
    const ref = this._toggle;
    const x = this._contentSlot;
    this._el = x;
    //const x = document.createElement("div");
    //x.appendChild(this._contentSlot);
    //this.shadowRoot.appendChild(x);
    const defaultConfig = {
      placement: 'bottom',
      keepTogether: {
        enabled: true,
      },
      positionFixed: true,
    };
    const cfg = {
      placement: 'top',
      keepTogether: {
        enabled: true,
      },
      arrow: {
        enabled: true,
        element: this._arrow
      },
      flip: {
        behavior: ['right', 'bottom', 'top']
      },
    }
    var popper = new Popper(ref, x, {
      ...defaultConfig,
      ...cfg
    });
    this._popper = popper;
  }

  open() {
    if (this._popper) {
      this._popper.update();
    } else {
      this._createPopper();
      requestAnimationFrame(() => {
        this._popper.update();
      });
    }
    this.opened = true;
  }

  close() {
    if (this._popper) {
      this._popper.destroy();
      this._popper = null;
    }
    this.opened = false;
  }

  toggle() {
    if (this.opened) {
      this.close();
    } else {
      this.open();
    }
    console.log(this._el);
  }

  _onClick() {
    this.toggle();
  }

}

window.customElements.define('bs-popover', BsPopover);