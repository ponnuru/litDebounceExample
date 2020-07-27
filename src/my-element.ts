import {LitElement, html, customElement, property, css} from 'lit-element';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

const  debounce = (func: any, duration: any) => {
  let timeout;
  return function (...args ) {
    const effect = () => {
      timeout = null
      return func.apply(this, args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(effect, duration)
  }
}
};
const serviceCall= debounce((val : any) => {
  console.log('Making Service Call::', val);
}, 1000);

@customElement('my-element')
export class MyElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;

  /**
   * The name to say "Hello" to.
   */
  @property()
  name = 'Example';

  /**
   * The number of times the button has been clicked.
   */
  @property({type: Number})
  count = 0;

   /**
   * The number of times the button has been clicked.
   */
  @property({type: String})
  textFieldVal = '';

  render() {
    return html`
      <h1>Debounce, ${this.name}!</h1>
      </br>Please Enter debounce Text: 
      <input type="text" value=${this.textFieldVal} @keyup=${this._onChange}/>
      <slot></slot>
    `;
  }

  private _onClick() {
    console.log('Yes I clicked::');
    this.count++;
  }

  private _onChange(e) {
    this.textFieldVal = e.target.value;
    serviceCall(this.textFieldVal);
  }



  foo(): string {
    return 'foo';
  }

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
