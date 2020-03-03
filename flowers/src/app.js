import Flower from  './Flower.js';
import { html, render } from "./lit-html.js";
import "./DatePicker.js";

class View extends HTMLElement { 

    constructor() { 
        super();
        this.root = this.attachShadow({mode:"open"});
        this.state = "empty";
        this.flowers = ['rose', 'anotherose'];
    }

    connectedCallback() { 
        this.render();
    }
    render() { 
        const template = html`
        <style>
            h2{
                color: red;
            }
        </style>
        <ui5-datepicker @change="${e => this.onDateChange(e)}"></ui5-datepicker>
        <h2>hello ${this.state}</h2>
        ${this.flowers.map(f => this.flowerify(f))}
        <button @click="${_ => this.load()}">say</button>
        `;
        render(template,this.root);
    }

    onDateChange({ detail: { value} }) { 
        console.log('event',value);
    }

    flowerify(f) { 
        return html`
                <ui5-datepicker @change="${e => this.onDateChange(e)}"></ui5-datepicker>
            ${new Flower()}
            <a-flower></a-flower>
        `;
    }

    async load() { 
        const response = await fetch('flowers.json');
        const json = await response.json();
        const { water } = json;
        this.state = water;

        console.log('hello!');
        this.render();
    }

    
}
customElements.define('a-view',View);