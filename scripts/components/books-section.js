import { buscarLivros } from "../services/api.js";
import { mostrarToast } from "../main.js";

class BooksSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section id="livros" class="books">

            <h2>Livros em Destaque</h2>

            <p>
                Descubra livros incríveis sobre programação, tecnologia e desenvolvimento.
            </p>

            <div class="books-grid"></div>

           

            <div class="busca">

              <label for="pesquisa">
                   Busque por um livro 🔎
              </label>

                <input
                type="text"
                id="pesquisa"
                placeholder="Informe um livro">

              <button class="btn-pesquisar">
                       Pesquisar
              </button>

            </div>

        </section>
        `;

    this.carregarLivros();
    this.configurarPesquisa();
  }

  async carregarLivros(termo = "JavaScript") {
    const grid = this.querySelector(".books-grid");
    const livros = await buscarLivros(termo);
    grid.innerHTML = "<p>📚 Carregando livros...</p>";

    if (livros.length === 0) {
      mostrarToast("📚 Nenhum livro encontrado.");

      return;
    }

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

                            ${(
                              info.description ?? "Sem descrição disponível."
                            ).substring(0, 120)}...

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

  configurarPesquisa() {
    const input = this.querySelector("#pesquisa");

    const botao = this.querySelector(".btn-pesquisar");

    botao.addEventListener("click", () => {
      const termo = input.value.trim();

      if (!termo) {
        mostrarToast("⚠️ Digite o nome de um livro para pesquisar.");

        return;
      }

      this.carregarLivros(termo);

      input.value = "";
    });

    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        const termo = input.value.trim();

        if (!termo) return;

        this.carregarLivros(termo);
      }
    });
  }
}

customElements.define("books-section", BooksSection);
