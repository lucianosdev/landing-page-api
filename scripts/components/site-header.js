 class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML =

`<header class="cabecalho">
    <div class="logo">
        📚 Books & Code
    </div>

    <nav>
        <a href="./scripts/components/hero-section.js">Início</a>
        <a href="#">Livros</a>
        <a href="#">Sobre</a>
        <a href="#">Contato</a>
    </nav>
</header>`

  ;
    }
    
}

customElements.define('site-header', SiteHeader)
