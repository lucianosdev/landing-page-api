class SobreSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML =

    `
    <section id="sobre" class="sobre">
    
    <p class="info">
        O Books & Code é uma plataforma que ajuda estudantes e desenvolvedores a encontrarem 
         livros sobre tecnologias como HTML, CSS, JavaScript, React e Spring Boot. 
         Os livros são obtidos dinamicamente por meio da Google Books API, 
         oferecendo uma forma simples e organizada de descobrir novos materiais de estudo.
       
     </p>

    </section>
     `
    ;
    }
}

customElements.define('sobre-section', SobreSection)