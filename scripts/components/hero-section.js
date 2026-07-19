class HeroSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML =

    `
    <section id="inicio" class="hero">
    
    <p class="slogan">
    
          Aprenda Programação
        através dos Melhores Livros<br/>

         Encontre livros sobre HTML, CSS,<br/>
         JavaScript, React e muito mais.
     </p>

     <div class="acesso-books">
        <button class="btn-hero">📚 Explorar Livros</button>
        <button class="btn-hero">🔎 Pesquisar Livros</button>
        
     </div>

    </section>
     `
    ;
    }
}

customElements.define('hero-section', HeroSection)