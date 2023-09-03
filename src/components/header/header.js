import { DivComponent } from "../../common/div-component";

export class Header extends DivComponent {
    constructor(appstate) {
        super();
        this.appstate = appstate;
    }

    render() {
        this.el.innerHTML = "";
        this.el.classList.add("header");
        this.el.innerHTML = `
            <div>
                <img src="/static/logo.svg" alt="Logo" />
            </div>
        `;
        return this.el;
    }
}