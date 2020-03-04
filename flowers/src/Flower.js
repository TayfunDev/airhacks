export default class Flower extends HTMLElement { 

    connectedCallback() { 
        this.innerHTML = "my flower is nice";
        const event = new CustomEvent('hugo', {
            detail: {
                flower: 'green'
            },
            bubbles: true
        });
        setTimeout(_=>window.dispatchEvent(event),5000);
    }

}

customElements.define('a-flower',Flower);