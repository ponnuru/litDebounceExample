import { LitElement } from 'lit-element';
export declare class MyElement extends LitElement {
    static styles: import("lit-element").CSSResult;
    /**
     * The name to say "Hello" to.
     */
    name: string;
    /**
     * The number of times the button has been clicked.
     */
    count: number;
    /**
    * The number of times the button has been clicked.
    */
    textFieldVal: string;
    render(): import("lit-element").TemplateResult;
    private _onClick;
    private _onChange;
    foo(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-element': MyElement;
    }
}
//# sourceMappingURL=my-element.d.ts.map