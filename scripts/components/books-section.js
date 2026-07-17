class BooksSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section id="livros" class="books">
                <h2>Livros</h2>
            </section>
        `;
    }
}

customElements.define("books-section", BooksSection)