class BooksSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section id="livros" class="books">
             <p class="p-books">
                Pesquisar livros de programação... 
                 🔎
             </p>
            
             <div class="btn-books">
                <button>HTML</button>
                <button>CSS</button>
                <button>JavaScript</button>
                <button>React</button>
                <button>Spring Boot</button>
        
            </div>
            </section>
        `;
    }
}

customElements.define("books-section", BooksSection)