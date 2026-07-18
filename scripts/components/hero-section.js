class HeroSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML =

    `
    <section id="inicio" class="hero">
    
    <p class="slogan">
    
           Aprenda Programação<br/>
        através dos Melhores Livros<br/>

         Encontre livros sobre HTML, CSS,<br/>
         JavaScript, React e muito mais.
     </p>

     <div class="btn-hero">
        <button>📚 Explorar Livros</button>
        <button>🔎 Pesquisar Livros</button>
        
     </div>

    </section>
     `
    ;
    }
}

customElements.define('hero-section', HeroSection)