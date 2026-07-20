import { buscarLivros } from "../services/api.js";

class BooksSection extends HTMLElement {

    connectedCallback() {

        this.innerHTML = `
        <section id="livros" class="books">

            <h2>Livros em Destaque</h2>

            <p>
                Descubra livros incríveis sobre programação, tecnologia e desenvolvimento.
            </p>

            <div class="books-grid"></div>

            <div class="tecnologias">

                <button class="btn-chip" data-busca="HTML">HTML</button>

                <button class="btn-chip" data-busca="React">React</button>

                <button class="btn-chip" data-busca="Spring Boot">Spring Boot</button>

            </div>

            <div class="busca">

                <label for="pesquisa">Busque por um livro 🔎</label>

                <input
                    type="text"
                    id="pesquisa"
                    placeholder="Informe um livro">

            </div>

        </section>
        `;

        this.carregarLivros();
        this.configurarChips();
    }

    async carregarLivros(termo = "React") {

        const grid = this.querySelector(".books-grid");

        // Loading
        grid.innerHTML = "<p>📚 Carregando livros...</p>";

        console.time("API");

        const livros = await buscarLivros(termo);

        console.timeEnd("API");

        let cards = "";

        livros.forEach((livro) => {

            const info = livro.volumeInfo;

            cards += `

                <article class="book-card">

                    <img
                        src="${info.imageLinks?.thumbnail ?? "https://placehold.co/180x260?text=Sem+Capa"}"
                        alt="${info.title}"
                    >

                    <div class="book-info">

                        <h3>${info.title}</h3>

                        <p class="autor">

                            ${info.authors?.join(", ") ?? "Autor desconhecido"}

                        </p>

                        <p class="descricao">

                            ${(info.description ?? "Sem descrição disponível.")
                                .substring(0, 120)}...

                        </p>

                        <a
                            href="${info.infoLink}"
                            target="_blank"
                            class="btn-book">

                            Ver Livro →

                        </a>

                    </div>

                </article>

            `;

        });

        grid.innerHTML = cards;

    }

    configurarChips() {

        const chips = this.querySelectorAll(".btn-chip");

        chips.forEach((chip) => {

            chip.addEventListener("click", () => {

                // Destaque visual do chip ativo
                chips.forEach(c => c.classList.remove("ativo"));
                chip.classList.add("ativo");

                const termo = chip.dataset.busca;

                console.log("Pesquisando:", termo);

                this.carregarLivros(termo);

            });

        });

    }

}

customElements.define("books-section", BooksSection);