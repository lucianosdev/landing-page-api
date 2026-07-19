class BooksSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section id="livros" class="books">
             <p class="p-books">
                Livros de programação... 
                 🔎
             </p>

        <div class="tecnologias">

            <button class="btn-chip" data-busca="HTML">HTML</button>

            <button class="btn-chip" data-busca="CSS">CSS</button>

            <button class="btn-chip" data-busca="JavaScript">JavaScript</button>

            <button class="btn-chip" data-busca="React">React</button>

            <button class="btn-chip" data-busca="Spring Boot">Spring Boot</button>

        </div>

         <div class="busca">
                <label id="pesquisa">Busque por um livro
                        <input type="text" id="pesq" placeholder="Informe um livro"/>
                </label>
          </div>

     </section>
        `;
  }
}

customElements.define("books-section", BooksSection);
