var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, css } from 'lit-element';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
const debounce = (func, duration) => {
    let timeout;
    return function (...args) {
        const effect = () => {
            timeout = null;
            return func.apply(this, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(effect, duration);
    };
};
;
const serviceCall = debounce((val) => {
    console.log('Making Service Call::', val);
}, 1000);
let MyElement = class MyElement extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * The name to say "Hello" to.
         */
        this.name = 'Example';
        /**
         * The number of times the button has been clicked.
         */
        this.count = 0;
        /**
        * The number of times the button has been clicked.
        */
        this.textFieldVal = '';
    }
    render() {
        return html `
      <h1>Debounce, ${this.name}!</h1>
      </br>Please Enter debounce Text: 
      <input type="text" value=${this.textFieldVal} @keyup=${this._onChange}/>
      <slot></slot>
    `;
    }
    _onClick() {
        console.log('Yes I clicked::');
        this.count++;
    }
    _onChange(e) {
        this.textFieldVal = e.target.value;
        serviceCall(this.textFieldVal);
    }
    foo() {
        return 'foo';
    }
};
MyElement.styles = css `
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;
__decorate([
    property()
], MyElement.prototype, "name", void 0);
__decorate([
    property({ type: Number })
], MyElement.prototype, "count", void 0);
__decorate([
    property({ type: String })
], MyElement.prototype, "textFieldVal", void 0);
MyElement = __decorate([
    customElement('my-element')
], MyElement);
export { MyElement };
//# sourceMappingURL=my-element.js.map