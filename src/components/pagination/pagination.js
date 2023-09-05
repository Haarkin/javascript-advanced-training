import { DivComponent } from "../../common/div-component";
import './pagination.css';

export class Pagination extends DivComponent {
    constructor(parentState) {
        super();
        this.parentState = parentState;
    }

    #previousPage() {
		this.parentState.offset--;
	}

	#nextPage() {
		this.parentState.offset++;
	}

    render() {
        this.el.innerHTML = "";
        this.el.classList.add("pagination");
        this.el.innerHTML = `
            <button class="pagination__previous-page">
                <img src="/static/arrow.svg" alt="Previous page">
                Предыдущая страница
            </button>
            <button class="pagination__next-page">
                <img src="/static/arrow.svg" alt="Next page">
                Следующая страница
            </button>
        `
        this.el
				.querySelector('pagination__previous-page')
				.addEventListener('click', this.#previousPage.bind(this));
        this.el
				.querySelector('pagination__next-page')
				.addEventListener('click', this.#nextPage.bind(this));
        return this.el;
    }
}