export default class Flower extends HTMLElement { 

    connectedCallback() { 
        this.innerHTML = "my flower is nice";
    }

}

customElements.define('a-flower',Flower);