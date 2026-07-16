class HeroSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML =

    `
    <main class="principal">
    <p class="slogan">
        Encontre os melhores livros para aprender programação.
     </p>
    </main>
     `

  ;
    }
}

customElements.define('hero-section', HeroSection)