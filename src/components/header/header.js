import { DivComponent } from "../../common/div-component";
import './header.css';

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
            <div class="menu">
                <a class="menu__item" href="#">
                    <img src="/static/search.svg" alt="Search icon" />
                    Поиск книг
                </a>
                <a class="menu__item" href="#">
                    <img src="/static/favorites.svg" alt="Favorite icon" />
                    Избранное
                    <div class="menu__counter">
                        ${this.appstate.favorites.length}
                    </div>
                </a>
            </div>
        `;
        return this.el;
    }
}