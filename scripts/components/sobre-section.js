class SobreSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML =

    `
    <section id="sobre" class="sobre ">
    
    <p class="info">
    
       
     </p>

    </section>
     `
    ;
    }
}

customElements.define('sobre-section', SobreSection)