 class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML =

`<header class="cabecalho">
    <div class="logo">
        📚 Books & Code
    </div>

    <nav>
        <a href="#inicio">Início</a>
        <a href="#sobre">Sobre</a>
        <a href="#livros">Livros</a>
        <a href="#contato">Contato</a>
    </nav>
</header>`
    ;
    }
    
}

customElements.define('site-header', SiteHeader)
