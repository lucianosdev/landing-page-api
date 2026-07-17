class HeroSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML =

    `
    <section id="inicio" class="hero">
    <p class="slogan">
        Encontre os melhores livros para aprender programação.
     </p>
     
    </section>
     `
    ;
    }
}

customElements.define('hero-section', HeroSection)