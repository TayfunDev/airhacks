import cut from "./service.js";
import Water from "./Water.js";

class View {

    constructor() {
        this.msg = `
            <h2>duke</h2>
        `;
        this.water = new Water();
    }

    message() {
        console.log(this.msg,this.water.dry());
    }

    async load() {
        const response = await fetch('flowers.json');
        const json = await response.json();
        const { flowers, water, speed = 12 } = json;
        console.log(flowers, water, speed);
    }
    

    get greet() { 
        cut();
        return `
        <h2>hello</h2>
            hello, ${this.msg}
        `;
    }

    set greet(g) { 
        console.log('greeting....',g);
    }

    static something() { 
        return "hello,static";
    }

}
const staticContent = View.something();
console.log(staticContent);
const view = new View();
view.load();

